
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
