
from CRUD.Table import *
import mysql.connector
import pandas
import numpy as np
from mysql.connector import Error
import os.path

def createDatabase(database):
    try:
        connection = mysql.connector.connect(
            host="localhost",
            port='3306',
            user="root",
            password="sqlserver@"
        )
        mycursor = connection.cursor()
        mycursor.execute("CREATE DATABASE " + database)
        connection.close()
        return "commit"
    except Error as e:
        print(e)
        return "Failed"

print(createDatabase("Optum"))
#create these two tables
#Create table optum.heartbeat
#(
# timestamp datetime default now(),
# beat int
# );
# Create table optum.pressure
#(
 #timestamp datetime default now(),
 #low int,
 #height int
 #);
tables = [
    '(START DATE,STOP DATE,PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255))',
    '(Id VARCHAR(255),START DATE,STOP DATE,PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255),REASONCODE VARCHAR(255),REASONDESCRIPTION VARCHAR(255))',
    '(START DATE,STOP DATE,PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255))',
    '(START VARCHAR(255),STOP VARCHAR(255),PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255),UDI VARCHAR(255))',
    '(Id VARCHAR(255),START VARCHAR(255),STOP VARCHAR(255),PATIENT VARCHAR(255),ORGANIZATION VARCHAR(255),PROVIDER VARCHAR(255),PAYER VARCHAR(255),ENCOUNTERCLASS VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255),BASE_ENCOUNTER_COST FLOAT,TOTAL_CLAIM_COST FLOAT,PAYER_COVERAGE FLOAT,REASONCODE VARCHAR(255),REASONDESCRIPTION VARCHAR(255))',
    '(Id VARCHAR(255),DATE VARCHAR(255),PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),BODYSITE_CODE VARCHAR(255),BODYSITE_DESCRIPTION VARCHAR(255),MODALITY_CODE VARCHAR(255),MODALITY_DESCRIPTION VARCHAR(255),SOP_CODE VARCHAR(255),SOP_DESCRIPTION VARCHAR(255))',
    '(DATE VARCHAR(255),PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255),BASE_COST FLOAT)',
    '(START VARCHAR(255),STOP VARCHAR(255),PATIENT VARCHAR(255),PAYER VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255),BASE_COST FLOAT,PAYER_COVERAGE FLOAT,DISPENSES INT,TOTALCOST FLOAT,REASONCODE VARCHAR(255),REASONDESCRIPTION VARCHAR(255))',
    '(DATE VARCHAR(255),PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255),VALUE VARCHAR(255),UNITS VARCHAR(255),TYPE VARCHAR(255))',
    '(Id VARCHAR(255),NAME VARCHAR(255),ADDRESS VARCHAR(255),CITY VARCHAR(255),STATE VARCHAR(255),ZIP VARCHAR(255),LAT FLOAT,LON FLOAT,PHONE VARCHAR(255),REVENUE FLOAT,UTILIZATION FLOAT)',
    '(Id VARCHAR(255),BIRTHDATE DATE,DEATHDATE DATE,SSN VARCHAR(255),DRIVERS VARCHAR(255),PASSPORT VARCHAR(255),PREFIX VARCHAR(255),FIRST VARCHAR(255),LAST VARCHAR(255),SUFFIX VARCHAR(255),MAIDEN VARCHAR(255),MARITAL VARCHAR(255),RACE VARCHAR(255),ETHNICITY VARCHAR(255),GENDER VARCHAR(255),BIRTHPLACE VARCHAR(255),ADDRESS VARCHAR(255),CITY VARCHAR(255),STATE VARCHAR(255),COUNTY VARCHAR(255),ZIP VARCHAR(255),LAT FLOAT,LON FLOAT,HEALTHCARE_EXPENSES FLOAT,HEALTHCARE_COVERAGE FLOAT)',
    '(PATIENT VARCHAR(255),START_YEAR INT,END_YEAR INT,PAYER VARCHAR(255),OWNERSHIP VARCHAR(255))',
    '(Id VARCHAR(255),NAME VARCHAR(255),ADDRESS VARCHAR(255),CITY VARCHAR(255),STATE_HEADQUARTERED VARCHAR(255),ZIP VARCHAR(255),PHONE VARCHAR(255),AMOUNT_COVERED FLOAT,AMOUNT_UNCOVERED FLOAT,REVENUE FLOAT,COVERED_ENCOUNTERS INT,UNCOVERED_ENCOUNTERS INT,COVERED_MEDICATIONS INT,UNCOVERED_MEDICATIONS INT,COVERED_PROCEDURES INT,UNCOVERED_PROCEDURES INT,COVERED_IMMUNIZATIONS INT,UNCOVERED_IMMUNIZATIONS INT,UNIQUE_CUSTOMERS INT,QOLS_AVG FLOAT,MEMBER_MONTHS INT)',
    '(DATE DATE,PATIENT VARCHAR(255),ENCOUNTER VARCHAR(255),CODE VARCHAR(255),DESCRIPTION VARCHAR(255),BASE_COST FLOAT,REASONCODE VARCHAR(255),REASONDESCRIPTION VARCHAR(255))',
    '(Id VARCHAR(255),ORGANIZATION VARCHAR(255),NAME VARCHAR(255),GENDER VARCHAR(255),SPECIALITY VARCHAR(255),ADDRESS VARCHAR(255),CITY VARCHAR(255),STATE VARCHAR(255),ZIP VARCHAR(255),LAT FLOAT,LON FLOAT,UTILIZATION FLOAT)'
]
tablenames = ['allergies','careplans','conditions','devices','encounters','imaging_studies','immunizations','medications','observations','organizations','patients','payer_transitions','payers','procedures','providers']
i=0
csv =pandas.read_csv(os.path.abspath(os.path.dirname(os.path.abspath(__file__))) +'\\csv\\allergies.csv').to_numpy()

notinserted = {'imaging_studies':1,'immunizations':1,'medications':1,'observations':1}
print(tuple(csv[0]))
for tab in tablenames:
    table = Table(tab,"Optum")
    table.create(tables[i])
    csv =pandas.read_csv(os.path.abspath(os.path.dirname(os.path.abspath(__file__))) +'\\csv\\'+tab+'.csv').to_numpy()
    for row in csv:
        for i in range(0,len(row)):
            if row[i]!=row[i]:
                row[i]=''
        st= str(tuple(row))
        table.insert('',st)

    i = i + 1

#table = Table('Data_Table')
#tuple = '(ID INT AUTO_INCREMENT PRIMARY KEY, csv VARCHAR(225),rows_inserted int,total_rows int,state VARCHAR(20),stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
#table.create(tuple)