import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

query = """
SELECT "tipo_Perfil", COUNT(*) AS total
FROM "T_Perfil"
GROUP BY "tipo_Perfil";
"""

def grafico_perfis_tipo(conn):
    df = pd.read_sql(query, conn)
    sns.barplot(x='tipo_Perfil', y='total', data=df)
    plt.title('Distribuição de Perfis (Pessoal x Comunidade)')
    plt.xlabel('Tipo de Perfil')
    plt.ylabel('Quantidade')
    plt.show()
