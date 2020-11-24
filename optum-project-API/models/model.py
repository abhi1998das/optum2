import pickle
from sklearn.svm import SVR
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import RandomForestRegressor
import numpy as np
import pandas as pd
import models.model
import os.path

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
 di = {'AGE': 0, 'LAT': 0, 'LON': 0, 'ethnicity_hispanic': 0.0, 'ethnicity_nonhispanic': 0.0, 'gender_F': 0.0,
       'gender_M': 0.0, 'marital_M': 0.0, 'marital_S': 0.0, 'race_asian': 0.0,
       'race_black': 0.0, 'race_native': 0.0, 'race_other': 0.0, 'race_white': 0.0, 'reasoncode_10509002.0': 0.0,
       'reasoncode_109838007.0': 0.0,
       'reasoncode_110030002.0': 0.0,
       'reasoncode_126906006.0': 0.0,
       'reasoncode_15724005.0': 0.0,
       'reasoncode_15777000.0': 0.0,
       'reasoncode_16114001.0': 0.0,
       'reasoncode_185086009.0': 0.0,
       'reasoncode_192127007.0': 0.0,
       'reasoncode_201834006.0': 0.0,
       'reasoncode_230265002.0': 0.0,
       'reasoncode_233678006.0': 0.0,
       'reasoncode_239720000.0': 0.0,
       'reasoncode_239872002.0': 0.0,
       'reasoncode_239873007.0': 0.0,
       'reasoncode_24079001.0': 0.0,
       'reasoncode_262574004.0': 0.0,
       'reasoncode_263102004.0': 0.0,
       'reasoncode_26929004.0': 0.0,
       'reasoncode_283371005.0': 0.0,
       'reasoncode_283385000.0': 0.0,
       'reasoncode_284549007.0': 0.0,
       'reasoncode_284551006.0': 0.0,
       'reasoncode_301011002.0': 0.0,
       'reasoncode_307731004.0': 0.0,
       'reasoncode_30832001.0': 0.0,
       'reasoncode_33737001.0': 0.0,
       'reasoncode_359817006.0': 0.0,
       'reasoncode_363406005.0': 0.0,
       'reasoncode_36923009.0': 0.0,
       'reasoncode_370143000.0': 0.0,
       'reasoncode_370247008.0': 0.0,
       'reasoncode_38822007.0': 0.0,
       'reasoncode_39848009.0': 0.0,
       'reasoncode_40275004.0': 0.0,
       'reasoncode_403190006.0': 0.0,
       'reasoncode_403191005.0': 0.0,
       'reasoncode_424132000.0': 0.0,
       'reasoncode_44054006.0': 0.0,
       'reasoncode_444448004.0': 0.0,
       'reasoncode_444470001.0': 0.0,
       'reasoncode_44465007.0': 0.0,
       'reasoncode_449868002.0': 0.0,
       'reasoncode_45816000.0': 0.0,
       'reasoncode_47505003.0': 0.0,
       'reasoncode_55680006.0': 0.0,
       'reasoncode_55822004.0': 0.0,
       'reasoncode_58150001.0': 0.0,
       'reasoncode_59621000.0': 0.0,
       'reasoncode_62106007.0': 0.0,
       'reasoncode_62564004.0': 0.0,
       'reasoncode_65966004.0': 0.0,
       'reasoncode_67811000119102.0': 0.0,
       'reasoncode_69896004.0': 0.0,
       'reasoncode_70704007.0': 0.0,
       'reasoncode_72892002.0': 0.0,
       'reasoncode_87433001.0': 0.0,
       'reasoncode_88805009.0': 0.0,
       'reasoncode_90560007.0': 0.0,
       'reasoncode_93761005.0': 0.0,
       'reasoncode_94260004.0': 0.0,
       'reasoncode_95417003.0': 0.0}
 di['AGE'] = float(dicti['AGE'])
 di['LAT'] = float(dicti['LAT'])
 di['LON'] = float(dicti['LON'])
 di['ethnicity_' + dicti['ethnicity']] = 1.0
 di['gender_' + dicti['gender']] = 1.0
 di['marital_' + dicti['marital']] = 1.0
 di['race_' + dicti['race']] = 1.0
 di['reasoncode_' + dicti['reasoncode'] + '.0'] = 1.0
 return model.predict(pd.DataFrame(di, index=[0]))[0]

di={'AGE': 18.956164383561642,
'LAT': 42.181642300277424,
 'LON': -72.60884222581656,
 'ethnicity': 'nonhispanic',
 'gender': 'M',
 'marital': 'M',
 'race': 'white',
 'reasoncode': '10509002',
 }
pickle_off = open("C:\\users\\jasmi\\PycharmProjects\\optum-project-API\\pickle\\predict_payer (1).pkl", "rb")
model = pickle.load(pickle_off)
v = predict_cost(model, di)
print(v)