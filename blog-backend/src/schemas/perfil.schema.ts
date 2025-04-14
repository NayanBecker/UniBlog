import { optional } from "zod";

export const createPerfilSchema = {
  body: {
    type: 'object',
    required: ['nome_Perfil', 'email_Perfil', 'matricula_Perfil', 'foto_Perfil', 'descricao_Perfil', 'matriculaAccount_Perfil'],
    properties: {
      nome_Perfil: { type: 'string', maxLength: 100 },
      matricula_Perfil: { type: 'string', maxLength: 20 },
      email_Perfil: { type: 'string', format: 'email', maxLength: 100 },
      foto_Perfil: { type: 'string', maxLength: 100, optional: true },
      descricao_Perfil: { type: 'string', maxLength: 255, optional: true },
    },
    additionalProperties: false,
  },
};

export const updatePerfilSchema = {
  body: {
    type: 'object',
    required: ['nome_Perfil, email_Perfil, matricula_Perfil, foto_Perfil, descricao_Perfil, matriculaAccount_Perfil'],
    properties: {
      nome_Perfil: { type: 'string', maxlenght: 100, optional: true },
      matricula_Perfil: { type: 'string', maxlenght: 20, optional }, 
      email_Perfil: { type: 'string', format: 'email', maxLength: 100, optional: true },
      foto_Perfil: { type:'string', maxlenght: 100, optional: true },
      descricao_Perfil: { type: 'string', maxlenght: 255, optional: true },
    },
    additionalProperties: false,
  },
};

export const readPerfilSchema ={
  body: {
    type: 'object',
    required: ['nome_Perfil', 'email_Perfil', 'matricula_Perfil', 'foto_Perfil', 'descricao_Perfil', 'matriculaAccount_Perfil'],
    properties: {
      nome_Perfil: { type: 'string', maxLength: 100 },
      matricula_Perfil: { type: 'string', maxLength: 20 },
      email_Perfil: { type: 'string', format: 'email', maxLength: 100 },
      foto_Perfil: { type: 'string', maxLength: 100 },
      descricao_Perfil: { type: 'string', maxLength: 255 },
    },
    additionalProperties: false,
  },
};

export const deletePerfilSchema = {
  body: {
    type: 'object',
    required: ['matricula_Perfil, email_Perfil'],
    properties: {
      matricula_Perfil: { type: 'string', maxLength: 20 },
      email_Perfil: { type: 'string', format: 'email', maxLength: 100 },
        },
    additionalProperties: false,
  },
};