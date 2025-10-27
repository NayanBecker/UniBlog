import { z } from 'zod';


export const createProfileSchema = z.object({
  nome_Perfil: z.string().max(100, 'O nome pode ter no máximo 100 caracteres'),
  email_Perfil: z.string().email('Email inválido').max(100, 'O email pode ter no máximo 100 caracteres'),
  foto_Perfil: z.string().optional(),
  descricao_Perfil: z.string().max(255, 'A descrição pode ter no máximo 255 caracteres').optional(),
  tipo_Perfil: z.enum(['PESSOAL', 'COMUNIDADE']),
  semestre_Perfil: z.preprocess(val => Number(val), z.number().int().min(1).max(20).optional()),
  id_Curso_Perfil: z.preprocess(val => Number(val), z.number().int().positive().optional()),
}).refine(
  (data) => {
    if (data.tipo_Perfil === 'PESSOAL') {
      return data.semestre_Perfil !== undefined && data.id_Curso_Perfil !== undefined;
    }
    return true;
  },
  {
    message: 'Perfis do tipo pessoal devem informar semestre e curso',
    path: ['semestre'],
  }
);

export const updateProfileSchema = z.object({
  id_Perfil: z.number().int('O ID deve ser um número inteiro').positive('O ID deve ser um número positivo'),
  nome_Perfil: z.string().max(100, 'O nome pode ter no máximo 100 caracteres').optional(),
  email_Perfil: z.string().email('Email inválido').max(100, 'O email pode ter no máximo 100 caracteres').optional(),
  foto_Perfil: z.string().optional(),
  descricao_Perfil: z.string().max(255, 'A descrição pode ter no máximo 255 caracteres').optional(),
  semestre_Perfil: z.coerce.number().int().min(1).max(20).optional(),
  id_Curso_Perfil: z.coerce.number().int().positive().optional(),
});

export const idProfileSchema = z.object({
  id_Perfil: z.preprocess(val => Number(val), z.number().int('O ID deve ser um número inteiro').positive('O ID deve ser um número positivo')),
});
