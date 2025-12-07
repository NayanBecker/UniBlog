import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';


export const createProfileSchema = z.object({
  nome_Perfil: z.string().max(100, 'O nome pode ter no máximo 100 caracteres'),
  email_Perfil: z.string().email('Email inválido').max(100, 'O email pode ter no máximo 100 caracteres'),
  foto_Perfil: z.string().optional(),
  descricao_Perfil: z.string().max(255, 'A descrição pode ter no máximo 255 caracteres').optional(),
  tipo_Perfil: z.enum(['PESSOAL', 'COMUNIDADE']),
  semestre_Perfil: z.preprocess(val => Number(val), z.number().int().min(1).max(20).optional()),
  id_Curso_Perfil: z.preprocess(val => Number(val), z.number().int().positive().optional()),
});

export const createProfileSchemaDoc = {
  tags: ['Profile'],
  description: 'Endpoint para criar um novo perfil de usuário.',
  body: zodToJsonSchema(createProfileSchema)
};


export const updateProfileSchema = z.object({
  id_Perfil: z.number().int('O ID deve ser um número inteiro').positive('O ID deve ser um número positivo'),
  nome_Perfil: z.string().max(100, 'O nome pode ter no máximo 100 caracteres').optional(),
  email_Perfil: z.string().email('Email inválido').max(100, 'O email pode ter no máximo 100 caracteres').optional(),
  foto_Perfil: z.string().optional(),
  descricao_Perfil: z.string().max(255, 'A descrição pode ter no máximo 255 caracteres').optional(),
  semestre_Perfil: z.coerce.number().int().min(1).max(20).optional(),
  id_Curso_Perfil: z.coerce.number().int().positive().optional(),
});

export const updateProfileSchemaDoc = {
  tags: ['Profile'],
  description: 'Endpoint para atualizar um perfil de usuário.',
  body: zodToJsonSchema(updateProfileSchema)
};


export const idProfileSchema = z.object({
  id_Perfil: z.coerce.number().int().positive(),
});


export const getProfileSchemaDoc = {
  tags: ['Profile'],
  description: 'Schema para validação do ID do perfil.',
  headers: {
    type: 'object',
    properties: {
      id_Perfil: {
        type: 'number',
        description: 'ID do perfil do usuário'
      }
    },
    required: ['id_Perfil']
  },
};

export const deleteProfileSchemaDoc = {
  tags: ['Profile'],
  description: 'Schema para validação do ID do perfil para deleção.',
  headers: {
    type: 'object',
    properties: {
      id_Perfil: {
        type: 'number',
        description: 'ID do perfil do usuário'
      }
    },
    required: ['id_Perfil']
  },
};

export const getAllProfilesSchemaDoc = {
  tags: ['Profile'],
  description: 'Schema para obter todos os perfis.',
};

export const getProfilesByAccountIdSchemaDoc = {
  tags: ['Profile'],
  description: 'Schema para obter perfis por ID de conta.',
};