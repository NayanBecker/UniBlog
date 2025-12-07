import { FastifyInstance } from 'fastify';
import { curtirController, descurtirController, comentarController, deletarComentarioController, getInteracoesController } from '../controllers/interacoes.controller';
import { comentarSchemaDoc, curtirSchemaDoc, deletarComentarioSchemaDoc, getInteracoesSchemaDoc } from '@/controllers/schemas/interacoes.schema';

export async function interacoesRoutes(app: FastifyInstance) {
    app.post('/',
        {
            schema: curtirSchemaDoc,
        },
        curtirController
    );
    app.delete('/',
        {
            schema: curtirSchemaDoc,
        },
        descurtirController
    );
    app.post('/comentario',
        {
            schema: comentarSchemaDoc,
        },
        comentarController
    );
    app.delete('/comentario',
        {
            schema: deletarComentarioSchemaDoc,
        },
        deletarComentarioController
    );
    app.get('/',
        {
            schema: getInteracoesSchemaDoc,
        },
        getInteracoesController
    );
}
