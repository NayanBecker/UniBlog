import { FastifyRequest, FastifyReply } from 'fastify';
import { createProfileService, updateProfileService, deleteProfileService, getProfileService, getAllProfilesService, getProfilesByAccountIdService } from '../services/profileService';
import { createProfileSchema, idProfileSchema, updateProfileSchema } from './schemas/profile.schema';
import { uploadToMinio } from '../utils/uploadToMinio';
import { parseMultipart } from '../utils/parseMultipart';


interface AuthenticatedRequest extends FastifyRequest {
  user: {
    id_Account: number;
  };
}

export async function createProfileController(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    const { fields, fileBuffer, fileName } = await parseMultipart(request);
    const data = createProfileSchema.parse({
      ...fields,
    });

    if (fileBuffer && fileName) {
      const imageUrl = await uploadToMinio(fileBuffer, fileName);
      data.foto_Perfil = imageUrl;
    }

    const id_Account_Perfil = request.user.id_Account;
    const profile = await createProfileService(data, id_Account_Perfil);


    return reply.status(201).send(profile);
  } catch (error) {
    console.error('Erro ao criar perfil:', error);
    return reply.status(400).send({
      error: 'Erro ao criar perfil',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function updateProfileController(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    const { fields, fileBuffer, fileName } = await parseMultipart(request);

    const id_Perfil = Number(fields.id_Perfil);
    if (!id_Perfil) {
      return reply.status(404).send({
        error: 'Perfil não encontrado',
        message: 'Não foi encontrado um perfil para este usuário' + id_Perfil
      });
    }

    const data = updateProfileSchema.parse({
      ...fields,
      id_Perfil

    });

    if (fileBuffer && fileName) {
      const imageUrl = await uploadToMinio(fileBuffer, fileName);
      data.foto_Perfil = imageUrl;
    }

    const profile = await updateProfileService(data);

    return reply.status(200).send(profile);
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    return reply.status(400).send({
      error: 'Erro ao atualizar perfil',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function getProfileController(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_perfil'] });
    console.log(id_Perfil);
    const profile = await getProfileService({ id_Perfil });

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro ao buscar perfil',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function deleteProfileController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = idProfileSchema.parse(request.headers);

    const profile = await deleteProfileService(data);

    return reply.status(200).send(profile);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }
}

export async function getAllProfilesController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const profiles = await getAllProfilesService();

    return reply.status(200).send(profiles);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro ao buscar perfis',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function getProfilesByAccountIdController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const accountId = request.user.id_Account;
    const profiles = await getProfilesByAccountIdService(accountId);

    return reply.status(200).send(profiles);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro ao buscar perfis',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
    });
  }
}