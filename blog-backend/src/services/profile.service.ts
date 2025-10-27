// import { uploadToMinio } from '../utils/uploadToMinio';
import { PrismaClient } from '../generated/prisma';

const db = new PrismaClient();
interface CreateProfileDataInterface {
  nome_Perfil: string;
  email_Perfil: string;
  descricao_Perfil?: string;
  foto_Perfil?: string;
  tipo_Perfil: 'PESSOAL' | 'COMUNIDADE';
  id_Curso_Perfil?: number;
  semestre_Perfil?: number;
}
interface UpdateProfileDataInterface {
  id_Perfil: number;
  nome_Perfil?: string;
  email_Perfil?: string;
  descricao_Perfil?: string;
  foto_Perfil?: string;
  id_Curso_Perfil?: number;
  semestre_Perfil?: number;
}

interface IdProfileDataInterface {
  id_Perfil: number;
}



export async function createProfileService(data: CreateProfileDataInterface, accountId: number) {
  if (data.tipo_Perfil === 'PESSOAL') {
    if (!data.id_Curso_Perfil) {
      throw new Error('curso Id é obrigatório para perfil pessoal.');
    }
    if (!data.semestre_Perfil) {
      throw new Error('semestre é obrigatório para perfil pessoal.');
    }

    const curso = await db.t_Curso.findUnique({
      where: { id_Curso: data.id_Curso_Perfil }
    });
    if (!curso) {
      throw new Error('Curso não encontrado.');
    }
    if (data.semestre_Perfil < 1 || data.semestre_Perfil > curso.maxSemestres_Curso) {
      throw new Error(`O semestre deve ser entre 1 e ${curso.maxSemestres_Curso}.`);
    }
  }

  const createdProfile = await db.t_Perfil.create({
    data: {
      nome_Perfil: data.nome_Perfil,
      email_Perfil: data.email_Perfil,
      descricao_Perfil: data.descricao_Perfil,
      foto_Perfil: data.foto_Perfil,
      id_Account_Perfil: accountId,
      tipo_Perfil: data.tipo_Perfil,
      id_Curso_Perfil: data.tipo_Perfil === 'PESSOAL' ? data.id_Curso_Perfil : undefined,
      semestre_Perfil: data.tipo_Perfil === 'PESSOAL' ? data.semestre_Perfil : undefined,
      createdAt_Perfil: new Date(),
    },
  });
  return createdProfile;
}

export async function updateProfileService(
  data: UpdateProfileDataInterface,
) {
  const getProfile = await db.t_Perfil.findFirst({
    where: { id_Perfil: data.id_Perfil },
  });

  if (!getProfile) {
    throw new Error('Perfil não encontrado.');
  }

  const updatedProfile = await db.t_Perfil.update({
    where: { id_Perfil: data.id_Perfil },
    data: {
      nome_Perfil: data.nome_Perfil,
      email_Perfil: data.email_Perfil,
      descricao_Perfil: data.descricao_Perfil,
      foto_Perfil: data.foto_Perfil,
      id_Curso_Perfil: data.id_Curso_Perfil,
      semestre_Perfil: data.semestre_Perfil,
      updatedAt_Perfil: new Date(),
    },
  });

  if (!updatedProfile) {
    throw new Error('Erro ao atualizar o perfil.');
  }

  return updatedProfile;
}

export async function deleteProfileService({ id_Perfil }: IdProfileDataInterface) {
  const deletedProfile = await db.t_Perfil.delete({
    where: { id_Perfil: id_Perfil },
  });

  return deletedProfile;
}

export async function getProfileService(data: IdProfileDataInterface) {
  const getProfile = await db.t_Perfil.findFirst({
    where: { id_Perfil: data.id_Perfil },
    select: {
      id_Perfil: true,
      nome_Perfil: true,
      email_Perfil: true,
      descricao_Perfil: true,
      foto_Perfil: true,
      tipo_Perfil: true,
      semestre_Perfil: true,
      curso: {
        select: {
          id_Curso: true,
          nome_Curso: true,


        },
      },
    },
  });

  if (!getProfile) {
    throw new Error('Perfil não encontrado.');
  }

  return getProfile;
}
export async function getAllProfilesService() {
  const profiles = await db.t_Perfil.findMany({
    where: {},
    select: {
      id_Perfil: true,
      nome_Perfil: true,
      foto_Perfil: true
    },
  });

  if (!profiles) {
    throw new Error('Nenhum perfil encontrado.');
  }

  return profiles;
}
export async function getProfilesByAccountIdService(accountId: number) {
  const profiles = await db.t_Perfil.findMany({
    where: { id_Account_Perfil: accountId },
    select: {
      id_Perfil: true,
      nome_Perfil: true,
      foto_Perfil: true,
      tipo_Perfil: true,
    },
  });

  if (!profiles || profiles.length === 0) {
    throw new Error('Perfil não encontrado para esta conta.');
  }

  return profiles;
}