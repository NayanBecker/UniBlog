import { z } from "zod";

export const createProfileSchema = z.object({
  nome_Perfil: z.string().max(100, 'O nome pode ter no máximo 100 caracteres'),
  email_Perfil: z.string().email('Email inválido').max(100, 'O email pode ter no máximo 100 caracteres'),
  matricula_Perfil: z.string().max(20, 'A matrícula pode ter no máximo 20 caracteres'),
  foto_Perfil: z.string().optional(),
  descricao_Perfil: z.string().max(255, 'A descrição pode ter no máximo 255 caracteres').optional(),
});

export const updateProfileSchema = z.object({
  nome_Perfil: z.string().max(100, 'O nome pode ter no máximo 100 caracteres').optional(),
  email_Perfil: z.string().email('Email inválido').max(100, 'O email pode ter no máximo 100 caracteres').optional(),
  foto_Perfil: z.string().optional(),
  descricao_Perfil: z.string().max(255, 'A descrição pode ter no máximo 255 caracteres').optional(),
  matricula_Perfil: z.string().max(20, 'A matrícula pode ter no máximo 20 caracteres').optional(),
  matriculaAccount_Perfil: z.string().optional(),
});

export const deleteProfileSchema = z.object({
  id_Perfil: z.number().int('O ID deve ser um número inteiro').positive('O ID deve ser um número positivo'),
});

export const readProfileSchema = z.object({
  nome_Perfil: z.string().max(100, 'O nome pode ter no máximo 100 caracteres').optional(),
  email_Perfil: z.string().email('Email inválido').max(100, 'O email pode ter no máximo 100 caracteres').optional(),
  matricula_Perfil: z.string().max(20, 'A matrícula pode ter no máximo 20 caracteres').optional(),
  foto_Perfil: z.string().optional(),
  descricao_Perfil: z.string().max(255, 'A descrição pode ter no máximo 255 caracteres').optional(),
  matriculaAccount_Perfil: z.string().optional(),
});