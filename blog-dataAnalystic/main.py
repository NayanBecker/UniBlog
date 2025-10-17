import psycopg2
import pandas as pd

connection = psycopg2.connect(
    host="localhost",
    database="uniblog",
    user="postgres",
    password="postgres"
)
query = "SELECT * FROM \"T_Perfil\";"

df = pd.read_sql_query(query, connection)
data = df.copy()
print(data.head())
connection.close()
