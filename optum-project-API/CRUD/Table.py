import mysql.connector
from mysql.connector import Error
import random
class Table:

    def __init__(self,tablename,database='Optum'):
        self.tablename = tablename
        self.database = database
        self.connection = self.getConnection(database)

    def create(self,tuple):
        task = self.runQuery( ("""CREATE TABLE """ + self.tablename + " " + tuple),self.connection)
        print(self.tablename)
        if task == "Commit":
            self.created = True

    def insert(self,columns,values):
        query = """Insert into """ + self.tablename + columns + """ Values """ + values
        return self.runQuery(query,self.connection)

    def read(self):
        self.record = self.runReadQuery(("""select * from """+ str(self.tablename)), self.connection)
        self.columns = self.runReadQueryColumns(("""select * from """+ str(self.tablename)), self.connection)
        return self.record

    def runManyQuery(self,queryString, tuple, connection):
        try:
            cursor = connection.cursor(buffered=True)
            print(queryString)
            cursor.executemany(queryString, tuple)

            connection.commit()
            cursor.close()
            return "Commit"
        except Error as e:
            print(e)
            return None

    def runQuery(self,queryString, connection):
        try:
            cursor = connection.cursor()
            print(queryString)
            cursor.execute(queryString)
            self.lastID = cursor.lastrowid
            connection.commit()
            return "Commit"
        except Error as e:
            print(e)
            return None

    def runReadQuery(self,queryString, connection):
        try:
            cursor = connection.cursor()
            cursor.execute(queryString)
            return cursor.fetchall()
        except Error as e:
            print(e)
            return None

    def generateBeat(self):
        v=random.randint(60,110)
        return v

    def generatePressure(self):
        l=random.randint(50,110)
        r=random.randint(l+10,160)
        return [l,r]

    def runReadQueryColumns(self,queryString, connection):
        try:
            cursor = connection.cursor()
            cursor.execute(queryString)
            field_names = [i[0] for i in cursor.description]
            return field_names
        except Error as e:
            print(e)
            return None

    def getConnection(self,database):
        try:
            connection = mysql.connector.connect(
                host="localhost",
                port='3306',
                user="root",
                password="sqlserver@",
                database=database
            )
            return connection
        except Error as e:
            print(e)
            return None

