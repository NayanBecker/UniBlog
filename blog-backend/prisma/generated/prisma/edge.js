
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.T_AccountScalarFieldEnum = {
  id_Account: 'id_Account',
  nome_Account: 'nome_Account',
  email_Account: 'email_Account',
  matricula_Account: 'matricula_Account',
  password_Account: 'password_Account',
  createdAt_Account: 'createdAt_Account',
  updatedAt_Account: 'updatedAt_Account'
};

exports.Prisma.T_PerfilScalarFieldEnum = {
  id_Perfil: 'id_Perfil',
  nome_Perfil: 'nome_Perfil',
  email_Perfil: 'email_Perfil',
  foto_Perfil: 'foto_Perfil',
  descricao_Perfil: 'descricao_Perfil',
  tipo_Perfil: 'tipo_Perfil',
  semestre_Perfil: 'semestre_Perfil',
  createdAt_Perfil: 'createdAt_Perfil',
  updatedAt_Perfil: 'updatedAt_Perfil',
  id_Curso_Perfil: 'id_Curso_Perfil',
  id_Account_Perfil: 'id_Account_Perfil'
};

exports.Prisma.T_CursoScalarFieldEnum = {
  id_Curso: 'id_Curso',
  nome_Curso: 'nome_Curso',
  maxSemestres_Curso: 'maxSemestres_Curso'
};

exports.Prisma.T_PostScalarFieldEnum = {
  id_Post: 'id_Post',
  title_Post: 'title_Post',
  content_Post: 'content_Post',
  image_Post: 'image_Post',
  TAG_Post: 'TAG_Post',
  createdAt_Post: 'createdAt_Post',
  updatedAt_Post: 'updatedAt_Post',
  id_Perfil_Post: 'id_Perfil_Post'
};

exports.Prisma.T_PostInteracaoCapaScalarFieldEnum = {
  id_PIC: 'id_PIC',
  id_Post_PIC: 'id_Post_PIC',
  visualizacao_PIC: 'visualizacao_PIC'
};

exports.Prisma.T_PIC_CurtidasScalarFieldEnum = {
  id_Curtida: 'id_Curtida',
  id_Perfil_Curtida: 'id_Perfil_Curtida',
  id_PIC_Curtida: 'id_PIC_Curtida'
};

