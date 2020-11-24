from flask import Flask, jsonify, request
from CRUD.Table import Table
import json
import pickle
from sklearn.svm import SVR
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import RandomForestRegressor
import numpy as np
import pandas as pd
import os.path
app = Flask(__name__)


#health care cost and payer cost prediction
def predict_cost(model, dicti):
 di = {'AGE': 0, 'LAT': 0, 'LON': 0, 'ethnicity_hispanic': 0.0, 'ethnicity_nonhispanic': 0.0, 'gender_F': 0.0,
       'gender_M': 0.0, 'marital_M': 0.0, 'marital_S': 0.0, 'race_asian': 0.0,
       'race_black': 0.0, 'race_native': 0.0, 'race_white': 0.0, 'reasoncode_10509002.0': 0.0,
       'reasoncode_185086009.0': 0.0, 'reasoncode_192127007.0': 0.0, 'reasoncode_195662009.0': 0.0,
       'reasoncode_201834006.0': 0.0, 'reasoncode_230265002.0': 0.0, 'reasoncode_233678006.0': 0.0,
       'reasoncode_239872002.0': 0.0, 'reasoncode_239873007.0': 0.0, 'reasoncode_24079001.0': 0.0,
       'reasoncode_254837009.0': 0.0, 'reasoncode_26929004.0': 0.0, 'reasoncode_301011002.0': 0.0,
       'reasoncode_363406005.0': 0.0, 'reasoncode_36971009.0': 0.0, 'reasoncode_38822007.0': 0.0,
       'reasoncode_40275004.0': 0.0, 'reasoncode_424132000.0': 0.0, 'reasoncode_43878008.0': 0.0,
       'reasoncode_44054006.0': 0.0, 'reasoncode_444814009.0': 0.0, 'reasoncode_55822004.0': 0.0,
       'reasoncode_59621000.0': 0.0, 'reasoncode_75498004.0': 0.0, 'reasoncode_87433001.0': 0.0,
       'reasoncode_88805009.0': 0.0, 'reasoncode_90560007.0': 0.0}
 # df=pd.DataFrame(di)
 di['AGE'] = (dicti['AGE'])
 di['LAT'] = (dicti['LAT'])
 di['LON'] = (dicti['LON'])
 di['ethnicity_' + dicti['ethnicity']] = 1.0
 di['gender_' + dicti['gender']] = 1.0
 di['marital_' + dicti['marital']] = 1.0
 di['race_' + dicti['race']] = 1.0
 di['reasoncode_' + dicti['reasoncode'] + '.0'] = 1.0
 return model.predict(pd.DataFrame(di, index=[0]))[0]



#prediction of careplan
def predict_careplan(model, dicti):
  test_X=pd.read_csv(os.path.abspath(os.path.dirname(os.path.abspath(__file__))) +"/pickle/test_X.csv",index_col=False)
  test_X = test_X.drop(test_X.columns[0], axis=1)
  test_X.loc[len(test_X)]=0
  test_X["LAT"].loc[len(test_X)-1]=float(dicti["LAT"])
  test_X["LON"].loc[len(test_X)-1]=float(dicti["LON"])
  test_X['ethnicity_'+dicti['ethnicity']].loc[len(test_X)-1]=1.0
  test_X['gender_'+dicti['gender']].loc[len(test_X)-1]=1.0
  test_X['marital_'+dicti['marital']].loc[len(test_X)-1]=1.0
  test_X['race_'+dicti['race']].loc[len(test_X)-1]=1.0
  test_X['reasoncode_'+dicti['reasoncode']+'.0'].loc[len(test_X)-1]=1.0
  return model.predict(test_X[len(test_X)-1:len(test_X)])[0]


@app.route('/', methods=['POST','GET'])
def processRequest():
    type = request.args.get('type')

    if type == 'read':
        table = Table('allergies')
        query = request.args.get('query')
        val=table.runReadQuery(query,table.connection)
        return json.dumps(val)

    if type == 'health':
        table1=Table('heartbeat')
        table2=Table('pressure')
        i1=table1.generateBeat()
        i2=table2.generatePressure()
        table1.insert('(beat)',"("+str(i1)+")")
        table2.insert('(low,height)', str(tuple(i2)))
        return {"heart":i1,"pressure":i2}
    if type == 'careplan':
        di1 = request.json
        pickle_off = open(os.path.abspath(os.path.dirname(os.path.abspath(__file__))) +"/pickle/predict_careplan.pkl", "rb")
        model = pickle.load(pickle_off)
        v = predict_careplan(model, di1)
        retv = ''
        df_codes = df = pd.read_csv(os.path.abspath(os.path.dirname(os.path.abspath(__file__))) +'/pickle/code.csv')
        print(v)
        for i in range(len(df_codes["CODE"])):
            if df_codes["CODE"][i] == v:
                retv = df_codes["DESCRIPTION"][i]
        return retv
    if type == 'payer':
        di1 = request.json
        pickle_off = open(os.path.abspath(os.path.dirname(os.path.abspath(__file__))) +"/pickle/predict_payer.pkl", "rb")
        model = pickle.load(pickle_off)
        v = predict_cost(model, di1)
        return str(v)
    if type == 'cost':
        di1 = request.json
        pickle_off = open(os.path.abspath(os.path.dirname(os.path.abspath(__file__))) +"/pickle/predict_cost.pkl", "rb")
        model = pickle.load(pickle_off)
        v = predict_cost(model, di1)
        return str(v)
    return "null"

if __name__ == '__main__':
    app.run()
