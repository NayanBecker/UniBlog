from connection import get_connection
from queries.perfil_Tipo import grafico_perfis_tipo
from queries.engajamento_post import grafico_engajamento_post
from queries.posts_por_mes import grafico_posts_por_mes
from queries.posts_por_semestre import grafico_posts_por_semestre
from queries.engajamento_por_tipo import grafico_engajamento_por_tipo
from queries.posts_por_curso import grafico_posts_por_curso
from queries.tema_popular_mes import grafico_tema_popular_mes
from queries.posts_popular_mes import grafico_posts_populares_mes


def main():
    conn = get_connection()
    if not conn:
        return

    print("✅ Conectado ao banco de dados!")

    grafico_posts_populares_mes(conn)
    # grafico_tema_popular_mes(conn)
    # grafico_perfis_tipo(conn)
    # grafico_posts_por_curso(conn)
    # grafico_engajamento_post(conn) MT BOSTA GRAFICO
    # grafico_posts_por_mes(conn)
    # grafico_posts_por_semestre(conn)
    # grafico_engajamento_por_tipo(conn) # MT BOSTA GRAFICO

    conn.close()

if __name__ == "__main__":
    main()
