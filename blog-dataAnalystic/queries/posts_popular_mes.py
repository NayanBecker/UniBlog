import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np


query = """
    WITH engajamento AS (
        SELECT
            p."id_Post",
            DATE_TRUNC('month', p."createdAt_Post") AS mes,
            COUNT(DISTINCT c."id_Curtida") AS total_curtidas,
            COUNT(DISTINCT co."id_Comentario") AS total_comentarios,
            (COUNT(DISTINCT c."id_Curtida") + COUNT(DISTINCT co."id_Comentario")) AS engajamento_total
        FROM "T_Post" p
        LEFT JOIN "T_PostInteracaoCapa" pic ON p."id_Post" = pic."id_Post_PIC"
        LEFT JOIN "T_PIC_Curtidas" c ON pic."id_PIC" = c."id_PIC_Curtida"
        LEFT JOIN "T_PIC_Comentarios" co ON pic."id_PIC" = co."id_PIC_Comentario"
        GROUP BY p."id_Post", mes
    ) 
    SELECT 
        mes,
        "id_Post",
        engajamento_total
    FROM (
        SELECT 
            e.*,
            ROW_NUMBER() OVER (PARTITION BY e.mes ORDER BY e.engajamento_total DESC) AS rank
        FROM engajamento e
    ) ranked
    WHERE rank <= 3
    ORDER BY mes DESC, engajamento_total DESC;
    """

def grafico_posts_populares_mes(conn):
    df = pd.read_sql_query(query, conn)
    df['mes'] = pd.to_datetime(df['mes'])
    df = df.sort_values('mes')  # ordena cronologicamente
    df['mes_nome'] = df['mes'].dt.strftime('%b/%Y')
    months_order = df[['mes', 'mes_nome']].drop_duplicates().sort_values('mes')['mes_nome'].tolist()
    max_barras = int(df.groupby('mes_nome').size().max())
    palette = sns.color_palette('viridis', n_colors=max_barras)
    plt.figure(figsize=(14, 7))
    sns.set_theme(style="whitegrid")
    bar_width = 0.2  # largura de cada barra
    x_positions = np.arange(len(months_order))
    max_val = df['engajamento_total'].max() if not df.empty else 1
    for i, mes in enumerate(months_order):
        rows = df[df['mes_nome'] == mes].reset_index(drop=True)
        n = len(rows)
        offsets = [(j - (n-1)/2) * bar_width for j in range(n)]
        for j, row in rows.iterrows():
            x = i + offsets[j]
            height = row['engajamento_total']
            color = palette[j]  # cor dependendo da posição (1º/2º/3º)
            plt.bar(x, height, width=bar_width, label=f"#{row['id_Post']}" if i==0 else "", color=color, edgecolor='black', alpha=0.85)
            plt.text(
                x,
                height + max_val * 0.01,  # pequeno espaço acima da barra
                f"#{int(row['id_Post'])}",
                ha='center',
                va='bottom',
                fontsize=9,
                fontweight='bold'
            )
    plt.xticks(x_positions, months_order, rotation=45)
    plt.title('🔥 Top 3 Posts Mais Populares por Mês', fontsize=16, fontweight='bold', pad=12)
    plt.xlabel('Mês', fontsize=12)
    plt.ylabel('Engajamento Total (Curtidas + Comentários)', fontsize=12)
    plt.tight_layout()
    legend_handles = []
    legend_labels = []
    for pos in range(max_barras):
        legend_handles.append(plt.Rectangle((0,0),1,1, color=palette[pos], edgecolor='black'))
        legend_labels.append(f'{pos+1}º lugar no mês')
    plt.legend(legend_handles, legend_labels, title='Posição no mês', bbox_to_anchor=(1.02, 1), loc='upper left')

    plt.show()