exports.Prisma.T_PIC_ComentariosScalarFieldEnum = {
  id_Comentario: 'id_Comentario',
  id_Perfil_Comentario: 'id_Perfil_Comentario',
  conteudo_Comentario: 'conteudo_Comentario',
  id_PIC_Comentario: 'id_PIC_Comentario'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PerfilTipo = exports.$Enums.PerfilTipo = {
  PESSOAL: 'PESSOAL',
  COMUNIDADE: 'COMUNIDADE'
};

exports.Prisma.ModelName = {
  T_Account: 'T_Account',
  T_Perfil: 'T_Perfil',
  T_Curso: 'T_Curso',
  T_Post: 'T_Post',
  T_PostInteracaoCapa: 'T_PostInteracaoCapa',
  T_PIC_Curtidas: 'T_PIC_Curtidas',
  T_PIC_Comentarios: 'T_PIC_Comentarios'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "M:\\UniBlog\\UniBlog\\blog-backend\\prisma\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "M:\\UniBlog\\UniBlog\\blog-backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../prisma/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel T_Account {\n  id_Account        Int      @id @default(autoincrement())\n  nome_Account      String\n  email_Account     String   @unique\n  matricula_Account String   @unique\n  password_Account  String\n  createdAt_Account DateTime @default(now())\n  updatedAt_Account DateTime @updatedAt\n\n  id_Perfil_Account T_Perfil[]\n}\n\nmodel T_Perfil {\n  id_Perfil        Int        @id @default(autoincrement())\n  nome_Perfil      String\n  email_Perfil     String     @unique\n  foto_Perfil      String?\n  descricao_Perfil String?\n  tipo_Perfil      PerfilTipo @default(PESSOAL)\n  semestre_Perfil  Int?\n  createdAt_Perfil DateTime   @default(now())\n  updatedAt_Perfil DateTime   @updatedAt\n  id_Curso_Perfil  Int?\n\n  curso             T_Curso?  @relation(fields: [id_Curso_Perfil], references: [id_Curso])\n  account           T_Account @relation(fields: [id_Account_Perfil], references: [id_Account])\n  id_Account_Perfil Int\n\n  id_Post_Perfil           T_Post[]\n  PostInteracaoCurtidas    T_PIC_Curtidas[]\n  PostInteracaoComentarios T_PIC_Comentarios[]\n}\n\nenum PerfilTipo {\n  PESSOAL\n  COMUNIDADE\n}\n\nmodel T_Curso {\n  id_Curso           Int    @id @default(autoincrement())\n  nome_Curso         String @unique\n  maxSemestres_Curso Int\n\n  perfis T_Perfil[]\n}\n\nmodel T_Post {\n  id_Post        Int      @id @default(autoincrement())\n  title_Post     String?\n  content_Post   String?\n  image_Post     String?\n  TAG_Post       String?\n  createdAt_Post DateTime @default(now())\n  updatedAt_Post DateTime @updatedAt\n  id_Perfil_Post Int\n\n  T_Perfil            T_Perfil              @relation(fields: [id_Perfil_Post], references: [id_Perfil])\n  T_PostInteracaoCapa T_PostInteracaoCapa[]\n}\n\nmodel T_PostInteracaoCapa {\n  id_PIC           Int   @id @default(autoincrement())\n  id_Post_PIC      Int\n  visualizacao_PIC Int[] @default([0])\n\n  curtidas_PIC    T_PIC_Curtidas[]\n  comentarios_PIC T_PIC_Comentarios[]\n\n  T_Post T_Post @relation(fields: [id_Post_PIC], references: [id_Post])\n}\n\nmodel T_PIC_Curtidas {\n  id_Curtida        Int  @id @default(autoincrement())\n  id_Perfil_Curtida Int\n  id_PIC_Curtida    Int?\n\n  T_PostInteracaoCapa T_PostInteracaoCapa? @relation(fields: [id_PIC_Curtida], references: [id_PIC])\n  T_Perfil            T_Perfil             @relation(fields: [id_Perfil_Curtida], references: [id_Perfil])\n}\n\nmodel T_PIC_Comentarios {\n  id_Comentario        Int    @id @default(autoincrement())\n  id_Perfil_Comentario Int\n  conteudo_Comentario  String\n  id_PIC_Comentario    Int?\n\n  T_PostInteracaoCapa T_PostInteracaoCapa? @relation(fields: [id_PIC_Comentario], references: [id_PIC])\n  T_Perfil            T_Perfil             @relation(fields: [id_Perfil_Comentario], references: [id_Perfil])\n}\n",
  "inlineSchemaHash": "032872cc186426433c74c8861874252f4d99098383c8781bc1b43747fb9597fd",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"T_Account\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matricula_Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt_Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt_Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"id_Perfil_Account\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Perfil\",\"nativeType\":null,\"relationName\":\"T_AccountToT_Perfil\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_Perfil\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_Perfil\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PerfilTipo\",\"nativeType\":null,\"default\":\"PESSOAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semestre_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"id_Curso_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"curso\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Curso\",\"nativeType\":null,\"relationName\":\"T_CursoToT_Perfil\",\"relationFromFields\":[\"id_Curso_Perfil\"],\"relationToFields\":[\"id_Curso\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Account\",\"nativeType\":null,\"relationName\":\"T_AccountToT_Perfil\",\"relationFromFields\":[\"id_Account_Perfil\"],\"relationToFields\":[\"id_Account\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Account_Perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Post_Perfil\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Post\",\"nativeType\":null,\"relationName\":\"T_PerfilToT_Post\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostInteracaoCurtidas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_PIC_Curtidas\",\"nativeType\":null,\"relationName\":\"T_PIC_CurtidasToT_Perfil\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostInteracaoComentarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_PIC_Comentarios\",\"nativeType\":null,\"relationName\":\"T_PIC_ComentariosToT_Perfil\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_Curso\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Curso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_Curso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxSemestres_Curso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"perfis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Perfil\",\"nativeType\":null,\"relationName\":\"T_CursoToT_Perfil\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_Post\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TAG_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"id_Perfil_Post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_Perfil\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Perfil\",\"nativeType\":null,\"relationName\":\"T_PerfilToT_Post\",\"relationFromFields\":[\"id_Perfil_Post\"],\"relationToFields\":[\"id_Perfil\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_PostInteracaoCapa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_PostInteracaoCapa\",\"nativeType\":null,\"relationName\":\"T_PostToT_PostInteracaoCapa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_PostInteracaoCapa\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PIC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Post_PIC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visualizacao_PIC\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":[0],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"curtidas_PIC\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_PIC_Curtidas\",\"nativeType\":null,\"relationName\":\"T_PIC_CurtidasToT_PostInteracaoCapa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comentarios_PIC\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_PIC_Comentarios\",\"nativeType\":null,\"relationName\":\"T_PIC_ComentariosToT_PostInteracaoCapa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_Post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Post\",\"nativeType\":null,\"relationName\":\"T_PostToT_PostInteracaoCapa\",\"relationFromFields\":[\"id_Post_PIC\"],\"relationToFields\":[\"id_Post\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_PIC_Curtidas\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Curtida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Perfil_Curtida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_PIC_Curtida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_PostInteracaoCapa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_PostInteracaoCapa\",\"nativeType\":null,\"relationName\":\"T_PIC_CurtidasToT_PostInteracaoCapa\",\"relationFromFields\":[\"id_PIC_Curtida\"],\"relationToFields\":[\"id_PIC\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_Perfil\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Perfil\",\"nativeType\":null,\"relationName\":\"T_PIC_CurtidasToT_Perfil\",\"relationFromFields\":[\"id_Perfil_Curtida\"],\"relationToFields\":[\"id_Perfil\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_PIC_Comentarios\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Comentario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Perfil_Comentario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo_Comentario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_PIC_Comentario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_PostInteracaoCapa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_PostInteracaoCapa\",\"nativeType\":null,\"relationName\":\"T_PIC_ComentariosToT_PostInteracaoCapa\",\"relationFromFields\":[\"id_PIC_Comentario\"],\"relationToFields\":[\"id_PIC\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_Perfil\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"T_Perfil\",\"nativeType\":null,\"relationName\":\"T_PIC_ComentariosToT_Perfil\",\"relationFromFields\":[\"id_Perfil_Comentario\"],\"relationToFields\":[\"id_Perfil\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"PerfilTipo\":{\"values\":[{\"name\":\"PESSOAL\",\"dbName\":null},{\"name\":\"COMUNIDADE\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

