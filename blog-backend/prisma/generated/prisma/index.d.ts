
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model T_Account
 * 
 */
export type T_Account = $Result.DefaultSelection<Prisma.$T_AccountPayload>
/**
 * Model T_Perfil
 * 
 */
export type T_Perfil = $Result.DefaultSelection<Prisma.$T_PerfilPayload>
/**
 * Model T_Curso
 * 
 */
export type T_Curso = $Result.DefaultSelection<Prisma.$T_CursoPayload>
/**
 * Model T_Post
 * 
 */
export type T_Post = $Result.DefaultSelection<Prisma.$T_PostPayload>
/**
 * Model T_PostInteracaoCapa
 * 
 */
export type T_PostInteracaoCapa = $Result.DefaultSelection<Prisma.$T_PostInteracaoCapaPayload>
/**
 * Model T_PIC_Curtidas
 * 
 */
export type T_PIC_Curtidas = $Result.DefaultSelection<Prisma.$T_PIC_CurtidasPayload>
/**
 * Model T_PIC_Comentarios
 * 
 */
export type T_PIC_Comentarios = $Result.DefaultSelection<Prisma.$T_PIC_ComentariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PerfilTipo: {
  PESSOAL: 'PESSOAL',
  COMUNIDADE: 'COMUNIDADE'
};

export type PerfilTipo = (typeof PerfilTipo)[keyof typeof PerfilTipo]

}

export type PerfilTipo = $Enums.PerfilTipo

export const PerfilTipo: typeof $Enums.PerfilTipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more T_Accounts
 * const t_Accounts = await prisma.t_Account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more T_Accounts
   * const t_Accounts = await prisma.t_Account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.t_Account`: Exposes CRUD operations for the **T_Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Accounts
    * const t_Accounts = await prisma.t_Account.findMany()
    * ```
    */
  get t_Account(): Prisma.T_AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_Perfil`: Exposes CRUD operations for the **T_Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Perfils
    * const t_Perfils = await prisma.t_Perfil.findMany()
    * ```
    */
  get t_Perfil(): Prisma.T_PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_Curso`: Exposes CRUD operations for the **T_Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Cursos
    * const t_Cursos = await prisma.t_Curso.findMany()
    * ```
    */
  get t_Curso(): Prisma.T_CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_Post`: Exposes CRUD operations for the **T_Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Posts
    * const t_Posts = await prisma.t_Post.findMany()
    * ```
    */
  get t_Post(): Prisma.T_PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_PostInteracaoCapa`: Exposes CRUD operations for the **T_PostInteracaoCapa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_PostInteracaoCapas
    * const t_PostInteracaoCapas = await prisma.t_PostInteracaoCapa.findMany()
    * ```
    */
  get t_PostInteracaoCapa(): Prisma.T_PostInteracaoCapaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_PIC_Curtidas`: Exposes CRUD operations for the **T_PIC_Curtidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_PIC_Curtidas
    * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.findMany()
    * ```
    */
  get t_PIC_Curtidas(): Prisma.T_PIC_CurtidasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_PIC_Comentarios`: Exposes CRUD operations for the **T_PIC_Comentarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_PIC_Comentarios
    * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.findMany()
    * ```
    */
  get t_PIC_Comentarios(): Prisma.T_PIC_ComentariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    T_Account: 'T_Account',
    T_Perfil: 'T_Perfil',
    T_Curso: 'T_Curso',
    T_Post: 'T_Post',
    T_PostInteracaoCapa: 'T_PostInteracaoCapa',
    T_PIC_Curtidas: 'T_PIC_Curtidas',
    T_PIC_Comentarios: 'T_PIC_Comentarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "t_Account" | "t_Perfil" | "t_Curso" | "t_Post" | "t_PostInteracaoCapa" | "t_PIC_Curtidas" | "t_PIC_Comentarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      T_Account: {
        payload: Prisma.$T_AccountPayload<ExtArgs>
        fields: Prisma.T_AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          findFirst: {
            args: Prisma.T_AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          findMany: {
            args: Prisma.T_AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          create: {
            args: Prisma.T_AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          createMany: {
            args: Prisma.T_AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          delete: {
            args: Prisma.T_AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          update: {
            args: Prisma.T_AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          deleteMany: {
            args: Prisma.T_AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          upsert: {
            args: Prisma.T_AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          aggregate: {
            args: Prisma.T_AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Account>
          }
          groupBy: {
            args: Prisma.T_AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_AccountCountArgs<ExtArgs>
            result: $Utils.Optional<T_AccountCountAggregateOutputType> | number
          }
        }
      }
      T_Perfil: {
        payload: Prisma.$T_PerfilPayload<ExtArgs>
        fields: Prisma.T_PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          findFirst: {
            args: Prisma.T_PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          findMany: {
            args: Prisma.T_PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>[]
          }
          create: {
            args: Prisma.T_PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          createMany: {
            args: Prisma.T_PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_PerfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>[]
          }
          delete: {
            args: Prisma.T_PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          update: {
            args: Prisma.T_PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          deleteMany: {
            args: Prisma.T_PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_PerfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>[]
          }
          upsert: {
            args: Prisma.T_PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          aggregate: {
            args: Prisma.T_PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Perfil>
          }
          groupBy: {
            args: Prisma.T_PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<T_PerfilCountAggregateOutputType> | number
          }
        }
      }
      T_Curso: {
        payload: Prisma.$T_CursoPayload<ExtArgs>
        fields: Prisma.T_CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>
          }
          findFirst: {
            args: Prisma.T_CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>
          }
          findMany: {
            args: Prisma.T_CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>[]
          }
          create: {
            args: Prisma.T_CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>
          }
          createMany: {
            args: Prisma.T_CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>[]
          }
          delete: {
            args: Prisma.T_CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>
          }
          update: {
            args: Prisma.T_CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>
          }
          deleteMany: {
            args: Prisma.T_CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>[]
          }
          upsert: {
            args: Prisma.T_CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_CursoPayload>
          }
          aggregate: {
            args: Prisma.T_CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Curso>
          }
          groupBy: {
            args: Prisma.T_CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_CursoCountArgs<ExtArgs>
            result: $Utils.Optional<T_CursoCountAggregateOutputType> | number
          }
        }
      }
      T_Post: {
        payload: Prisma.$T_PostPayload<ExtArgs>
        fields: Prisma.T_PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          findFirst: {
            args: Prisma.T_PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          findMany: {
            args: Prisma.T_PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>[]
          }
          create: {
            args: Prisma.T_PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          createMany: {
            args: Prisma.T_PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>[]
          }
          delete: {
            args: Prisma.T_PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          update: {
            args: Prisma.T_PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          deleteMany: {
            args: Prisma.T_PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>[]
          }
          upsert: {
            args: Prisma.T_PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          aggregate: {
            args: Prisma.T_PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Post>
          }
          groupBy: {
            args: Prisma.T_PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_PostCountArgs<ExtArgs>
            result: $Utils.Optional<T_PostCountAggregateOutputType> | number
          }
        }
      }
      T_PostInteracaoCapa: {
        payload: Prisma.$T_PostInteracaoCapaPayload<ExtArgs>
        fields: Prisma.T_PostInteracaoCapaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_PostInteracaoCapaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_PostInteracaoCapaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>
          }
          findFirst: {
            args: Prisma.T_PostInteracaoCapaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_PostInteracaoCapaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>
          }
          findMany: {
            args: Prisma.T_PostInteracaoCapaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>[]
          }
          create: {
            args: Prisma.T_PostInteracaoCapaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>
          }
          createMany: {
            args: Prisma.T_PostInteracaoCapaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_PostInteracaoCapaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>[]
          }
          delete: {
            args: Prisma.T_PostInteracaoCapaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>
          }
          update: {
            args: Prisma.T_PostInteracaoCapaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>
          }
          deleteMany: {
            args: Prisma.T_PostInteracaoCapaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_PostInteracaoCapaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_PostInteracaoCapaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>[]
          }
          upsert: {
            args: Prisma.T_PostInteracaoCapaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostInteracaoCapaPayload>
          }
          aggregate: {
            args: Prisma.T_PostInteracaoCapaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_PostInteracaoCapa>
          }
          groupBy: {
            args: Prisma.T_PostInteracaoCapaGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_PostInteracaoCapaGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_PostInteracaoCapaCountArgs<ExtArgs>
            result: $Utils.Optional<T_PostInteracaoCapaCountAggregateOutputType> | number
          }
        }
      }
      T_PIC_Curtidas: {
        payload: Prisma.$T_PIC_CurtidasPayload<ExtArgs>
        fields: Prisma.T_PIC_CurtidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_PIC_CurtidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_PIC_CurtidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>
          }
          findFirst: {
            args: Prisma.T_PIC_CurtidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_PIC_CurtidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>
          }
          findMany: {
            args: Prisma.T_PIC_CurtidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>[]
          }
          create: {
            args: Prisma.T_PIC_CurtidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>
          }
          createMany: {
            args: Prisma.T_PIC_CurtidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_PIC_CurtidasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>[]
          }
          delete: {
            args: Prisma.T_PIC_CurtidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>
          }
          update: {
            args: Prisma.T_PIC_CurtidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>
          }
          deleteMany: {
            args: Prisma.T_PIC_CurtidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_PIC_CurtidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_PIC_CurtidasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>[]
          }
          upsert: {
            args: Prisma.T_PIC_CurtidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_CurtidasPayload>
          }
          aggregate: {
            args: Prisma.T_PIC_CurtidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_PIC_Curtidas>
          }
          groupBy: {
            args: Prisma.T_PIC_CurtidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_PIC_CurtidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_PIC_CurtidasCountArgs<ExtArgs>
            result: $Utils.Optional<T_PIC_CurtidasCountAggregateOutputType> | number
          }
        }
      }
      T_PIC_Comentarios: {
        payload: Prisma.$T_PIC_ComentariosPayload<ExtArgs>
        fields: Prisma.T_PIC_ComentariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_PIC_ComentariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_PIC_ComentariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>
          }
          findFirst: {
            args: Prisma.T_PIC_ComentariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_PIC_ComentariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>
          }
          findMany: {
            args: Prisma.T_PIC_ComentariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>[]
          }
          create: {
            args: Prisma.T_PIC_ComentariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>
          }
          createMany: {
            args: Prisma.T_PIC_ComentariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_PIC_ComentariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>[]
          }
          delete: {
            args: Prisma.T_PIC_ComentariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>
          }
          update: {
            args: Prisma.T_PIC_ComentariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>
          }
          deleteMany: {
            args: Prisma.T_PIC_ComentariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_PIC_ComentariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_PIC_ComentariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>[]
          }
          upsert: {
            args: Prisma.T_PIC_ComentariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PIC_ComentariosPayload>
          }
          aggregate: {
            args: Prisma.T_PIC_ComentariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_PIC_Comentarios>
          }
          groupBy: {
            args: Prisma.T_PIC_ComentariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_PIC_ComentariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_PIC_ComentariosCountArgs<ExtArgs>
            result: $Utils.Optional<T_PIC_ComentariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    t_Account?: T_AccountOmit
    t_Perfil?: T_PerfilOmit
    t_Curso?: T_CursoOmit
    t_Post?: T_PostOmit
    t_PostInteracaoCapa?: T_PostInteracaoCapaOmit
    t_PIC_Curtidas?: T_PIC_CurtidasOmit
    t_PIC_Comentarios?: T_PIC_ComentariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type T_AccountCountOutputType
   */

  export type T_AccountCountOutputType = {
    id_Perfil_Account: number
  }

  export type T_AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_Perfil_Account?: boolean | T_AccountCountOutputTypeCountId_Perfil_AccountArgs
  }

  // Custom InputTypes
  /**
   * T_AccountCountOutputType without action
   */
  export type T_AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_AccountCountOutputType
     */
    select?: T_AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_AccountCountOutputType without action
   */
  export type T_AccountCountOutputTypeCountId_Perfil_AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PerfilWhereInput
  }


  /**
   * Count Type T_PerfilCountOutputType
   */

  export type T_PerfilCountOutputType = {
    id_Post_Perfil: number
    PostInteracaoCurtidas: number
    PostInteracaoComentarios: number
  }

  export type T_PerfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_Post_Perfil?: boolean | T_PerfilCountOutputTypeCountId_Post_PerfilArgs
    PostInteracaoCurtidas?: boolean | T_PerfilCountOutputTypeCountPostInteracaoCurtidasArgs
    PostInteracaoComentarios?: boolean | T_PerfilCountOutputTypeCountPostInteracaoComentariosArgs
  }

  // Custom InputTypes
  /**
   * T_PerfilCountOutputType without action
   */
  export type T_PerfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PerfilCountOutputType
     */
    select?: T_PerfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_PerfilCountOutputType without action
   */
  export type T_PerfilCountOutputTypeCountId_Post_PerfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PostWhereInput
  }

  /**
   * T_PerfilCountOutputType without action
   */
  export type T_PerfilCountOutputTypeCountPostInteracaoCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PIC_CurtidasWhereInput
  }

  /**
   * T_PerfilCountOutputType without action
   */
  export type T_PerfilCountOutputTypeCountPostInteracaoComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PIC_ComentariosWhereInput
  }


  /**
   * Count Type T_CursoCountOutputType
   */

  export type T_CursoCountOutputType = {
    perfis: number
  }

  export type T_CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfis?: boolean | T_CursoCountOutputTypeCountPerfisArgs
  }

  // Custom InputTypes
  /**
   * T_CursoCountOutputType without action
   */
  export type T_CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_CursoCountOutputType
     */
    select?: T_CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_CursoCountOutputType without action
   */
  export type T_CursoCountOutputTypeCountPerfisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PerfilWhereInput
  }


  /**
   * Count Type T_PostCountOutputType
   */

  export type T_PostCountOutputType = {
    T_PostInteracaoCapa: number
  }

  export type T_PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_PostInteracaoCapa?: boolean | T_PostCountOutputTypeCountT_PostInteracaoCapaArgs
  }

  // Custom InputTypes
  /**
   * T_PostCountOutputType without action
   */
  export type T_PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostCountOutputType
     */
    select?: T_PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_PostCountOutputType without action
   */
  export type T_PostCountOutputTypeCountT_PostInteracaoCapaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PostInteracaoCapaWhereInput
  }


  /**
   * Count Type T_PostInteracaoCapaCountOutputType
   */

  export type T_PostInteracaoCapaCountOutputType = {
    curtidas_PIC: number
    comentarios_PIC: number
  }

  export type T_PostInteracaoCapaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curtidas_PIC?: boolean | T_PostInteracaoCapaCountOutputTypeCountCurtidas_PICArgs
    comentarios_PIC?: boolean | T_PostInteracaoCapaCountOutputTypeCountComentarios_PICArgs
  }

  // Custom InputTypes
  /**
   * T_PostInteracaoCapaCountOutputType without action
   */
  export type T_PostInteracaoCapaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapaCountOutputType
     */
    select?: T_PostInteracaoCapaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_PostInteracaoCapaCountOutputType without action
   */
  export type T_PostInteracaoCapaCountOutputTypeCountCurtidas_PICArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PIC_CurtidasWhereInput
  }

  /**
   * T_PostInteracaoCapaCountOutputType without action
   */
  export type T_PostInteracaoCapaCountOutputTypeCountComentarios_PICArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PIC_ComentariosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model T_Account
   */

  export type AggregateT_Account = {
    _count: T_AccountCountAggregateOutputType | null
    _avg: T_AccountAvgAggregateOutputType | null
    _sum: T_AccountSumAggregateOutputType | null
    _min: T_AccountMinAggregateOutputType | null
    _max: T_AccountMaxAggregateOutputType | null
  }

  export type T_AccountAvgAggregateOutputType = {
    id_Account: number | null
  }

  export type T_AccountSumAggregateOutputType = {
    id_Account: number | null
  }

  export type T_AccountMinAggregateOutputType = {
    id_Account: number | null
    nome_Account: string | null
    email_Account: string | null
    matricula_Account: string | null
    password_Account: string | null
    createdAt_Account: Date | null
    updatedAt_Account: Date | null
  }

  export type T_AccountMaxAggregateOutputType = {
    id_Account: number | null
    nome_Account: string | null
    email_Account: string | null
    matricula_Account: string | null
    password_Account: string | null
    createdAt_Account: Date | null
    updatedAt_Account: Date | null
  }

  export type T_AccountCountAggregateOutputType = {
    id_Account: number
    nome_Account: number
    email_Account: number
    matricula_Account: number
    password_Account: number
    createdAt_Account: number
    updatedAt_Account: number
    _all: number
  }


  export type T_AccountAvgAggregateInputType = {
    id_Account?: true
  }

  export type T_AccountSumAggregateInputType = {
    id_Account?: true
  }

  export type T_AccountMinAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    matricula_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
  }

  export type T_AccountMaxAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    matricula_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
  }

  export type T_AccountCountAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    matricula_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
    _all?: true
  }

  export type T_AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Account to aggregate.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Accounts
    **/
    _count?: true | T_AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_AccountMaxAggregateInputType
  }

  export type GetT_AccountAggregateType<T extends T_AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Account[P]>
      : GetScalarType<T[P], AggregateT_Account[P]>
  }




  export type T_AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_AccountWhereInput
    orderBy?: T_AccountOrderByWithAggregationInput | T_AccountOrderByWithAggregationInput[]
    by: T_AccountScalarFieldEnum[] | T_AccountScalarFieldEnum
    having?: T_AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_AccountCountAggregateInputType | true
    _avg?: T_AccountAvgAggregateInputType
    _sum?: T_AccountSumAggregateInputType
    _min?: T_AccountMinAggregateInputType
    _max?: T_AccountMaxAggregateInputType
  }

  export type T_AccountGroupByOutputType = {
    id_Account: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account: Date
    updatedAt_Account: Date
    _count: T_AccountCountAggregateOutputType | null
    _avg: T_AccountAvgAggregateOutputType | null
    _sum: T_AccountSumAggregateOutputType | null
    _min: T_AccountMinAggregateOutputType | null
    _max: T_AccountMaxAggregateOutputType | null
  }

  type GetT_AccountGroupByPayload<T extends T_AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_AccountGroupByOutputType[P]>
            : GetScalarType<T[P], T_AccountGroupByOutputType[P]>
        }
      >
    >


  export type T_AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
    id_Perfil_Account?: boolean | T_Account$id_Perfil_AccountArgs<ExtArgs>
    _count?: boolean | T_AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectScalar = {
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }

  export type T_AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Account" | "nome_Account" | "email_Account" | "matricula_Account" | "password_Account" | "createdAt_Account" | "updatedAt_Account", ExtArgs["result"]["t_Account"]>
  export type T_AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_Perfil_Account?: boolean | T_Account$id_Perfil_AccountArgs<ExtArgs>
    _count?: boolean | T_AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type T_AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type T_AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $T_AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Account"
    objects: {
      id_Perfil_Account: Prisma.$T_PerfilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Account: number
      nome_Account: string
      email_Account: string
      matricula_Account: string
      password_Account: string
      createdAt_Account: Date
      updatedAt_Account: Date
    }, ExtArgs["result"]["t_Account"]>
    composites: {}
  }

  type T_AccountGetPayload<S extends boolean | null | undefined | T_AccountDefaultArgs> = $Result.GetResult<Prisma.$T_AccountPayload, S>

  type T_AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_AccountCountAggregateInputType | true
    }

  export interface T_AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Account'], meta: { name: 'T_Account' } }
    /**
     * Find zero or one T_Account that matches the filter.
     * @param {T_AccountFindUniqueArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_AccountFindUniqueArgs>(args: SelectSubset<T, T_AccountFindUniqueArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_AccountFindUniqueOrThrowArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, T_AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindFirstArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_AccountFindFirstArgs>(args?: SelectSubset<T, T_AccountFindFirstArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindFirstOrThrowArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, T_AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Accounts
     * const t_Accounts = await prisma.t_Account.findMany()
     * 
     * // Get first 10 T_Accounts
     * const t_Accounts = await prisma.t_Account.findMany({ take: 10 })
     * 
     * // Only select the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.findMany({ select: { id_Account: true } })
     * 
     */
    findMany<T extends T_AccountFindManyArgs>(args?: SelectSubset<T, T_AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Account.
     * @param {T_AccountCreateArgs} args - Arguments to create a T_Account.
     * @example
     * // Create one T_Account
     * const T_Account = await prisma.t_Account.create({
     *   data: {
     *     // ... data to create a T_Account
     *   }
     * })
     * 
     */
    create<T extends T_AccountCreateArgs>(args: SelectSubset<T, T_AccountCreateArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Accounts.
     * @param {T_AccountCreateManyArgs} args - Arguments to create many T_Accounts.
     * @example
     * // Create many T_Accounts
     * const t_Account = await prisma.t_Account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_AccountCreateManyArgs>(args?: SelectSubset<T, T_AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Accounts and returns the data saved in the database.
     * @param {T_AccountCreateManyAndReturnArgs} args - Arguments to create many T_Accounts.
     * @example
     * // Create many T_Accounts
     * const t_Account = await prisma.t_Account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Accounts and only return the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.createManyAndReturn({
     *   select: { id_Account: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, T_AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Account.
     * @param {T_AccountDeleteArgs} args - Arguments to delete one T_Account.
     * @example
     * // Delete one T_Account
     * const T_Account = await prisma.t_Account.delete({
     *   where: {
     *     // ... filter to delete one T_Account
     *   }
     * })
     * 
     */
    delete<T extends T_AccountDeleteArgs>(args: SelectSubset<T, T_AccountDeleteArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Account.
     * @param {T_AccountUpdateArgs} args - Arguments to update one T_Account.
     * @example
     * // Update one T_Account
     * const t_Account = await prisma.t_Account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_AccountUpdateArgs>(args: SelectSubset<T, T_AccountUpdateArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Accounts.
     * @param {T_AccountDeleteManyArgs} args - Arguments to filter T_Accounts to delete.
     * @example
     * // Delete a few T_Accounts
     * const { count } = await prisma.t_Account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_AccountDeleteManyArgs>(args?: SelectSubset<T, T_AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Accounts
     * const t_Account = await prisma.t_Account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_AccountUpdateManyArgs>(args: SelectSubset<T, T_AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Accounts and returns the data updated in the database.
     * @param {T_AccountUpdateManyAndReturnArgs} args - Arguments to update many T_Accounts.
     * @example
     * // Update many T_Accounts
     * const t_Account = await prisma.t_Account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Accounts and only return the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.updateManyAndReturn({
     *   select: { id_Account: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, T_AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Account.
     * @param {T_AccountUpsertArgs} args - Arguments to update or create a T_Account.
     * @example
     * // Update or create a T_Account
     * const t_Account = await prisma.t_Account.upsert({
     *   create: {
     *     // ... data to create a T_Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Account we want to update
     *   }
     * })
     */
    upsert<T extends T_AccountUpsertArgs>(args: SelectSubset<T, T_AccountUpsertArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountCountArgs} args - Arguments to filter T_Accounts to count.
     * @example
     * // Count the number of T_Accounts
     * const count = await prisma.t_Account.count({
     *   where: {
     *     // ... the filter for the T_Accounts we want to count
     *   }
     * })
    **/
    count<T extends T_AccountCountArgs>(
      args?: Subset<T, T_AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_AccountAggregateArgs>(args: Subset<T, T_AccountAggregateArgs>): Prisma.PrismaPromise<GetT_AccountAggregateType<T>>

    /**
     * Group by T_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_AccountGroupByArgs['orderBy'] }
        : { orderBy?: T_AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_AccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Account model
   */
  readonly fields: T_AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_Perfil_Account<T extends T_Account$id_Perfil_AccountArgs<ExtArgs> = {}>(args?: Subset<T, T_Account$id_Perfil_AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_Account model
   */
  interface T_AccountFieldRefs {
    readonly id_Account: FieldRef<"T_Account", 'Int'>
    readonly nome_Account: FieldRef<"T_Account", 'String'>
    readonly email_Account: FieldRef<"T_Account", 'String'>
    readonly matricula_Account: FieldRef<"T_Account", 'String'>
    readonly password_Account: FieldRef<"T_Account", 'String'>
    readonly createdAt_Account: FieldRef<"T_Account", 'DateTime'>
    readonly updatedAt_Account: FieldRef<"T_Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * T_Account findUnique
   */
  export type T_AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account findUniqueOrThrow
   */
  export type T_AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account findFirst
   */
  export type T_AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Accounts.
     */
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account findFirstOrThrow
   */
  export type T_AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Accounts.
     */
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account findMany
   */
  export type T_AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Accounts to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account create
   */
  export type T_AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a T_Account.
     */
    data: XOR<T_AccountCreateInput, T_AccountUncheckedCreateInput>
  }

  /**
   * T_Account createMany
   */
  export type T_AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Accounts.
     */
    data: T_AccountCreateManyInput | T_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Account createManyAndReturn
   */
  export type T_AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data used to create many T_Accounts.
     */
    data: T_AccountCreateManyInput | T_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Account update
   */
  export type T_AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a T_Account.
     */
    data: XOR<T_AccountUpdateInput, T_AccountUncheckedUpdateInput>
    /**
     * Choose, which T_Account to update.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account updateMany
   */
  export type T_AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Accounts.
     */
    data: XOR<T_AccountUpdateManyMutationInput, T_AccountUncheckedUpdateManyInput>
    /**
     * Filter which T_Accounts to update
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to update.
     */
    limit?: number
  }

  /**
   * T_Account updateManyAndReturn
   */
  export type T_AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data used to update T_Accounts.
     */
    data: XOR<T_AccountUpdateManyMutationInput, T_AccountUncheckedUpdateManyInput>
    /**
     * Filter which T_Accounts to update
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to update.
     */
    limit?: number
  }

  /**
   * T_Account upsert
   */
  export type T_AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the T_Account to update in case it exists.
     */
    where: T_AccountWhereUniqueInput
    /**
     * In case the T_Account found by the `where` argument doesn't exist, create a new T_Account with this data.
     */
    create: XOR<T_AccountCreateInput, T_AccountUncheckedCreateInput>
    /**
     * In case the T_Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_AccountUpdateInput, T_AccountUncheckedUpdateInput>
  }

  /**
   * T_Account delete
   */
  export type T_AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter which T_Account to delete.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account deleteMany
   */
  export type T_AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Accounts to delete
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to delete.
     */
    limit?: number
  }

  /**
   * T_Account.id_Perfil_Account
   */
  export type T_Account$id_Perfil_AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    where?: T_PerfilWhereInput
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    cursor?: T_PerfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Account without action
   */
  export type T_AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
  }


  /**
   * Model T_Perfil
   */

  export type AggregateT_Perfil = {
    _count: T_PerfilCountAggregateOutputType | null
    _avg: T_PerfilAvgAggregateOutputType | null
    _sum: T_PerfilSumAggregateOutputType | null
    _min: T_PerfilMinAggregateOutputType | null
    _max: T_PerfilMaxAggregateOutputType | null
  }

  export type T_PerfilAvgAggregateOutputType = {
    id_Perfil: number | null
    semestre_Perfil: number | null
    id_Curso_Perfil: number | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilSumAggregateOutputType = {
    id_Perfil: number | null
    semestre_Perfil: number | null
    id_Curso_Perfil: number | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilMinAggregateOutputType = {
    id_Perfil: number | null
    nome_Perfil: string | null
    email_Perfil: string | null
    foto_Perfil: string | null
    descricao_Perfil: string | null
    tipo_Perfil: $Enums.PerfilTipo | null
    semestre_Perfil: number | null
    createdAt_Perfil: Date | null
    updatedAt_Perfil: Date | null
    id_Curso_Perfil: number | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilMaxAggregateOutputType = {
    id_Perfil: number | null
    nome_Perfil: string | null
    email_Perfil: string | null
    foto_Perfil: string | null
    descricao_Perfil: string | null
    tipo_Perfil: $Enums.PerfilTipo | null
    semestre_Perfil: number | null
    createdAt_Perfil: Date | null
    updatedAt_Perfil: Date | null
    id_Curso_Perfil: number | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilCountAggregateOutputType = {
    id_Perfil: number
    nome_Perfil: number
    email_Perfil: number
    foto_Perfil: number
    descricao_Perfil: number
    tipo_Perfil: number
    semestre_Perfil: number
    createdAt_Perfil: number
    updatedAt_Perfil: number
    id_Curso_Perfil: number
    id_Account_Perfil: number
    _all: number
  }


  export type T_PerfilAvgAggregateInputType = {
    id_Perfil?: true
    semestre_Perfil?: true
    id_Curso_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilSumAggregateInputType = {
    id_Perfil?: true
    semestre_Perfil?: true
    id_Curso_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilMinAggregateInputType = {
    id_Perfil?: true
    nome_Perfil?: true
    email_Perfil?: true
    foto_Perfil?: true
    descricao_Perfil?: true
    tipo_Perfil?: true
    semestre_Perfil?: true
    createdAt_Perfil?: true
    updatedAt_Perfil?: true
    id_Curso_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilMaxAggregateInputType = {
    id_Perfil?: true
    nome_Perfil?: true
    email_Perfil?: true
    foto_Perfil?: true
    descricao_Perfil?: true
    tipo_Perfil?: true
    semestre_Perfil?: true
    createdAt_Perfil?: true
    updatedAt_Perfil?: true
    id_Curso_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilCountAggregateInputType = {
    id_Perfil?: true
    nome_Perfil?: true
    email_Perfil?: true
    foto_Perfil?: true
    descricao_Perfil?: true
    tipo_Perfil?: true
    semestre_Perfil?: true
    createdAt_Perfil?: true
    updatedAt_Perfil?: true
    id_Curso_Perfil?: true
    id_Account_Perfil?: true
    _all?: true
  }

  export type T_PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Perfil to aggregate.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Perfils
    **/
    _count?: true | T_PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_PerfilMaxAggregateInputType
  }

  export type GetT_PerfilAggregateType<T extends T_PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Perfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Perfil[P]>
      : GetScalarType<T[P], AggregateT_Perfil[P]>
  }




  export type T_PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PerfilWhereInput
    orderBy?: T_PerfilOrderByWithAggregationInput | T_PerfilOrderByWithAggregationInput[]
    by: T_PerfilScalarFieldEnum[] | T_PerfilScalarFieldEnum
    having?: T_PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_PerfilCountAggregateInputType | true
    _avg?: T_PerfilAvgAggregateInputType
    _sum?: T_PerfilSumAggregateInputType
    _min?: T_PerfilMinAggregateInputType
    _max?: T_PerfilMaxAggregateInputType
  }

  export type T_PerfilGroupByOutputType = {
    id_Perfil: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil: string | null
    descricao_Perfil: string | null
    tipo_Perfil: $Enums.PerfilTipo
    semestre_Perfil: number | null
    createdAt_Perfil: Date
    updatedAt_Perfil: Date
    id_Curso_Perfil: number | null
    id_Account_Perfil: number
    _count: T_PerfilCountAggregateOutputType | null
    _avg: T_PerfilAvgAggregateOutputType | null
    _sum: T_PerfilSumAggregateOutputType | null
    _min: T_PerfilMinAggregateOutputType | null
    _max: T_PerfilMaxAggregateOutputType | null
  }

  type GetT_PerfilGroupByPayload<T extends T_PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], T_PerfilGroupByOutputType[P]>
        }
      >
    >


  export type T_PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    tipo_Perfil?: boolean
    semestre_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Curso_Perfil?: boolean
    id_Account_Perfil?: boolean
    curso?: boolean | T_Perfil$cursoArgs<ExtArgs>
    account?: boolean | T_AccountDefaultArgs<ExtArgs>
    id_Post_Perfil?: boolean | T_Perfil$id_Post_PerfilArgs<ExtArgs>
    PostInteracaoCurtidas?: boolean | T_Perfil$PostInteracaoCurtidasArgs<ExtArgs>
    PostInteracaoComentarios?: boolean | T_Perfil$PostInteracaoComentariosArgs<ExtArgs>
    _count?: boolean | T_PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Perfil"]>

  export type T_PerfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    tipo_Perfil?: boolean
    semestre_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Curso_Perfil?: boolean
    id_Account_Perfil?: boolean
    curso?: boolean | T_Perfil$cursoArgs<ExtArgs>
    account?: boolean | T_AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Perfil"]>

  export type T_PerfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    tipo_Perfil?: boolean
    semestre_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Curso_Perfil?: boolean
    id_Account_Perfil?: boolean
    curso?: boolean | T_Perfil$cursoArgs<ExtArgs>
    account?: boolean | T_AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Perfil"]>

  export type T_PerfilSelectScalar = {
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    tipo_Perfil?: boolean
    semestre_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Curso_Perfil?: boolean
    id_Account_Perfil?: boolean
  }

  export type T_PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Perfil" | "nome_Perfil" | "email_Perfil" | "foto_Perfil" | "descricao_Perfil" | "tipo_Perfil" | "semestre_Perfil" | "createdAt_Perfil" | "updatedAt_Perfil" | "id_Curso_Perfil" | "id_Account_Perfil", ExtArgs["result"]["t_Perfil"]>
  export type T_PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | T_Perfil$cursoArgs<ExtArgs>
    account?: boolean | T_AccountDefaultArgs<ExtArgs>
    id_Post_Perfil?: boolean | T_Perfil$id_Post_PerfilArgs<ExtArgs>
    PostInteracaoCurtidas?: boolean | T_Perfil$PostInteracaoCurtidasArgs<ExtArgs>
    PostInteracaoComentarios?: boolean | T_Perfil$PostInteracaoComentariosArgs<ExtArgs>
    _count?: boolean | T_PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type T_PerfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | T_Perfil$cursoArgs<ExtArgs>
    account?: boolean | T_AccountDefaultArgs<ExtArgs>
  }
  export type T_PerfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | T_Perfil$cursoArgs<ExtArgs>
    account?: boolean | T_AccountDefaultArgs<ExtArgs>
  }

  export type $T_PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Perfil"
    objects: {
      curso: Prisma.$T_CursoPayload<ExtArgs> | null
      account: Prisma.$T_AccountPayload<ExtArgs>
      id_Post_Perfil: Prisma.$T_PostPayload<ExtArgs>[]
      PostInteracaoCurtidas: Prisma.$T_PIC_CurtidasPayload<ExtArgs>[]
      PostInteracaoComentarios: Prisma.$T_PIC_ComentariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Perfil: number
      nome_Perfil: string
      email_Perfil: string
      foto_Perfil: string | null
      descricao_Perfil: string | null
      tipo_Perfil: $Enums.PerfilTipo
      semestre_Perfil: number | null
      createdAt_Perfil: Date
      updatedAt_Perfil: Date
      id_Curso_Perfil: number | null
      id_Account_Perfil: number
    }, ExtArgs["result"]["t_Perfil"]>
    composites: {}
  }

  type T_PerfilGetPayload<S extends boolean | null | undefined | T_PerfilDefaultArgs> = $Result.GetResult<Prisma.$T_PerfilPayload, S>

  type T_PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_PerfilCountAggregateInputType | true
    }

  export interface T_PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Perfil'], meta: { name: 'T_Perfil' } }
    /**
     * Find zero or one T_Perfil that matches the filter.
     * @param {T_PerfilFindUniqueArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_PerfilFindUniqueArgs>(args: SelectSubset<T, T_PerfilFindUniqueArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_PerfilFindUniqueOrThrowArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, T_PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilFindFirstArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_PerfilFindFirstArgs>(args?: SelectSubset<T, T_PerfilFindFirstArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilFindFirstOrThrowArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, T_PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Perfils
     * const t_Perfils = await prisma.t_Perfil.findMany()
     * 
     * // Get first 10 T_Perfils
     * const t_Perfils = await prisma.t_Perfil.findMany({ take: 10 })
     * 
     * // Only select the `id_Perfil`
     * const t_PerfilWithId_PerfilOnly = await prisma.t_Perfil.findMany({ select: { id_Perfil: true } })
     * 
     */
    findMany<T extends T_PerfilFindManyArgs>(args?: SelectSubset<T, T_PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Perfil.
     * @param {T_PerfilCreateArgs} args - Arguments to create a T_Perfil.
     * @example
     * // Create one T_Perfil
     * const T_Perfil = await prisma.t_Perfil.create({
     *   data: {
     *     // ... data to create a T_Perfil
     *   }
     * })
     * 
     */
    create<T extends T_PerfilCreateArgs>(args: SelectSubset<T, T_PerfilCreateArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Perfils.
     * @param {T_PerfilCreateManyArgs} args - Arguments to create many T_Perfils.
     * @example
     * // Create many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_PerfilCreateManyArgs>(args?: SelectSubset<T, T_PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Perfils and returns the data saved in the database.
     * @param {T_PerfilCreateManyAndReturnArgs} args - Arguments to create many T_Perfils.
     * @example
     * // Create many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Perfils and only return the `id_Perfil`
     * const t_PerfilWithId_PerfilOnly = await prisma.t_Perfil.createManyAndReturn({
     *   select: { id_Perfil: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_PerfilCreateManyAndReturnArgs>(args?: SelectSubset<T, T_PerfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Perfil.
     * @param {T_PerfilDeleteArgs} args - Arguments to delete one T_Perfil.
     * @example
     * // Delete one T_Perfil
     * const T_Perfil = await prisma.t_Perfil.delete({
     *   where: {
     *     // ... filter to delete one T_Perfil
     *   }
     * })
     * 
     */
    delete<T extends T_PerfilDeleteArgs>(args: SelectSubset<T, T_PerfilDeleteArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Perfil.
     * @param {T_PerfilUpdateArgs} args - Arguments to update one T_Perfil.
     * @example
     * // Update one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_PerfilUpdateArgs>(args: SelectSubset<T, T_PerfilUpdateArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Perfils.
     * @param {T_PerfilDeleteManyArgs} args - Arguments to filter T_Perfils to delete.
     * @example
     * // Delete a few T_Perfils
     * const { count } = await prisma.t_Perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_PerfilDeleteManyArgs>(args?: SelectSubset<T, T_PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_PerfilUpdateManyArgs>(args: SelectSubset<T, T_PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Perfils and returns the data updated in the database.
     * @param {T_PerfilUpdateManyAndReturnArgs} args - Arguments to update many T_Perfils.
     * @example
     * // Update many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Perfils and only return the `id_Perfil`
     * const t_PerfilWithId_PerfilOnly = await prisma.t_Perfil.updateManyAndReturn({
     *   select: { id_Perfil: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_PerfilUpdateManyAndReturnArgs>(args: SelectSubset<T, T_PerfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Perfil.
     * @param {T_PerfilUpsertArgs} args - Arguments to update or create a T_Perfil.
     * @example
     * // Update or create a T_Perfil
     * const t_Perfil = await prisma.t_Perfil.upsert({
     *   create: {
     *     // ... data to create a T_Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Perfil we want to update
     *   }
     * })
     */
    upsert<T extends T_PerfilUpsertArgs>(args: SelectSubset<T, T_PerfilUpsertArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilCountArgs} args - Arguments to filter T_Perfils to count.
     * @example
     * // Count the number of T_Perfils
     * const count = await prisma.t_Perfil.count({
     *   where: {
     *     // ... the filter for the T_Perfils we want to count
     *   }
     * })
    **/
    count<T extends T_PerfilCountArgs>(
      args?: Subset<T, T_PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_PerfilAggregateArgs>(args: Subset<T, T_PerfilAggregateArgs>): Prisma.PrismaPromise<GetT_PerfilAggregateType<T>>

    /**
     * Group by T_Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_PerfilGroupByArgs['orderBy'] }
        : { orderBy?: T_PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_PerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Perfil model
   */
  readonly fields: T_PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends T_Perfil$cursoArgs<ExtArgs> = {}>(args?: Subset<T, T_Perfil$cursoArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    account<T extends T_AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, T_AccountDefaultArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    id_Post_Perfil<T extends T_Perfil$id_Post_PerfilArgs<ExtArgs> = {}>(args?: Subset<T, T_Perfil$id_Post_PerfilArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostInteracaoCurtidas<T extends T_Perfil$PostInteracaoCurtidasArgs<ExtArgs> = {}>(args?: Subset<T, T_Perfil$PostInteracaoCurtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostInteracaoComentarios<T extends T_Perfil$PostInteracaoComentariosArgs<ExtArgs> = {}>(args?: Subset<T, T_Perfil$PostInteracaoComentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_Perfil model
   */
  interface T_PerfilFieldRefs {
    readonly id_Perfil: FieldRef<"T_Perfil", 'Int'>
    readonly nome_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly email_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly foto_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly descricao_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly tipo_Perfil: FieldRef<"T_Perfil", 'PerfilTipo'>
    readonly semestre_Perfil: FieldRef<"T_Perfil", 'Int'>
    readonly createdAt_Perfil: FieldRef<"T_Perfil", 'DateTime'>
    readonly updatedAt_Perfil: FieldRef<"T_Perfil", 'DateTime'>
    readonly id_Curso_Perfil: FieldRef<"T_Perfil", 'Int'>
    readonly id_Account_Perfil: FieldRef<"T_Perfil", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * T_Perfil findUnique
   */
  export type T_PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil findUniqueOrThrow
   */
  export type T_PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil findFirst
   */
  export type T_PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Perfils.
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Perfils.
     */
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Perfil findFirstOrThrow
   */
  export type T_PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Perfils.
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Perfils.
     */
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Perfil findMany
   */
  export type T_PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfils to fetch.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Perfils.
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Perfil create
   */
  export type T_PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a T_Perfil.
     */
    data: XOR<T_PerfilCreateInput, T_PerfilUncheckedCreateInput>
  }

  /**
   * T_Perfil createMany
   */
  export type T_PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Perfils.
     */
    data: T_PerfilCreateManyInput | T_PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Perfil createManyAndReturn
   */
  export type T_PerfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * The data used to create many T_Perfils.
     */
    data: T_PerfilCreateManyInput | T_PerfilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Perfil update
   */
  export type T_PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a T_Perfil.
     */
    data: XOR<T_PerfilUpdateInput, T_PerfilUncheckedUpdateInput>
    /**
     * Choose, which T_Perfil to update.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil updateMany
   */
  export type T_PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Perfils.
     */
    data: XOR<T_PerfilUpdateManyMutationInput, T_PerfilUncheckedUpdateManyInput>
    /**
     * Filter which T_Perfils to update
     */
    where?: T_PerfilWhereInput
    /**
     * Limit how many T_Perfils to update.
     */
    limit?: number
  }

  /**
   * T_Perfil updateManyAndReturn
   */
  export type T_PerfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * The data used to update T_Perfils.
     */
    data: XOR<T_PerfilUpdateManyMutationInput, T_PerfilUncheckedUpdateManyInput>
    /**
     * Filter which T_Perfils to update
     */
    where?: T_PerfilWhereInput
    /**
     * Limit how many T_Perfils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Perfil upsert
   */
  export type T_PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the T_Perfil to update in case it exists.
     */
    where: T_PerfilWhereUniqueInput
    /**
     * In case the T_Perfil found by the `where` argument doesn't exist, create a new T_Perfil with this data.
     */
    create: XOR<T_PerfilCreateInput, T_PerfilUncheckedCreateInput>
    /**
     * In case the T_Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_PerfilUpdateInput, T_PerfilUncheckedUpdateInput>
  }

  /**
   * T_Perfil delete
   */
  export type T_PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter which T_Perfil to delete.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil deleteMany
   */
  export type T_PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Perfils to delete
     */
    where?: T_PerfilWhereInput
    /**
     * Limit how many T_Perfils to delete.
     */
    limit?: number
  }

  /**
   * T_Perfil.curso
   */
  export type T_Perfil$cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    where?: T_CursoWhereInput
  }

  /**
   * T_Perfil.id_Post_Perfil
   */
  export type T_Perfil$id_Post_PerfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    where?: T_PostWhereInput
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    cursor?: T_PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Perfil.PostInteracaoCurtidas
   */
  export type T_Perfil$PostInteracaoCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    where?: T_PIC_CurtidasWhereInput
    orderBy?: T_PIC_CurtidasOrderByWithRelationInput | T_PIC_CurtidasOrderByWithRelationInput[]
    cursor?: T_PIC_CurtidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PIC_CurtidasScalarFieldEnum | T_PIC_CurtidasScalarFieldEnum[]
  }

  /**
   * T_Perfil.PostInteracaoComentarios
   */
  export type T_Perfil$PostInteracaoComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    where?: T_PIC_ComentariosWhereInput
    orderBy?: T_PIC_ComentariosOrderByWithRelationInput | T_PIC_ComentariosOrderByWithRelationInput[]
    cursor?: T_PIC_ComentariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PIC_ComentariosScalarFieldEnum | T_PIC_ComentariosScalarFieldEnum[]
  }

  /**
   * T_Perfil without action
   */
  export type T_PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
  }


  /**
   * Model T_Curso
   */

  export type AggregateT_Curso = {
    _count: T_CursoCountAggregateOutputType | null
    _avg: T_CursoAvgAggregateOutputType | null
    _sum: T_CursoSumAggregateOutputType | null
    _min: T_CursoMinAggregateOutputType | null
    _max: T_CursoMaxAggregateOutputType | null
  }

  export type T_CursoAvgAggregateOutputType = {
    id_Curso: number | null
    maxSemestres_Curso: number | null
  }

  export type T_CursoSumAggregateOutputType = {
    id_Curso: number | null
    maxSemestres_Curso: number | null
  }

  export type T_CursoMinAggregateOutputType = {
    id_Curso: number | null
    nome_Curso: string | null
    maxSemestres_Curso: number | null
  }

  export type T_CursoMaxAggregateOutputType = {
    id_Curso: number | null
    nome_Curso: string | null
    maxSemestres_Curso: number | null
  }

  export type T_CursoCountAggregateOutputType = {
    id_Curso: number
    nome_Curso: number
    maxSemestres_Curso: number
    _all: number
  }


  export type T_CursoAvgAggregateInputType = {
    id_Curso?: true
    maxSemestres_Curso?: true
  }

  export type T_CursoSumAggregateInputType = {
    id_Curso?: true
    maxSemestres_Curso?: true
  }

  export type T_CursoMinAggregateInputType = {
    id_Curso?: true
    nome_Curso?: true
    maxSemestres_Curso?: true
  }

  export type T_CursoMaxAggregateInputType = {
    id_Curso?: true
    nome_Curso?: true
    maxSemestres_Curso?: true
  }

  export type T_CursoCountAggregateInputType = {
    id_Curso?: true
    nome_Curso?: true
    maxSemestres_Curso?: true
    _all?: true
  }

  export type T_CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Curso to aggregate.
     */
    where?: T_CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Cursos to fetch.
     */
    orderBy?: T_CursoOrderByWithRelationInput | T_CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Cursos
    **/
    _count?: true | T_CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_CursoMaxAggregateInputType
  }

  export type GetT_CursoAggregateType<T extends T_CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Curso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Curso[P]>
      : GetScalarType<T[P], AggregateT_Curso[P]>
  }




  export type T_CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_CursoWhereInput
    orderBy?: T_CursoOrderByWithAggregationInput | T_CursoOrderByWithAggregationInput[]
    by: T_CursoScalarFieldEnum[] | T_CursoScalarFieldEnum
    having?: T_CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_CursoCountAggregateInputType | true
    _avg?: T_CursoAvgAggregateInputType
    _sum?: T_CursoSumAggregateInputType
    _min?: T_CursoMinAggregateInputType
    _max?: T_CursoMaxAggregateInputType
  }

  export type T_CursoGroupByOutputType = {
    id_Curso: number
    nome_Curso: string
    maxSemestres_Curso: number
    _count: T_CursoCountAggregateOutputType | null
    _avg: T_CursoAvgAggregateOutputType | null
    _sum: T_CursoSumAggregateOutputType | null
    _min: T_CursoMinAggregateOutputType | null
    _max: T_CursoMaxAggregateOutputType | null
  }

  type GetT_CursoGroupByPayload<T extends T_CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_CursoGroupByOutputType[P]>
            : GetScalarType<T[P], T_CursoGroupByOutputType[P]>
        }
      >
    >


  export type T_CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Curso?: boolean
    nome_Curso?: boolean
    maxSemestres_Curso?: boolean
    perfis?: boolean | T_Curso$perfisArgs<ExtArgs>
    _count?: boolean | T_CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Curso"]>

  export type T_CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Curso?: boolean
    nome_Curso?: boolean
    maxSemestres_Curso?: boolean
  }, ExtArgs["result"]["t_Curso"]>

  export type T_CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Curso?: boolean
    nome_Curso?: boolean
    maxSemestres_Curso?: boolean
  }, ExtArgs["result"]["t_Curso"]>

  export type T_CursoSelectScalar = {
    id_Curso?: boolean
    nome_Curso?: boolean
    maxSemestres_Curso?: boolean
  }

  export type T_CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Curso" | "nome_Curso" | "maxSemestres_Curso", ExtArgs["result"]["t_Curso"]>
  export type T_CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfis?: boolean | T_Curso$perfisArgs<ExtArgs>
    _count?: boolean | T_CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type T_CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type T_CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $T_CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Curso"
    objects: {
      perfis: Prisma.$T_PerfilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Curso: number
      nome_Curso: string
      maxSemestres_Curso: number
    }, ExtArgs["result"]["t_Curso"]>
    composites: {}
  }

  type T_CursoGetPayload<S extends boolean | null | undefined | T_CursoDefaultArgs> = $Result.GetResult<Prisma.$T_CursoPayload, S>

  type T_CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_CursoCountAggregateInputType | true
    }

  export interface T_CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Curso'], meta: { name: 'T_Curso' } }
    /**
     * Find zero or one T_Curso that matches the filter.
     * @param {T_CursoFindUniqueArgs} args - Arguments to find a T_Curso
     * @example
     * // Get one T_Curso
     * const t_Curso = await prisma.t_Curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_CursoFindUniqueArgs>(args: SelectSubset<T, T_CursoFindUniqueArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_CursoFindUniqueOrThrowArgs} args - Arguments to find a T_Curso
     * @example
     * // Get one T_Curso
     * const t_Curso = await prisma.t_Curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, T_CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_CursoFindFirstArgs} args - Arguments to find a T_Curso
     * @example
     * // Get one T_Curso
     * const t_Curso = await prisma.t_Curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_CursoFindFirstArgs>(args?: SelectSubset<T, T_CursoFindFirstArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_CursoFindFirstOrThrowArgs} args - Arguments to find a T_Curso
     * @example
     * // Get one T_Curso
     * const t_Curso = await prisma.t_Curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, T_CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Cursos
     * const t_Cursos = await prisma.t_Curso.findMany()
     * 
     * // Get first 10 T_Cursos
     * const t_Cursos = await prisma.t_Curso.findMany({ take: 10 })
     * 
     * // Only select the `id_Curso`
     * const t_CursoWithId_CursoOnly = await prisma.t_Curso.findMany({ select: { id_Curso: true } })
     * 
     */
    findMany<T extends T_CursoFindManyArgs>(args?: SelectSubset<T, T_CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Curso.
     * @param {T_CursoCreateArgs} args - Arguments to create a T_Curso.
     * @example
     * // Create one T_Curso
     * const T_Curso = await prisma.t_Curso.create({
     *   data: {
     *     // ... data to create a T_Curso
     *   }
     * })
     * 
     */
    create<T extends T_CursoCreateArgs>(args: SelectSubset<T, T_CursoCreateArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Cursos.
     * @param {T_CursoCreateManyArgs} args - Arguments to create many T_Cursos.
     * @example
     * // Create many T_Cursos
     * const t_Curso = await prisma.t_Curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_CursoCreateManyArgs>(args?: SelectSubset<T, T_CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Cursos and returns the data saved in the database.
     * @param {T_CursoCreateManyAndReturnArgs} args - Arguments to create many T_Cursos.
     * @example
     * // Create many T_Cursos
     * const t_Curso = await prisma.t_Curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Cursos and only return the `id_Curso`
     * const t_CursoWithId_CursoOnly = await prisma.t_Curso.createManyAndReturn({
     *   select: { id_Curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, T_CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Curso.
     * @param {T_CursoDeleteArgs} args - Arguments to delete one T_Curso.
     * @example
     * // Delete one T_Curso
     * const T_Curso = await prisma.t_Curso.delete({
     *   where: {
     *     // ... filter to delete one T_Curso
     *   }
     * })
     * 
     */
    delete<T extends T_CursoDeleteArgs>(args: SelectSubset<T, T_CursoDeleteArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Curso.
     * @param {T_CursoUpdateArgs} args - Arguments to update one T_Curso.
     * @example
     * // Update one T_Curso
     * const t_Curso = await prisma.t_Curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_CursoUpdateArgs>(args: SelectSubset<T, T_CursoUpdateArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Cursos.
     * @param {T_CursoDeleteManyArgs} args - Arguments to filter T_Cursos to delete.
     * @example
     * // Delete a few T_Cursos
     * const { count } = await prisma.t_Curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_CursoDeleteManyArgs>(args?: SelectSubset<T, T_CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Cursos
     * const t_Curso = await prisma.t_Curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_CursoUpdateManyArgs>(args: SelectSubset<T, T_CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Cursos and returns the data updated in the database.
     * @param {T_CursoUpdateManyAndReturnArgs} args - Arguments to update many T_Cursos.
     * @example
     * // Update many T_Cursos
     * const t_Curso = await prisma.t_Curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Cursos and only return the `id_Curso`
     * const t_CursoWithId_CursoOnly = await prisma.t_Curso.updateManyAndReturn({
     *   select: { id_Curso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, T_CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Curso.
     * @param {T_CursoUpsertArgs} args - Arguments to update or create a T_Curso.
     * @example
     * // Update or create a T_Curso
     * const t_Curso = await prisma.t_Curso.upsert({
     *   create: {
     *     // ... data to create a T_Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Curso we want to update
     *   }
     * })
     */
    upsert<T extends T_CursoUpsertArgs>(args: SelectSubset<T, T_CursoUpsertArgs<ExtArgs>>): Prisma__T_CursoClient<$Result.GetResult<Prisma.$T_CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_CursoCountArgs} args - Arguments to filter T_Cursos to count.
     * @example
     * // Count the number of T_Cursos
     * const count = await prisma.t_Curso.count({
     *   where: {
     *     // ... the filter for the T_Cursos we want to count
     *   }
     * })
    **/
    count<T extends T_CursoCountArgs>(
      args?: Subset<T, T_CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_CursoAggregateArgs>(args: Subset<T, T_CursoAggregateArgs>): Prisma.PrismaPromise<GetT_CursoAggregateType<T>>

    /**
     * Group by T_Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_CursoGroupByArgs['orderBy'] }
        : { orderBy?: T_CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_CursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Curso model
   */
  readonly fields: T_CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfis<T extends T_Curso$perfisArgs<ExtArgs> = {}>(args?: Subset<T, T_Curso$perfisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_Curso model
   */
  interface T_CursoFieldRefs {
    readonly id_Curso: FieldRef<"T_Curso", 'Int'>
    readonly nome_Curso: FieldRef<"T_Curso", 'String'>
    readonly maxSemestres_Curso: FieldRef<"T_Curso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * T_Curso findUnique
   */
  export type T_CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * Filter, which T_Curso to fetch.
     */
    where: T_CursoWhereUniqueInput
  }

  /**
   * T_Curso findUniqueOrThrow
   */
  export type T_CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * Filter, which T_Curso to fetch.
     */
    where: T_CursoWhereUniqueInput
  }

  /**
   * T_Curso findFirst
   */
  export type T_CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * Filter, which T_Curso to fetch.
     */
    where?: T_CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Cursos to fetch.
     */
    orderBy?: T_CursoOrderByWithRelationInput | T_CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Cursos.
     */
    cursor?: T_CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Cursos.
     */
    distinct?: T_CursoScalarFieldEnum | T_CursoScalarFieldEnum[]
  }

  /**
   * T_Curso findFirstOrThrow
   */
  export type T_CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * Filter, which T_Curso to fetch.
     */
    where?: T_CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Cursos to fetch.
     */
    orderBy?: T_CursoOrderByWithRelationInput | T_CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Cursos.
     */
    cursor?: T_CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Cursos.
     */
    distinct?: T_CursoScalarFieldEnum | T_CursoScalarFieldEnum[]
  }

  /**
   * T_Curso findMany
   */
  export type T_CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * Filter, which T_Cursos to fetch.
     */
    where?: T_CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Cursos to fetch.
     */
    orderBy?: T_CursoOrderByWithRelationInput | T_CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Cursos.
     */
    cursor?: T_CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Cursos.
     */
    skip?: number
    distinct?: T_CursoScalarFieldEnum | T_CursoScalarFieldEnum[]
  }

  /**
   * T_Curso create
   */
  export type T_CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a T_Curso.
     */
    data: XOR<T_CursoCreateInput, T_CursoUncheckedCreateInput>
  }

  /**
   * T_Curso createMany
   */
  export type T_CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Cursos.
     */
    data: T_CursoCreateManyInput | T_CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Curso createManyAndReturn
   */
  export type T_CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * The data used to create many T_Cursos.
     */
    data: T_CursoCreateManyInput | T_CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Curso update
   */
  export type T_CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a T_Curso.
     */
    data: XOR<T_CursoUpdateInput, T_CursoUncheckedUpdateInput>
    /**
     * Choose, which T_Curso to update.
     */
    where: T_CursoWhereUniqueInput
  }

  /**
   * T_Curso updateMany
   */
  export type T_CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Cursos.
     */
    data: XOR<T_CursoUpdateManyMutationInput, T_CursoUncheckedUpdateManyInput>
    /**
     * Filter which T_Cursos to update
     */
    where?: T_CursoWhereInput
    /**
     * Limit how many T_Cursos to update.
     */
    limit?: number
  }

  /**
   * T_Curso updateManyAndReturn
   */
  export type T_CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * The data used to update T_Cursos.
     */
    data: XOR<T_CursoUpdateManyMutationInput, T_CursoUncheckedUpdateManyInput>
    /**
     * Filter which T_Cursos to update
     */
    where?: T_CursoWhereInput
    /**
     * Limit how many T_Cursos to update.
     */
    limit?: number
  }

  /**
   * T_Curso upsert
   */
  export type T_CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the T_Curso to update in case it exists.
     */
    where: T_CursoWhereUniqueInput
    /**
     * In case the T_Curso found by the `where` argument doesn't exist, create a new T_Curso with this data.
     */
    create: XOR<T_CursoCreateInput, T_CursoUncheckedCreateInput>
    /**
     * In case the T_Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_CursoUpdateInput, T_CursoUncheckedUpdateInput>
  }

  /**
   * T_Curso delete
   */
  export type T_CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
    /**
     * Filter which T_Curso to delete.
     */
    where: T_CursoWhereUniqueInput
  }

  /**
   * T_Curso deleteMany
   */
  export type T_CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Cursos to delete
     */
    where?: T_CursoWhereInput
    /**
     * Limit how many T_Cursos to delete.
     */
    limit?: number
  }

  /**
   * T_Curso.perfis
   */
  export type T_Curso$perfisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    where?: T_PerfilWhereInput
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    cursor?: T_PerfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Curso without action
   */
  export type T_CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Curso
     */
    select?: T_CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Curso
     */
    omit?: T_CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_CursoInclude<ExtArgs> | null
  }


  /**
   * Model T_Post
   */

  export type AggregateT_Post = {
    _count: T_PostCountAggregateOutputType | null
    _avg: T_PostAvgAggregateOutputType | null
    _sum: T_PostSumAggregateOutputType | null
    _min: T_PostMinAggregateOutputType | null
    _max: T_PostMaxAggregateOutputType | null
  }

  export type T_PostAvgAggregateOutputType = {
    id_Post: number | null
    id_Perfil_Post: number | null
  }

  export type T_PostSumAggregateOutputType = {
    id_Post: number | null
    id_Perfil_Post: number | null
  }

  export type T_PostMinAggregateOutputType = {
    id_Post: number | null
    title_Post: string | null
    content_Post: string | null
    image_Post: string | null
    TAG_Post: string | null
    createdAt_Post: Date | null
    updatedAt_Post: Date | null
    id_Perfil_Post: number | null
  }

  export type T_PostMaxAggregateOutputType = {
    id_Post: number | null
    title_Post: string | null
    content_Post: string | null
    image_Post: string | null
    TAG_Post: string | null
    createdAt_Post: Date | null
    updatedAt_Post: Date | null
    id_Perfil_Post: number | null
  }

  export type T_PostCountAggregateOutputType = {
    id_Post: number
    title_Post: number
    content_Post: number
    image_Post: number
    TAG_Post: number
    createdAt_Post: number
    updatedAt_Post: number
    id_Perfil_Post: number
    _all: number
  }


  export type T_PostAvgAggregateInputType = {
    id_Post?: true
    id_Perfil_Post?: true
  }

  export type T_PostSumAggregateInputType = {
    id_Post?: true
    id_Perfil_Post?: true
  }

  export type T_PostMinAggregateInputType = {
    id_Post?: true
    title_Post?: true
    content_Post?: true
    image_Post?: true
    TAG_Post?: true
    createdAt_Post?: true
    updatedAt_Post?: true
    id_Perfil_Post?: true
  }

  export type T_PostMaxAggregateInputType = {
    id_Post?: true
    title_Post?: true
    content_Post?: true
    image_Post?: true
    TAG_Post?: true
    createdAt_Post?: true
    updatedAt_Post?: true
    id_Perfil_Post?: true
  }

  export type T_PostCountAggregateInputType = {
    id_Post?: true
    title_Post?: true
    content_Post?: true
    image_Post?: true
    TAG_Post?: true
    createdAt_Post?: true
    updatedAt_Post?: true
    id_Perfil_Post?: true
    _all?: true
  }

  export type T_PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Post to aggregate.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Posts
    **/
    _count?: true | T_PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_PostMaxAggregateInputType
  }

  export type GetT_PostAggregateType<T extends T_PostAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Post]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Post[P]>
      : GetScalarType<T[P], AggregateT_Post[P]>
  }




  export type T_PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PostWhereInput
    orderBy?: T_PostOrderByWithAggregationInput | T_PostOrderByWithAggregationInput[]
    by: T_PostScalarFieldEnum[] | T_PostScalarFieldEnum
    having?: T_PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_PostCountAggregateInputType | true
    _avg?: T_PostAvgAggregateInputType
    _sum?: T_PostSumAggregateInputType
    _min?: T_PostMinAggregateInputType
    _max?: T_PostMaxAggregateInputType
  }

  export type T_PostGroupByOutputType = {
    id_Post: number
    title_Post: string | null
    content_Post: string | null
    image_Post: string | null
    TAG_Post: string | null
    createdAt_Post: Date
    updatedAt_Post: Date
    id_Perfil_Post: number
    _count: T_PostCountAggregateOutputType | null
    _avg: T_PostAvgAggregateOutputType | null
    _sum: T_PostSumAggregateOutputType | null
    _min: T_PostMinAggregateOutputType | null
    _max: T_PostMaxAggregateOutputType | null
  }

  type GetT_PostGroupByPayload<T extends T_PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_PostGroupByOutputType[P]>
            : GetScalarType<T[P], T_PostGroupByOutputType[P]>
        }
      >
    >


  export type T_PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    TAG_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
    T_PostInteracaoCapa?: boolean | T_Post$T_PostInteracaoCapaArgs<ExtArgs>
    _count?: boolean | T_PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Post"]>

  export type T_PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    TAG_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Post"]>

  export type T_PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    TAG_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Post"]>

  export type T_PostSelectScalar = {
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    TAG_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
  }

  export type T_PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Post" | "title_Post" | "content_Post" | "image_Post" | "TAG_Post" | "createdAt_Post" | "updatedAt_Post" | "id_Perfil_Post", ExtArgs["result"]["t_Post"]>
  export type T_PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
    T_PostInteracaoCapa?: boolean | T_Post$T_PostInteracaoCapaArgs<ExtArgs>
    _count?: boolean | T_PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type T_PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }
  export type T_PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }

  export type $T_PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Post"
    objects: {
      T_Perfil: Prisma.$T_PerfilPayload<ExtArgs>
      T_PostInteracaoCapa: Prisma.$T_PostInteracaoCapaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Post: number
      title_Post: string | null
      content_Post: string | null
      image_Post: string | null
      TAG_Post: string | null
      createdAt_Post: Date
      updatedAt_Post: Date
      id_Perfil_Post: number
    }, ExtArgs["result"]["t_Post"]>
    composites: {}
  }

  type T_PostGetPayload<S extends boolean | null | undefined | T_PostDefaultArgs> = $Result.GetResult<Prisma.$T_PostPayload, S>

  type T_PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_PostCountAggregateInputType | true
    }

  export interface T_PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Post'], meta: { name: 'T_Post' } }
    /**
     * Find zero or one T_Post that matches the filter.
     * @param {T_PostFindUniqueArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_PostFindUniqueArgs>(args: SelectSubset<T, T_PostFindUniqueArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_PostFindUniqueOrThrowArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_PostFindUniqueOrThrowArgs>(args: SelectSubset<T, T_PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostFindFirstArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_PostFindFirstArgs>(args?: SelectSubset<T, T_PostFindFirstArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostFindFirstOrThrowArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_PostFindFirstOrThrowArgs>(args?: SelectSubset<T, T_PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Posts
     * const t_Posts = await prisma.t_Post.findMany()
     * 
     * // Get first 10 T_Posts
     * const t_Posts = await prisma.t_Post.findMany({ take: 10 })
     * 
     * // Only select the `id_Post`
     * const t_PostWithId_PostOnly = await prisma.t_Post.findMany({ select: { id_Post: true } })
     * 
     */
    findMany<T extends T_PostFindManyArgs>(args?: SelectSubset<T, T_PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Post.
     * @param {T_PostCreateArgs} args - Arguments to create a T_Post.
     * @example
     * // Create one T_Post
     * const T_Post = await prisma.t_Post.create({
     *   data: {
     *     // ... data to create a T_Post
     *   }
     * })
     * 
     */
    create<T extends T_PostCreateArgs>(args: SelectSubset<T, T_PostCreateArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Posts.
     * @param {T_PostCreateManyArgs} args - Arguments to create many T_Posts.
     * @example
     * // Create many T_Posts
     * const t_Post = await prisma.t_Post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_PostCreateManyArgs>(args?: SelectSubset<T, T_PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Posts and returns the data saved in the database.
     * @param {T_PostCreateManyAndReturnArgs} args - Arguments to create many T_Posts.
     * @example
     * // Create many T_Posts
     * const t_Post = await prisma.t_Post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Posts and only return the `id_Post`
     * const t_PostWithId_PostOnly = await prisma.t_Post.createManyAndReturn({
     *   select: { id_Post: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_PostCreateManyAndReturnArgs>(args?: SelectSubset<T, T_PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Post.
     * @param {T_PostDeleteArgs} args - Arguments to delete one T_Post.
     * @example
     * // Delete one T_Post
     * const T_Post = await prisma.t_Post.delete({
     *   where: {
     *     // ... filter to delete one T_Post
     *   }
     * })
     * 
     */
    delete<T extends T_PostDeleteArgs>(args: SelectSubset<T, T_PostDeleteArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Post.
     * @param {T_PostUpdateArgs} args - Arguments to update one T_Post.
     * @example
     * // Update one T_Post
     * const t_Post = await prisma.t_Post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_PostUpdateArgs>(args: SelectSubset<T, T_PostUpdateArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Posts.
     * @param {T_PostDeleteManyArgs} args - Arguments to filter T_Posts to delete.
     * @example
     * // Delete a few T_Posts
     * const { count } = await prisma.t_Post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_PostDeleteManyArgs>(args?: SelectSubset<T, T_PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Posts
     * const t_Post = await prisma.t_Post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_PostUpdateManyArgs>(args: SelectSubset<T, T_PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Posts and returns the data updated in the database.
     * @param {T_PostUpdateManyAndReturnArgs} args - Arguments to update many T_Posts.
     * @example
     * // Update many T_Posts
     * const t_Post = await prisma.t_Post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Posts and only return the `id_Post`
     * const t_PostWithId_PostOnly = await prisma.t_Post.updateManyAndReturn({
     *   select: { id_Post: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_PostUpdateManyAndReturnArgs>(args: SelectSubset<T, T_PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Post.
     * @param {T_PostUpsertArgs} args - Arguments to update or create a T_Post.
     * @example
     * // Update or create a T_Post
     * const t_Post = await prisma.t_Post.upsert({
     *   create: {
     *     // ... data to create a T_Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Post we want to update
     *   }
     * })
     */
    upsert<T extends T_PostUpsertArgs>(args: SelectSubset<T, T_PostUpsertArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostCountArgs} args - Arguments to filter T_Posts to count.
     * @example
     * // Count the number of T_Posts
     * const count = await prisma.t_Post.count({
     *   where: {
     *     // ... the filter for the T_Posts we want to count
     *   }
     * })
    **/
    count<T extends T_PostCountArgs>(
      args?: Subset<T, T_PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_PostAggregateArgs>(args: Subset<T, T_PostAggregateArgs>): Prisma.PrismaPromise<GetT_PostAggregateType<T>>

    /**
     * Group by T_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_PostGroupByArgs['orderBy'] }
        : { orderBy?: T_PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_PostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Post model
   */
  readonly fields: T_PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    T_Perfil<T extends T_PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, T_PerfilDefaultArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    T_PostInteracaoCapa<T extends T_Post$T_PostInteracaoCapaArgs<ExtArgs> = {}>(args?: Subset<T, T_Post$T_PostInteracaoCapaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_Post model
   */
  interface T_PostFieldRefs {
    readonly id_Post: FieldRef<"T_Post", 'Int'>
    readonly title_Post: FieldRef<"T_Post", 'String'>
    readonly content_Post: FieldRef<"T_Post", 'String'>
    readonly image_Post: FieldRef<"T_Post", 'String'>
    readonly TAG_Post: FieldRef<"T_Post", 'String'>
    readonly createdAt_Post: FieldRef<"T_Post", 'DateTime'>
    readonly updatedAt_Post: FieldRef<"T_Post", 'DateTime'>
    readonly id_Perfil_Post: FieldRef<"T_Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * T_Post findUnique
   */
  export type T_PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post findUniqueOrThrow
   */
  export type T_PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post findFirst
   */
  export type T_PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Posts.
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Posts.
     */
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Post findFirstOrThrow
   */
  export type T_PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Posts.
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Posts.
     */
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Post findMany
   */
  export type T_PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Posts to fetch.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Posts.
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Post create
   */
  export type T_PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * The data needed to create a T_Post.
     */
    data: XOR<T_PostCreateInput, T_PostUncheckedCreateInput>
  }

  /**
   * T_Post createMany
   */
  export type T_PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Posts.
     */
    data: T_PostCreateManyInput | T_PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Post createManyAndReturn
   */
  export type T_PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * The data used to create many T_Posts.
     */
    data: T_PostCreateManyInput | T_PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Post update
   */
  export type T_PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * The data needed to update a T_Post.
     */
    data: XOR<T_PostUpdateInput, T_PostUncheckedUpdateInput>
    /**
     * Choose, which T_Post to update.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post updateMany
   */
  export type T_PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Posts.
     */
    data: XOR<T_PostUpdateManyMutationInput, T_PostUncheckedUpdateManyInput>
    /**
     * Filter which T_Posts to update
     */
    where?: T_PostWhereInput
    /**
     * Limit how many T_Posts to update.
     */
    limit?: number
  }

  /**
   * T_Post updateManyAndReturn
   */
  export type T_PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * The data used to update T_Posts.
     */
    data: XOR<T_PostUpdateManyMutationInput, T_PostUncheckedUpdateManyInput>
    /**
     * Filter which T_Posts to update
     */
    where?: T_PostWhereInput
    /**
     * Limit how many T_Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Post upsert
   */
  export type T_PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * The filter to search for the T_Post to update in case it exists.
     */
    where: T_PostWhereUniqueInput
    /**
     * In case the T_Post found by the `where` argument doesn't exist, create a new T_Post with this data.
     */
    create: XOR<T_PostCreateInput, T_PostUncheckedCreateInput>
    /**
     * In case the T_Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_PostUpdateInput, T_PostUncheckedUpdateInput>
  }

  /**
   * T_Post delete
   */
  export type T_PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter which T_Post to delete.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post deleteMany
   */
  export type T_PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Posts to delete
     */
    where?: T_PostWhereInput
    /**
     * Limit how many T_Posts to delete.
     */
    limit?: number
  }

  /**
   * T_Post.T_PostInteracaoCapa
   */
  export type T_Post$T_PostInteracaoCapaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    where?: T_PostInteracaoCapaWhereInput
    orderBy?: T_PostInteracaoCapaOrderByWithRelationInput | T_PostInteracaoCapaOrderByWithRelationInput[]
    cursor?: T_PostInteracaoCapaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PostInteracaoCapaScalarFieldEnum | T_PostInteracaoCapaScalarFieldEnum[]
  }

  /**
   * T_Post without action
   */
  export type T_PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
  }


  /**
   * Model T_PostInteracaoCapa
   */

  export type AggregateT_PostInteracaoCapa = {
    _count: T_PostInteracaoCapaCountAggregateOutputType | null
    _avg: T_PostInteracaoCapaAvgAggregateOutputType | null
    _sum: T_PostInteracaoCapaSumAggregateOutputType | null
    _min: T_PostInteracaoCapaMinAggregateOutputType | null
    _max: T_PostInteracaoCapaMaxAggregateOutputType | null
  }

  export type T_PostInteracaoCapaAvgAggregateOutputType = {
    id_PIC: number | null
    id_Post_PIC: number | null
    visualizacao_PIC: number | null
  }

  export type T_PostInteracaoCapaSumAggregateOutputType = {
    id_PIC: number | null
    id_Post_PIC: number | null
    visualizacao_PIC: number[]
  }

  export type T_PostInteracaoCapaMinAggregateOutputType = {
    id_PIC: number | null
    id_Post_PIC: number | null
  }

  export type T_PostInteracaoCapaMaxAggregateOutputType = {
    id_PIC: number | null
    id_Post_PIC: number | null
  }

  export type T_PostInteracaoCapaCountAggregateOutputType = {
    id_PIC: number
    id_Post_PIC: number
    visualizacao_PIC: number
    _all: number
  }


  export type T_PostInteracaoCapaAvgAggregateInputType = {
    id_PIC?: true
    id_Post_PIC?: true
    visualizacao_PIC?: true
  }

  export type T_PostInteracaoCapaSumAggregateInputType = {
    id_PIC?: true
    id_Post_PIC?: true
    visualizacao_PIC?: true
  }

  export type T_PostInteracaoCapaMinAggregateInputType = {
    id_PIC?: true
    id_Post_PIC?: true
  }

  export type T_PostInteracaoCapaMaxAggregateInputType = {
    id_PIC?: true
    id_Post_PIC?: true
  }

  export type T_PostInteracaoCapaCountAggregateInputType = {
    id_PIC?: true
    id_Post_PIC?: true
    visualizacao_PIC?: true
    _all?: true
  }

  export type T_PostInteracaoCapaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_PostInteracaoCapa to aggregate.
     */
    where?: T_PostInteracaoCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PostInteracaoCapas to fetch.
     */
    orderBy?: T_PostInteracaoCapaOrderByWithRelationInput | T_PostInteracaoCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_PostInteracaoCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PostInteracaoCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PostInteracaoCapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_PostInteracaoCapas
    **/
    _count?: true | T_PostInteracaoCapaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_PostInteracaoCapaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_PostInteracaoCapaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_PostInteracaoCapaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_PostInteracaoCapaMaxAggregateInputType
  }

  export type GetT_PostInteracaoCapaAggregateType<T extends T_PostInteracaoCapaAggregateArgs> = {
        [P in keyof T & keyof AggregateT_PostInteracaoCapa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_PostInteracaoCapa[P]>
      : GetScalarType<T[P], AggregateT_PostInteracaoCapa[P]>
  }




  export type T_PostInteracaoCapaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PostInteracaoCapaWhereInput
    orderBy?: T_PostInteracaoCapaOrderByWithAggregationInput | T_PostInteracaoCapaOrderByWithAggregationInput[]
    by: T_PostInteracaoCapaScalarFieldEnum[] | T_PostInteracaoCapaScalarFieldEnum
    having?: T_PostInteracaoCapaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_PostInteracaoCapaCountAggregateInputType | true
    _avg?: T_PostInteracaoCapaAvgAggregateInputType
    _sum?: T_PostInteracaoCapaSumAggregateInputType
    _min?: T_PostInteracaoCapaMinAggregateInputType
    _max?: T_PostInteracaoCapaMaxAggregateInputType
  }

  export type T_PostInteracaoCapaGroupByOutputType = {
    id_PIC: number
    id_Post_PIC: number
    visualizacao_PIC: number[]
    _count: T_PostInteracaoCapaCountAggregateOutputType | null
    _avg: T_PostInteracaoCapaAvgAggregateOutputType | null
    _sum: T_PostInteracaoCapaSumAggregateOutputType | null
    _min: T_PostInteracaoCapaMinAggregateOutputType | null
    _max: T_PostInteracaoCapaMaxAggregateOutputType | null
  }

  type GetT_PostInteracaoCapaGroupByPayload<T extends T_PostInteracaoCapaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_PostInteracaoCapaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_PostInteracaoCapaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_PostInteracaoCapaGroupByOutputType[P]>
            : GetScalarType<T[P], T_PostInteracaoCapaGroupByOutputType[P]>
        }
      >
    >


  export type T_PostInteracaoCapaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_PIC?: boolean
    id_Post_PIC?: boolean
    visualizacao_PIC?: boolean
    curtidas_PIC?: boolean | T_PostInteracaoCapa$curtidas_PICArgs<ExtArgs>
    comentarios_PIC?: boolean | T_PostInteracaoCapa$comentarios_PICArgs<ExtArgs>
    T_Post?: boolean | T_PostDefaultArgs<ExtArgs>
    _count?: boolean | T_PostInteracaoCapaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PostInteracaoCapa"]>

  export type T_PostInteracaoCapaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_PIC?: boolean
    id_Post_PIC?: boolean
    visualizacao_PIC?: boolean
    T_Post?: boolean | T_PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PostInteracaoCapa"]>

  export type T_PostInteracaoCapaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_PIC?: boolean
    id_Post_PIC?: boolean
    visualizacao_PIC?: boolean
    T_Post?: boolean | T_PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PostInteracaoCapa"]>

  export type T_PostInteracaoCapaSelectScalar = {
    id_PIC?: boolean
    id_Post_PIC?: boolean
    visualizacao_PIC?: boolean
  }

  export type T_PostInteracaoCapaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_PIC" | "id_Post_PIC" | "visualizacao_PIC", ExtArgs["result"]["t_PostInteracaoCapa"]>
  export type T_PostInteracaoCapaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curtidas_PIC?: boolean | T_PostInteracaoCapa$curtidas_PICArgs<ExtArgs>
    comentarios_PIC?: boolean | T_PostInteracaoCapa$comentarios_PICArgs<ExtArgs>
    T_Post?: boolean | T_PostDefaultArgs<ExtArgs>
    _count?: boolean | T_PostInteracaoCapaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type T_PostInteracaoCapaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_Post?: boolean | T_PostDefaultArgs<ExtArgs>
  }
  export type T_PostInteracaoCapaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_Post?: boolean | T_PostDefaultArgs<ExtArgs>
  }

  export type $T_PostInteracaoCapaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_PostInteracaoCapa"
    objects: {
      curtidas_PIC: Prisma.$T_PIC_CurtidasPayload<ExtArgs>[]
      comentarios_PIC: Prisma.$T_PIC_ComentariosPayload<ExtArgs>[]
      T_Post: Prisma.$T_PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_PIC: number
      id_Post_PIC: number
      visualizacao_PIC: number[]
    }, ExtArgs["result"]["t_PostInteracaoCapa"]>
    composites: {}
  }

  type T_PostInteracaoCapaGetPayload<S extends boolean | null | undefined | T_PostInteracaoCapaDefaultArgs> = $Result.GetResult<Prisma.$T_PostInteracaoCapaPayload, S>

  type T_PostInteracaoCapaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_PostInteracaoCapaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_PostInteracaoCapaCountAggregateInputType | true
    }

  export interface T_PostInteracaoCapaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_PostInteracaoCapa'], meta: { name: 'T_PostInteracaoCapa' } }
    /**
     * Find zero or one T_PostInteracaoCapa that matches the filter.
     * @param {T_PostInteracaoCapaFindUniqueArgs} args - Arguments to find a T_PostInteracaoCapa
     * @example
     * // Get one T_PostInteracaoCapa
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_PostInteracaoCapaFindUniqueArgs>(args: SelectSubset<T, T_PostInteracaoCapaFindUniqueArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_PostInteracaoCapa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_PostInteracaoCapaFindUniqueOrThrowArgs} args - Arguments to find a T_PostInteracaoCapa
     * @example
     * // Get one T_PostInteracaoCapa
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_PostInteracaoCapaFindUniqueOrThrowArgs>(args: SelectSubset<T, T_PostInteracaoCapaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_PostInteracaoCapa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostInteracaoCapaFindFirstArgs} args - Arguments to find a T_PostInteracaoCapa
     * @example
     * // Get one T_PostInteracaoCapa
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_PostInteracaoCapaFindFirstArgs>(args?: SelectSubset<T, T_PostInteracaoCapaFindFirstArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_PostInteracaoCapa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostInteracaoCapaFindFirstOrThrowArgs} args - Arguments to find a T_PostInteracaoCapa
     * @example
     * // Get one T_PostInteracaoCapa
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_PostInteracaoCapaFindFirstOrThrowArgs>(args?: SelectSubset<T, T_PostInteracaoCapaFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_PostInteracaoCapas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostInteracaoCapaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_PostInteracaoCapas
     * const t_PostInteracaoCapas = await prisma.t_PostInteracaoCapa.findMany()
     * 
     * // Get first 10 T_PostInteracaoCapas
     * const t_PostInteracaoCapas = await prisma.t_PostInteracaoCapa.findMany({ take: 10 })
     * 
     * // Only select the `id_PIC`
     * const t_PostInteracaoCapaWithId_PICOnly = await prisma.t_PostInteracaoCapa.findMany({ select: { id_PIC: true } })
     * 
     */
    findMany<T extends T_PostInteracaoCapaFindManyArgs>(args?: SelectSubset<T, T_PostInteracaoCapaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_PostInteracaoCapa.
     * @param {T_PostInteracaoCapaCreateArgs} args - Arguments to create a T_PostInteracaoCapa.
     * @example
     * // Create one T_PostInteracaoCapa
     * const T_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.create({
     *   data: {
     *     // ... data to create a T_PostInteracaoCapa
     *   }
     * })
     * 
     */
    create<T extends T_PostInteracaoCapaCreateArgs>(args: SelectSubset<T, T_PostInteracaoCapaCreateArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_PostInteracaoCapas.
     * @param {T_PostInteracaoCapaCreateManyArgs} args - Arguments to create many T_PostInteracaoCapas.
     * @example
     * // Create many T_PostInteracaoCapas
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_PostInteracaoCapaCreateManyArgs>(args?: SelectSubset<T, T_PostInteracaoCapaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_PostInteracaoCapas and returns the data saved in the database.
     * @param {T_PostInteracaoCapaCreateManyAndReturnArgs} args - Arguments to create many T_PostInteracaoCapas.
     * @example
     * // Create many T_PostInteracaoCapas
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_PostInteracaoCapas and only return the `id_PIC`
     * const t_PostInteracaoCapaWithId_PICOnly = await prisma.t_PostInteracaoCapa.createManyAndReturn({
     *   select: { id_PIC: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_PostInteracaoCapaCreateManyAndReturnArgs>(args?: SelectSubset<T, T_PostInteracaoCapaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_PostInteracaoCapa.
     * @param {T_PostInteracaoCapaDeleteArgs} args - Arguments to delete one T_PostInteracaoCapa.
     * @example
     * // Delete one T_PostInteracaoCapa
     * const T_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.delete({
     *   where: {
     *     // ... filter to delete one T_PostInteracaoCapa
     *   }
     * })
     * 
     */
    delete<T extends T_PostInteracaoCapaDeleteArgs>(args: SelectSubset<T, T_PostInteracaoCapaDeleteArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_PostInteracaoCapa.
     * @param {T_PostInteracaoCapaUpdateArgs} args - Arguments to update one T_PostInteracaoCapa.
     * @example
     * // Update one T_PostInteracaoCapa
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_PostInteracaoCapaUpdateArgs>(args: SelectSubset<T, T_PostInteracaoCapaUpdateArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_PostInteracaoCapas.
     * @param {T_PostInteracaoCapaDeleteManyArgs} args - Arguments to filter T_PostInteracaoCapas to delete.
     * @example
     * // Delete a few T_PostInteracaoCapas
     * const { count } = await prisma.t_PostInteracaoCapa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_PostInteracaoCapaDeleteManyArgs>(args?: SelectSubset<T, T_PostInteracaoCapaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_PostInteracaoCapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostInteracaoCapaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_PostInteracaoCapas
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_PostInteracaoCapaUpdateManyArgs>(args: SelectSubset<T, T_PostInteracaoCapaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_PostInteracaoCapas and returns the data updated in the database.
     * @param {T_PostInteracaoCapaUpdateManyAndReturnArgs} args - Arguments to update many T_PostInteracaoCapas.
     * @example
     * // Update many T_PostInteracaoCapas
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_PostInteracaoCapas and only return the `id_PIC`
     * const t_PostInteracaoCapaWithId_PICOnly = await prisma.t_PostInteracaoCapa.updateManyAndReturn({
     *   select: { id_PIC: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_PostInteracaoCapaUpdateManyAndReturnArgs>(args: SelectSubset<T, T_PostInteracaoCapaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_PostInteracaoCapa.
     * @param {T_PostInteracaoCapaUpsertArgs} args - Arguments to update or create a T_PostInteracaoCapa.
     * @example
     * // Update or create a T_PostInteracaoCapa
     * const t_PostInteracaoCapa = await prisma.t_PostInteracaoCapa.upsert({
     *   create: {
     *     // ... data to create a T_PostInteracaoCapa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_PostInteracaoCapa we want to update
     *   }
     * })
     */
    upsert<T extends T_PostInteracaoCapaUpsertArgs>(args: SelectSubset<T, T_PostInteracaoCapaUpsertArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_PostInteracaoCapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostInteracaoCapaCountArgs} args - Arguments to filter T_PostInteracaoCapas to count.
     * @example
     * // Count the number of T_PostInteracaoCapas
     * const count = await prisma.t_PostInteracaoCapa.count({
     *   where: {
     *     // ... the filter for the T_PostInteracaoCapas we want to count
     *   }
     * })
    **/
    count<T extends T_PostInteracaoCapaCountArgs>(
      args?: Subset<T, T_PostInteracaoCapaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_PostInteracaoCapaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_PostInteracaoCapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostInteracaoCapaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_PostInteracaoCapaAggregateArgs>(args: Subset<T, T_PostInteracaoCapaAggregateArgs>): Prisma.PrismaPromise<GetT_PostInteracaoCapaAggregateType<T>>

    /**
     * Group by T_PostInteracaoCapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostInteracaoCapaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_PostInteracaoCapaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_PostInteracaoCapaGroupByArgs['orderBy'] }
        : { orderBy?: T_PostInteracaoCapaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_PostInteracaoCapaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_PostInteracaoCapaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_PostInteracaoCapa model
   */
  readonly fields: T_PostInteracaoCapaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_PostInteracaoCapa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_PostInteracaoCapaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curtidas_PIC<T extends T_PostInteracaoCapa$curtidas_PICArgs<ExtArgs> = {}>(args?: Subset<T, T_PostInteracaoCapa$curtidas_PICArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios_PIC<T extends T_PostInteracaoCapa$comentarios_PICArgs<ExtArgs> = {}>(args?: Subset<T, T_PostInteracaoCapa$comentarios_PICArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    T_Post<T extends T_PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, T_PostDefaultArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_PostInteracaoCapa model
   */
  interface T_PostInteracaoCapaFieldRefs {
    readonly id_PIC: FieldRef<"T_PostInteracaoCapa", 'Int'>
    readonly id_Post_PIC: FieldRef<"T_PostInteracaoCapa", 'Int'>
    readonly visualizacao_PIC: FieldRef<"T_PostInteracaoCapa", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * T_PostInteracaoCapa findUnique
   */
  export type T_PostInteracaoCapaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * Filter, which T_PostInteracaoCapa to fetch.
     */
    where: T_PostInteracaoCapaWhereUniqueInput
  }

  /**
   * T_PostInteracaoCapa findUniqueOrThrow
   */
  export type T_PostInteracaoCapaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * Filter, which T_PostInteracaoCapa to fetch.
     */
    where: T_PostInteracaoCapaWhereUniqueInput
  }

  /**
   * T_PostInteracaoCapa findFirst
   */
  export type T_PostInteracaoCapaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * Filter, which T_PostInteracaoCapa to fetch.
     */
    where?: T_PostInteracaoCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PostInteracaoCapas to fetch.
     */
    orderBy?: T_PostInteracaoCapaOrderByWithRelationInput | T_PostInteracaoCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_PostInteracaoCapas.
     */
    cursor?: T_PostInteracaoCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PostInteracaoCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PostInteracaoCapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_PostInteracaoCapas.
     */
    distinct?: T_PostInteracaoCapaScalarFieldEnum | T_PostInteracaoCapaScalarFieldEnum[]
  }

  /**
   * T_PostInteracaoCapa findFirstOrThrow
   */
  export type T_PostInteracaoCapaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * Filter, which T_PostInteracaoCapa to fetch.
     */
    where?: T_PostInteracaoCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PostInteracaoCapas to fetch.
     */
    orderBy?: T_PostInteracaoCapaOrderByWithRelationInput | T_PostInteracaoCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_PostInteracaoCapas.
     */
    cursor?: T_PostInteracaoCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PostInteracaoCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PostInteracaoCapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_PostInteracaoCapas.
     */
    distinct?: T_PostInteracaoCapaScalarFieldEnum | T_PostInteracaoCapaScalarFieldEnum[]
  }

  /**
   * T_PostInteracaoCapa findMany
   */
  export type T_PostInteracaoCapaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * Filter, which T_PostInteracaoCapas to fetch.
     */
    where?: T_PostInteracaoCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PostInteracaoCapas to fetch.
     */
    orderBy?: T_PostInteracaoCapaOrderByWithRelationInput | T_PostInteracaoCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_PostInteracaoCapas.
     */
    cursor?: T_PostInteracaoCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PostInteracaoCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PostInteracaoCapas.
     */
    skip?: number
    distinct?: T_PostInteracaoCapaScalarFieldEnum | T_PostInteracaoCapaScalarFieldEnum[]
  }

  /**
   * T_PostInteracaoCapa create
   */
  export type T_PostInteracaoCapaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * The data needed to create a T_PostInteracaoCapa.
     */
    data: XOR<T_PostInteracaoCapaCreateInput, T_PostInteracaoCapaUncheckedCreateInput>
  }

  /**
   * T_PostInteracaoCapa createMany
   */
  export type T_PostInteracaoCapaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_PostInteracaoCapas.
     */
    data: T_PostInteracaoCapaCreateManyInput | T_PostInteracaoCapaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_PostInteracaoCapa createManyAndReturn
   */
  export type T_PostInteracaoCapaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * The data used to create many T_PostInteracaoCapas.
     */
    data: T_PostInteracaoCapaCreateManyInput | T_PostInteracaoCapaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_PostInteracaoCapa update
   */
  export type T_PostInteracaoCapaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * The data needed to update a T_PostInteracaoCapa.
     */
    data: XOR<T_PostInteracaoCapaUpdateInput, T_PostInteracaoCapaUncheckedUpdateInput>
    /**
     * Choose, which T_PostInteracaoCapa to update.
     */
    where: T_PostInteracaoCapaWhereUniqueInput
  }

  /**
   * T_PostInteracaoCapa updateMany
   */
  export type T_PostInteracaoCapaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_PostInteracaoCapas.
     */
    data: XOR<T_PostInteracaoCapaUpdateManyMutationInput, T_PostInteracaoCapaUncheckedUpdateManyInput>
    /**
     * Filter which T_PostInteracaoCapas to update
     */
    where?: T_PostInteracaoCapaWhereInput
    /**
     * Limit how many T_PostInteracaoCapas to update.
     */
    limit?: number
  }

  /**
   * T_PostInteracaoCapa updateManyAndReturn
   */
  export type T_PostInteracaoCapaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * The data used to update T_PostInteracaoCapas.
     */
    data: XOR<T_PostInteracaoCapaUpdateManyMutationInput, T_PostInteracaoCapaUncheckedUpdateManyInput>
    /**
     * Filter which T_PostInteracaoCapas to update
     */
    where?: T_PostInteracaoCapaWhereInput
    /**
     * Limit how many T_PostInteracaoCapas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_PostInteracaoCapa upsert
   */
  export type T_PostInteracaoCapaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * The filter to search for the T_PostInteracaoCapa to update in case it exists.
     */
    where: T_PostInteracaoCapaWhereUniqueInput
    /**
     * In case the T_PostInteracaoCapa found by the `where` argument doesn't exist, create a new T_PostInteracaoCapa with this data.
     */
    create: XOR<T_PostInteracaoCapaCreateInput, T_PostInteracaoCapaUncheckedCreateInput>
    /**
     * In case the T_PostInteracaoCapa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_PostInteracaoCapaUpdateInput, T_PostInteracaoCapaUncheckedUpdateInput>
  }

  /**
   * T_PostInteracaoCapa delete
   */
  export type T_PostInteracaoCapaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    /**
     * Filter which T_PostInteracaoCapa to delete.
     */
    where: T_PostInteracaoCapaWhereUniqueInput
  }

  /**
   * T_PostInteracaoCapa deleteMany
   */
  export type T_PostInteracaoCapaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_PostInteracaoCapas to delete
     */
    where?: T_PostInteracaoCapaWhereInput
    /**
     * Limit how many T_PostInteracaoCapas to delete.
     */
    limit?: number
  }

  /**
   * T_PostInteracaoCapa.curtidas_PIC
   */
  export type T_PostInteracaoCapa$curtidas_PICArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    where?: T_PIC_CurtidasWhereInput
    orderBy?: T_PIC_CurtidasOrderByWithRelationInput | T_PIC_CurtidasOrderByWithRelationInput[]
    cursor?: T_PIC_CurtidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PIC_CurtidasScalarFieldEnum | T_PIC_CurtidasScalarFieldEnum[]
  }

  /**
   * T_PostInteracaoCapa.comentarios_PIC
   */
  export type T_PostInteracaoCapa$comentarios_PICArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    where?: T_PIC_ComentariosWhereInput
    orderBy?: T_PIC_ComentariosOrderByWithRelationInput | T_PIC_ComentariosOrderByWithRelationInput[]
    cursor?: T_PIC_ComentariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PIC_ComentariosScalarFieldEnum | T_PIC_ComentariosScalarFieldEnum[]
  }

  /**
   * T_PostInteracaoCapa without action
   */
  export type T_PostInteracaoCapaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
  }


  /**
   * Model T_PIC_Curtidas
   */

  export type AggregateT_PIC_Curtidas = {
    _count: T_PIC_CurtidasCountAggregateOutputType | null
    _avg: T_PIC_CurtidasAvgAggregateOutputType | null
    _sum: T_PIC_CurtidasSumAggregateOutputType | null
    _min: T_PIC_CurtidasMinAggregateOutputType | null
    _max: T_PIC_CurtidasMaxAggregateOutputType | null
  }

  export type T_PIC_CurtidasAvgAggregateOutputType = {
    id_Curtida: number | null
    id_Perfil_Curtida: number | null
    id_PIC_Curtida: number | null
  }

  export type T_PIC_CurtidasSumAggregateOutputType = {
    id_Curtida: number | null
    id_Perfil_Curtida: number | null
    id_PIC_Curtida: number | null
  }

  export type T_PIC_CurtidasMinAggregateOutputType = {
    id_Curtida: number | null
    id_Perfil_Curtida: number | null
    id_PIC_Curtida: number | null
  }

  export type T_PIC_CurtidasMaxAggregateOutputType = {
    id_Curtida: number | null
    id_Perfil_Curtida: number | null
    id_PIC_Curtida: number | null
  }

  export type T_PIC_CurtidasCountAggregateOutputType = {
    id_Curtida: number
    id_Perfil_Curtida: number
    id_PIC_Curtida: number
    _all: number
  }


  export type T_PIC_CurtidasAvgAggregateInputType = {
    id_Curtida?: true
    id_Perfil_Curtida?: true
    id_PIC_Curtida?: true
  }

  export type T_PIC_CurtidasSumAggregateInputType = {
    id_Curtida?: true
    id_Perfil_Curtida?: true
    id_PIC_Curtida?: true
  }

  export type T_PIC_CurtidasMinAggregateInputType = {
    id_Curtida?: true
    id_Perfil_Curtida?: true
    id_PIC_Curtida?: true
  }

  export type T_PIC_CurtidasMaxAggregateInputType = {
    id_Curtida?: true
    id_Perfil_Curtida?: true
    id_PIC_Curtida?: true
  }

  export type T_PIC_CurtidasCountAggregateInputType = {
    id_Curtida?: true
    id_Perfil_Curtida?: true
    id_PIC_Curtida?: true
    _all?: true
  }

  export type T_PIC_CurtidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_PIC_Curtidas to aggregate.
     */
    where?: T_PIC_CurtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Curtidas to fetch.
     */
    orderBy?: T_PIC_CurtidasOrderByWithRelationInput | T_PIC_CurtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_PIC_CurtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_PIC_Curtidas
    **/
    _count?: true | T_PIC_CurtidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_PIC_CurtidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_PIC_CurtidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_PIC_CurtidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_PIC_CurtidasMaxAggregateInputType
  }

  export type GetT_PIC_CurtidasAggregateType<T extends T_PIC_CurtidasAggregateArgs> = {
        [P in keyof T & keyof AggregateT_PIC_Curtidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_PIC_Curtidas[P]>
      : GetScalarType<T[P], AggregateT_PIC_Curtidas[P]>
  }




  export type T_PIC_CurtidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PIC_CurtidasWhereInput
    orderBy?: T_PIC_CurtidasOrderByWithAggregationInput | T_PIC_CurtidasOrderByWithAggregationInput[]
    by: T_PIC_CurtidasScalarFieldEnum[] | T_PIC_CurtidasScalarFieldEnum
    having?: T_PIC_CurtidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_PIC_CurtidasCountAggregateInputType | true
    _avg?: T_PIC_CurtidasAvgAggregateInputType
    _sum?: T_PIC_CurtidasSumAggregateInputType
    _min?: T_PIC_CurtidasMinAggregateInputType
    _max?: T_PIC_CurtidasMaxAggregateInputType
  }

  export type T_PIC_CurtidasGroupByOutputType = {
    id_Curtida: number
    id_Perfil_Curtida: number
    id_PIC_Curtida: number | null
    _count: T_PIC_CurtidasCountAggregateOutputType | null
    _avg: T_PIC_CurtidasAvgAggregateOutputType | null
    _sum: T_PIC_CurtidasSumAggregateOutputType | null
    _min: T_PIC_CurtidasMinAggregateOutputType | null
    _max: T_PIC_CurtidasMaxAggregateOutputType | null
  }

  type GetT_PIC_CurtidasGroupByPayload<T extends T_PIC_CurtidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_PIC_CurtidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_PIC_CurtidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_PIC_CurtidasGroupByOutputType[P]>
            : GetScalarType<T[P], T_PIC_CurtidasGroupByOutputType[P]>
        }
      >
    >


  export type T_PIC_CurtidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Curtida?: boolean
    id_Perfil_Curtida?: boolean
    id_PIC_Curtida?: boolean
    T_PostInteracaoCapa?: boolean | T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PIC_Curtidas"]>

  export type T_PIC_CurtidasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Curtida?: boolean
    id_Perfil_Curtida?: boolean
    id_PIC_Curtida?: boolean
    T_PostInteracaoCapa?: boolean | T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PIC_Curtidas"]>

  export type T_PIC_CurtidasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Curtida?: boolean
    id_Perfil_Curtida?: boolean
    id_PIC_Curtida?: boolean
    T_PostInteracaoCapa?: boolean | T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PIC_Curtidas"]>

  export type T_PIC_CurtidasSelectScalar = {
    id_Curtida?: boolean
    id_Perfil_Curtida?: boolean
    id_PIC_Curtida?: boolean
  }

  export type T_PIC_CurtidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Curtida" | "id_Perfil_Curtida" | "id_PIC_Curtida", ExtArgs["result"]["t_PIC_Curtidas"]>
  export type T_PIC_CurtidasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_PostInteracaoCapa?: boolean | T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }
  export type T_PIC_CurtidasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_PostInteracaoCapa?: boolean | T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }
  export type T_PIC_CurtidasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_PostInteracaoCapa?: boolean | T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }

  export type $T_PIC_CurtidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_PIC_Curtidas"
    objects: {
      T_PostInteracaoCapa: Prisma.$T_PostInteracaoCapaPayload<ExtArgs> | null
      T_Perfil: Prisma.$T_PerfilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Curtida: number
      id_Perfil_Curtida: number
      id_PIC_Curtida: number | null
    }, ExtArgs["result"]["t_PIC_Curtidas"]>
    composites: {}
  }

  type T_PIC_CurtidasGetPayload<S extends boolean | null | undefined | T_PIC_CurtidasDefaultArgs> = $Result.GetResult<Prisma.$T_PIC_CurtidasPayload, S>

  type T_PIC_CurtidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_PIC_CurtidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_PIC_CurtidasCountAggregateInputType | true
    }

  export interface T_PIC_CurtidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_PIC_Curtidas'], meta: { name: 'T_PIC_Curtidas' } }
    /**
     * Find zero or one T_PIC_Curtidas that matches the filter.
     * @param {T_PIC_CurtidasFindUniqueArgs} args - Arguments to find a T_PIC_Curtidas
     * @example
     * // Get one T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_PIC_CurtidasFindUniqueArgs>(args: SelectSubset<T, T_PIC_CurtidasFindUniqueArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_PIC_Curtidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_PIC_CurtidasFindUniqueOrThrowArgs} args - Arguments to find a T_PIC_Curtidas
     * @example
     * // Get one T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_PIC_CurtidasFindUniqueOrThrowArgs>(args: SelectSubset<T, T_PIC_CurtidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_PIC_Curtidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_CurtidasFindFirstArgs} args - Arguments to find a T_PIC_Curtidas
     * @example
     * // Get one T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_PIC_CurtidasFindFirstArgs>(args?: SelectSubset<T, T_PIC_CurtidasFindFirstArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_PIC_Curtidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_CurtidasFindFirstOrThrowArgs} args - Arguments to find a T_PIC_Curtidas
     * @example
     * // Get one T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_PIC_CurtidasFindFirstOrThrowArgs>(args?: SelectSubset<T, T_PIC_CurtidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_PIC_Curtidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_CurtidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.findMany()
     * 
     * // Get first 10 T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.findMany({ take: 10 })
     * 
     * // Only select the `id_Curtida`
     * const t_PIC_CurtidasWithId_CurtidaOnly = await prisma.t_PIC_Curtidas.findMany({ select: { id_Curtida: true } })
     * 
     */
    findMany<T extends T_PIC_CurtidasFindManyArgs>(args?: SelectSubset<T, T_PIC_CurtidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_PIC_Curtidas.
     * @param {T_PIC_CurtidasCreateArgs} args - Arguments to create a T_PIC_Curtidas.
     * @example
     * // Create one T_PIC_Curtidas
     * const T_PIC_Curtidas = await prisma.t_PIC_Curtidas.create({
     *   data: {
     *     // ... data to create a T_PIC_Curtidas
     *   }
     * })
     * 
     */
    create<T extends T_PIC_CurtidasCreateArgs>(args: SelectSubset<T, T_PIC_CurtidasCreateArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_PIC_Curtidas.
     * @param {T_PIC_CurtidasCreateManyArgs} args - Arguments to create many T_PIC_Curtidas.
     * @example
     * // Create many T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_PIC_CurtidasCreateManyArgs>(args?: SelectSubset<T, T_PIC_CurtidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_PIC_Curtidas and returns the data saved in the database.
     * @param {T_PIC_CurtidasCreateManyAndReturnArgs} args - Arguments to create many T_PIC_Curtidas.
     * @example
     * // Create many T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_PIC_Curtidas and only return the `id_Curtida`
     * const t_PIC_CurtidasWithId_CurtidaOnly = await prisma.t_PIC_Curtidas.createManyAndReturn({
     *   select: { id_Curtida: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_PIC_CurtidasCreateManyAndReturnArgs>(args?: SelectSubset<T, T_PIC_CurtidasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_PIC_Curtidas.
     * @param {T_PIC_CurtidasDeleteArgs} args - Arguments to delete one T_PIC_Curtidas.
     * @example
     * // Delete one T_PIC_Curtidas
     * const T_PIC_Curtidas = await prisma.t_PIC_Curtidas.delete({
     *   where: {
     *     // ... filter to delete one T_PIC_Curtidas
     *   }
     * })
     * 
     */
    delete<T extends T_PIC_CurtidasDeleteArgs>(args: SelectSubset<T, T_PIC_CurtidasDeleteArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_PIC_Curtidas.
     * @param {T_PIC_CurtidasUpdateArgs} args - Arguments to update one T_PIC_Curtidas.
     * @example
     * // Update one T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_PIC_CurtidasUpdateArgs>(args: SelectSubset<T, T_PIC_CurtidasUpdateArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_PIC_Curtidas.
     * @param {T_PIC_CurtidasDeleteManyArgs} args - Arguments to filter T_PIC_Curtidas to delete.
     * @example
     * // Delete a few T_PIC_Curtidas
     * const { count } = await prisma.t_PIC_Curtidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_PIC_CurtidasDeleteManyArgs>(args?: SelectSubset<T, T_PIC_CurtidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_PIC_Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_CurtidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_PIC_CurtidasUpdateManyArgs>(args: SelectSubset<T, T_PIC_CurtidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_PIC_Curtidas and returns the data updated in the database.
     * @param {T_PIC_CurtidasUpdateManyAndReturnArgs} args - Arguments to update many T_PIC_Curtidas.
     * @example
     * // Update many T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_PIC_Curtidas and only return the `id_Curtida`
     * const t_PIC_CurtidasWithId_CurtidaOnly = await prisma.t_PIC_Curtidas.updateManyAndReturn({
     *   select: { id_Curtida: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_PIC_CurtidasUpdateManyAndReturnArgs>(args: SelectSubset<T, T_PIC_CurtidasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_PIC_Curtidas.
     * @param {T_PIC_CurtidasUpsertArgs} args - Arguments to update or create a T_PIC_Curtidas.
     * @example
     * // Update or create a T_PIC_Curtidas
     * const t_PIC_Curtidas = await prisma.t_PIC_Curtidas.upsert({
     *   create: {
     *     // ... data to create a T_PIC_Curtidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_PIC_Curtidas we want to update
     *   }
     * })
     */
    upsert<T extends T_PIC_CurtidasUpsertArgs>(args: SelectSubset<T, T_PIC_CurtidasUpsertArgs<ExtArgs>>): Prisma__T_PIC_CurtidasClient<$Result.GetResult<Prisma.$T_PIC_CurtidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_PIC_Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_CurtidasCountArgs} args - Arguments to filter T_PIC_Curtidas to count.
     * @example
     * // Count the number of T_PIC_Curtidas
     * const count = await prisma.t_PIC_Curtidas.count({
     *   where: {
     *     // ... the filter for the T_PIC_Curtidas we want to count
     *   }
     * })
    **/
    count<T extends T_PIC_CurtidasCountArgs>(
      args?: Subset<T, T_PIC_CurtidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_PIC_CurtidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_PIC_Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_CurtidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_PIC_CurtidasAggregateArgs>(args: Subset<T, T_PIC_CurtidasAggregateArgs>): Prisma.PrismaPromise<GetT_PIC_CurtidasAggregateType<T>>

    /**
     * Group by T_PIC_Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_CurtidasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_PIC_CurtidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_PIC_CurtidasGroupByArgs['orderBy'] }
        : { orderBy?: T_PIC_CurtidasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_PIC_CurtidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_PIC_CurtidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_PIC_Curtidas model
   */
  readonly fields: T_PIC_CurtidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_PIC_Curtidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_PIC_CurtidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    T_PostInteracaoCapa<T extends T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs> = {}>(args?: Subset<T, T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    T_Perfil<T extends T_PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, T_PerfilDefaultArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_PIC_Curtidas model
   */
  interface T_PIC_CurtidasFieldRefs {
    readonly id_Curtida: FieldRef<"T_PIC_Curtidas", 'Int'>
    readonly id_Perfil_Curtida: FieldRef<"T_PIC_Curtidas", 'Int'>
    readonly id_PIC_Curtida: FieldRef<"T_PIC_Curtidas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * T_PIC_Curtidas findUnique
   */
  export type T_PIC_CurtidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Curtidas to fetch.
     */
    where: T_PIC_CurtidasWhereUniqueInput
  }

  /**
   * T_PIC_Curtidas findUniqueOrThrow
   */
  export type T_PIC_CurtidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Curtidas to fetch.
     */
    where: T_PIC_CurtidasWhereUniqueInput
  }

  /**
   * T_PIC_Curtidas findFirst
   */
  export type T_PIC_CurtidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Curtidas to fetch.
     */
    where?: T_PIC_CurtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Curtidas to fetch.
     */
    orderBy?: T_PIC_CurtidasOrderByWithRelationInput | T_PIC_CurtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_PIC_Curtidas.
     */
    cursor?: T_PIC_CurtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_PIC_Curtidas.
     */
    distinct?: T_PIC_CurtidasScalarFieldEnum | T_PIC_CurtidasScalarFieldEnum[]
  }

  /**
   * T_PIC_Curtidas findFirstOrThrow
   */
  export type T_PIC_CurtidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Curtidas to fetch.
     */
    where?: T_PIC_CurtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Curtidas to fetch.
     */
    orderBy?: T_PIC_CurtidasOrderByWithRelationInput | T_PIC_CurtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_PIC_Curtidas.
     */
    cursor?: T_PIC_CurtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_PIC_Curtidas.
     */
    distinct?: T_PIC_CurtidasScalarFieldEnum | T_PIC_CurtidasScalarFieldEnum[]
  }

  /**
   * T_PIC_Curtidas findMany
   */
  export type T_PIC_CurtidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Curtidas to fetch.
     */
    where?: T_PIC_CurtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Curtidas to fetch.
     */
    orderBy?: T_PIC_CurtidasOrderByWithRelationInput | T_PIC_CurtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_PIC_Curtidas.
     */
    cursor?: T_PIC_CurtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Curtidas.
     */
    skip?: number
    distinct?: T_PIC_CurtidasScalarFieldEnum | T_PIC_CurtidasScalarFieldEnum[]
  }

  /**
   * T_PIC_Curtidas create
   */
  export type T_PIC_CurtidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * The data needed to create a T_PIC_Curtidas.
     */
    data: XOR<T_PIC_CurtidasCreateInput, T_PIC_CurtidasUncheckedCreateInput>
  }

  /**
   * T_PIC_Curtidas createMany
   */
  export type T_PIC_CurtidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_PIC_Curtidas.
     */
    data: T_PIC_CurtidasCreateManyInput | T_PIC_CurtidasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_PIC_Curtidas createManyAndReturn
   */
  export type T_PIC_CurtidasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * The data used to create many T_PIC_Curtidas.
     */
    data: T_PIC_CurtidasCreateManyInput | T_PIC_CurtidasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_PIC_Curtidas update
   */
  export type T_PIC_CurtidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * The data needed to update a T_PIC_Curtidas.
     */
    data: XOR<T_PIC_CurtidasUpdateInput, T_PIC_CurtidasUncheckedUpdateInput>
    /**
     * Choose, which T_PIC_Curtidas to update.
     */
    where: T_PIC_CurtidasWhereUniqueInput
  }

  /**
   * T_PIC_Curtidas updateMany
   */
  export type T_PIC_CurtidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_PIC_Curtidas.
     */
    data: XOR<T_PIC_CurtidasUpdateManyMutationInput, T_PIC_CurtidasUncheckedUpdateManyInput>
    /**
     * Filter which T_PIC_Curtidas to update
     */
    where?: T_PIC_CurtidasWhereInput
    /**
     * Limit how many T_PIC_Curtidas to update.
     */
    limit?: number
  }

  /**
   * T_PIC_Curtidas updateManyAndReturn
   */
  export type T_PIC_CurtidasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * The data used to update T_PIC_Curtidas.
     */
    data: XOR<T_PIC_CurtidasUpdateManyMutationInput, T_PIC_CurtidasUncheckedUpdateManyInput>
    /**
     * Filter which T_PIC_Curtidas to update
     */
    where?: T_PIC_CurtidasWhereInput
    /**
     * Limit how many T_PIC_Curtidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_PIC_Curtidas upsert
   */
  export type T_PIC_CurtidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * The filter to search for the T_PIC_Curtidas to update in case it exists.
     */
    where: T_PIC_CurtidasWhereUniqueInput
    /**
     * In case the T_PIC_Curtidas found by the `where` argument doesn't exist, create a new T_PIC_Curtidas with this data.
     */
    create: XOR<T_PIC_CurtidasCreateInput, T_PIC_CurtidasUncheckedCreateInput>
    /**
     * In case the T_PIC_Curtidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_PIC_CurtidasUpdateInput, T_PIC_CurtidasUncheckedUpdateInput>
  }

  /**
   * T_PIC_Curtidas delete
   */
  export type T_PIC_CurtidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
    /**
     * Filter which T_PIC_Curtidas to delete.
     */
    where: T_PIC_CurtidasWhereUniqueInput
  }

  /**
   * T_PIC_Curtidas deleteMany
   */
  export type T_PIC_CurtidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_PIC_Curtidas to delete
     */
    where?: T_PIC_CurtidasWhereInput
    /**
     * Limit how many T_PIC_Curtidas to delete.
     */
    limit?: number
  }

  /**
   * T_PIC_Curtidas.T_PostInteracaoCapa
   */
  export type T_PIC_Curtidas$T_PostInteracaoCapaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    where?: T_PostInteracaoCapaWhereInput
  }

  /**
   * T_PIC_Curtidas without action
   */
  export type T_PIC_CurtidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Curtidas
     */
    select?: T_PIC_CurtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Curtidas
     */
    omit?: T_PIC_CurtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_CurtidasInclude<ExtArgs> | null
  }


  /**
   * Model T_PIC_Comentarios
   */

  export type AggregateT_PIC_Comentarios = {
    _count: T_PIC_ComentariosCountAggregateOutputType | null
    _avg: T_PIC_ComentariosAvgAggregateOutputType | null
    _sum: T_PIC_ComentariosSumAggregateOutputType | null
    _min: T_PIC_ComentariosMinAggregateOutputType | null
    _max: T_PIC_ComentariosMaxAggregateOutputType | null
  }

  export type T_PIC_ComentariosAvgAggregateOutputType = {
    id_Comentario: number | null
    id_Perfil_Comentario: number | null
    id_PIC_Comentario: number | null
  }

  export type T_PIC_ComentariosSumAggregateOutputType = {
    id_Comentario: number | null
    id_Perfil_Comentario: number | null
    id_PIC_Comentario: number | null
  }

  export type T_PIC_ComentariosMinAggregateOutputType = {
    id_Comentario: number | null
    id_Perfil_Comentario: number | null
    conteudo_Comentario: string | null
    id_PIC_Comentario: number | null
  }

  export type T_PIC_ComentariosMaxAggregateOutputType = {
    id_Comentario: number | null
    id_Perfil_Comentario: number | null
    conteudo_Comentario: string | null
    id_PIC_Comentario: number | null
  }

  export type T_PIC_ComentariosCountAggregateOutputType = {
    id_Comentario: number
    id_Perfil_Comentario: number
    conteudo_Comentario: number
    id_PIC_Comentario: number
    _all: number
  }


  export type T_PIC_ComentariosAvgAggregateInputType = {
    id_Comentario?: true
    id_Perfil_Comentario?: true
    id_PIC_Comentario?: true
  }

  export type T_PIC_ComentariosSumAggregateInputType = {
    id_Comentario?: true
    id_Perfil_Comentario?: true
    id_PIC_Comentario?: true
  }

  export type T_PIC_ComentariosMinAggregateInputType = {
    id_Comentario?: true
    id_Perfil_Comentario?: true
    conteudo_Comentario?: true
    id_PIC_Comentario?: true
  }

  export type T_PIC_ComentariosMaxAggregateInputType = {
    id_Comentario?: true
    id_Perfil_Comentario?: true
    conteudo_Comentario?: true
    id_PIC_Comentario?: true
  }

  export type T_PIC_ComentariosCountAggregateInputType = {
    id_Comentario?: true
    id_Perfil_Comentario?: true
    conteudo_Comentario?: true
    id_PIC_Comentario?: true
    _all?: true
  }

  export type T_PIC_ComentariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_PIC_Comentarios to aggregate.
     */
    where?: T_PIC_ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Comentarios to fetch.
     */
    orderBy?: T_PIC_ComentariosOrderByWithRelationInput | T_PIC_ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_PIC_ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_PIC_Comentarios
    **/
    _count?: true | T_PIC_ComentariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_PIC_ComentariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_PIC_ComentariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_PIC_ComentariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_PIC_ComentariosMaxAggregateInputType
  }

  export type GetT_PIC_ComentariosAggregateType<T extends T_PIC_ComentariosAggregateArgs> = {
        [P in keyof T & keyof AggregateT_PIC_Comentarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_PIC_Comentarios[P]>
      : GetScalarType<T[P], AggregateT_PIC_Comentarios[P]>
  }




  export type T_PIC_ComentariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PIC_ComentariosWhereInput
    orderBy?: T_PIC_ComentariosOrderByWithAggregationInput | T_PIC_ComentariosOrderByWithAggregationInput[]
    by: T_PIC_ComentariosScalarFieldEnum[] | T_PIC_ComentariosScalarFieldEnum
    having?: T_PIC_ComentariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_PIC_ComentariosCountAggregateInputType | true
    _avg?: T_PIC_ComentariosAvgAggregateInputType
    _sum?: T_PIC_ComentariosSumAggregateInputType
    _min?: T_PIC_ComentariosMinAggregateInputType
    _max?: T_PIC_ComentariosMaxAggregateInputType
  }

  export type T_PIC_ComentariosGroupByOutputType = {
    id_Comentario: number
    id_Perfil_Comentario: number
    conteudo_Comentario: string
    id_PIC_Comentario: number | null
    _count: T_PIC_ComentariosCountAggregateOutputType | null
    _avg: T_PIC_ComentariosAvgAggregateOutputType | null
    _sum: T_PIC_ComentariosSumAggregateOutputType | null
    _min: T_PIC_ComentariosMinAggregateOutputType | null
    _max: T_PIC_ComentariosMaxAggregateOutputType | null
  }

  type GetT_PIC_ComentariosGroupByPayload<T extends T_PIC_ComentariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_PIC_ComentariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_PIC_ComentariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_PIC_ComentariosGroupByOutputType[P]>
            : GetScalarType<T[P], T_PIC_ComentariosGroupByOutputType[P]>
        }
      >
    >


  export type T_PIC_ComentariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Comentario?: boolean
    id_Perfil_Comentario?: boolean
    conteudo_Comentario?: boolean
    id_PIC_Comentario?: boolean
    T_PostInteracaoCapa?: boolean | T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PIC_Comentarios"]>

  export type T_PIC_ComentariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Comentario?: boolean
    id_Perfil_Comentario?: boolean
    conteudo_Comentario?: boolean
    id_PIC_Comentario?: boolean
    T_PostInteracaoCapa?: boolean | T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PIC_Comentarios"]>

  export type T_PIC_ComentariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Comentario?: boolean
    id_Perfil_Comentario?: boolean
    conteudo_Comentario?: boolean
    id_PIC_Comentario?: boolean
    T_PostInteracaoCapa?: boolean | T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_PIC_Comentarios"]>

  export type T_PIC_ComentariosSelectScalar = {
    id_Comentario?: boolean
    id_Perfil_Comentario?: boolean
    conteudo_Comentario?: boolean
    id_PIC_Comentario?: boolean
  }

  export type T_PIC_ComentariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Comentario" | "id_Perfil_Comentario" | "conteudo_Comentario" | "id_PIC_Comentario", ExtArgs["result"]["t_PIC_Comentarios"]>
  export type T_PIC_ComentariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_PostInteracaoCapa?: boolean | T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }
  export type T_PIC_ComentariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_PostInteracaoCapa?: boolean | T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }
  export type T_PIC_ComentariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    T_PostInteracaoCapa?: boolean | T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs>
    T_Perfil?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }

  export type $T_PIC_ComentariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_PIC_Comentarios"
    objects: {
      T_PostInteracaoCapa: Prisma.$T_PostInteracaoCapaPayload<ExtArgs> | null
      T_Perfil: Prisma.$T_PerfilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Comentario: number
      id_Perfil_Comentario: number
      conteudo_Comentario: string
      id_PIC_Comentario: number | null
    }, ExtArgs["result"]["t_PIC_Comentarios"]>
    composites: {}
  }

  type T_PIC_ComentariosGetPayload<S extends boolean | null | undefined | T_PIC_ComentariosDefaultArgs> = $Result.GetResult<Prisma.$T_PIC_ComentariosPayload, S>

  type T_PIC_ComentariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_PIC_ComentariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_PIC_ComentariosCountAggregateInputType | true
    }

  export interface T_PIC_ComentariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_PIC_Comentarios'], meta: { name: 'T_PIC_Comentarios' } }
    /**
     * Find zero or one T_PIC_Comentarios that matches the filter.
     * @param {T_PIC_ComentariosFindUniqueArgs} args - Arguments to find a T_PIC_Comentarios
     * @example
     * // Get one T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_PIC_ComentariosFindUniqueArgs>(args: SelectSubset<T, T_PIC_ComentariosFindUniqueArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_PIC_Comentarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_PIC_ComentariosFindUniqueOrThrowArgs} args - Arguments to find a T_PIC_Comentarios
     * @example
     * // Get one T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_PIC_ComentariosFindUniqueOrThrowArgs>(args: SelectSubset<T, T_PIC_ComentariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_PIC_Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_ComentariosFindFirstArgs} args - Arguments to find a T_PIC_Comentarios
     * @example
     * // Get one T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_PIC_ComentariosFindFirstArgs>(args?: SelectSubset<T, T_PIC_ComentariosFindFirstArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_PIC_Comentarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_ComentariosFindFirstOrThrowArgs} args - Arguments to find a T_PIC_Comentarios
     * @example
     * // Get one T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_PIC_ComentariosFindFirstOrThrowArgs>(args?: SelectSubset<T, T_PIC_ComentariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_PIC_Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_ComentariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.findMany()
     * 
     * // Get first 10 T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.findMany({ take: 10 })
     * 
     * // Only select the `id_Comentario`
     * const t_PIC_ComentariosWithId_ComentarioOnly = await prisma.t_PIC_Comentarios.findMany({ select: { id_Comentario: true } })
     * 
     */
    findMany<T extends T_PIC_ComentariosFindManyArgs>(args?: SelectSubset<T, T_PIC_ComentariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_PIC_Comentarios.
     * @param {T_PIC_ComentariosCreateArgs} args - Arguments to create a T_PIC_Comentarios.
     * @example
     * // Create one T_PIC_Comentarios
     * const T_PIC_Comentarios = await prisma.t_PIC_Comentarios.create({
     *   data: {
     *     // ... data to create a T_PIC_Comentarios
     *   }
     * })
     * 
     */
    create<T extends T_PIC_ComentariosCreateArgs>(args: SelectSubset<T, T_PIC_ComentariosCreateArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_PIC_Comentarios.
     * @param {T_PIC_ComentariosCreateManyArgs} args - Arguments to create many T_PIC_Comentarios.
     * @example
     * // Create many T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_PIC_ComentariosCreateManyArgs>(args?: SelectSubset<T, T_PIC_ComentariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_PIC_Comentarios and returns the data saved in the database.
     * @param {T_PIC_ComentariosCreateManyAndReturnArgs} args - Arguments to create many T_PIC_Comentarios.
     * @example
     * // Create many T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_PIC_Comentarios and only return the `id_Comentario`
     * const t_PIC_ComentariosWithId_ComentarioOnly = await prisma.t_PIC_Comentarios.createManyAndReturn({
     *   select: { id_Comentario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_PIC_ComentariosCreateManyAndReturnArgs>(args?: SelectSubset<T, T_PIC_ComentariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_PIC_Comentarios.
     * @param {T_PIC_ComentariosDeleteArgs} args - Arguments to delete one T_PIC_Comentarios.
     * @example
     * // Delete one T_PIC_Comentarios
     * const T_PIC_Comentarios = await prisma.t_PIC_Comentarios.delete({
     *   where: {
     *     // ... filter to delete one T_PIC_Comentarios
     *   }
     * })
     * 
     */
    delete<T extends T_PIC_ComentariosDeleteArgs>(args: SelectSubset<T, T_PIC_ComentariosDeleteArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_PIC_Comentarios.
     * @param {T_PIC_ComentariosUpdateArgs} args - Arguments to update one T_PIC_Comentarios.
     * @example
     * // Update one T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_PIC_ComentariosUpdateArgs>(args: SelectSubset<T, T_PIC_ComentariosUpdateArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_PIC_Comentarios.
     * @param {T_PIC_ComentariosDeleteManyArgs} args - Arguments to filter T_PIC_Comentarios to delete.
     * @example
     * // Delete a few T_PIC_Comentarios
     * const { count } = await prisma.t_PIC_Comentarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_PIC_ComentariosDeleteManyArgs>(args?: SelectSubset<T, T_PIC_ComentariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_PIC_Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_ComentariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_PIC_ComentariosUpdateManyArgs>(args: SelectSubset<T, T_PIC_ComentariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_PIC_Comentarios and returns the data updated in the database.
     * @param {T_PIC_ComentariosUpdateManyAndReturnArgs} args - Arguments to update many T_PIC_Comentarios.
     * @example
     * // Update many T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_PIC_Comentarios and only return the `id_Comentario`
     * const t_PIC_ComentariosWithId_ComentarioOnly = await prisma.t_PIC_Comentarios.updateManyAndReturn({
     *   select: { id_Comentario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_PIC_ComentariosUpdateManyAndReturnArgs>(args: SelectSubset<T, T_PIC_ComentariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_PIC_Comentarios.
     * @param {T_PIC_ComentariosUpsertArgs} args - Arguments to update or create a T_PIC_Comentarios.
     * @example
     * // Update or create a T_PIC_Comentarios
     * const t_PIC_Comentarios = await prisma.t_PIC_Comentarios.upsert({
     *   create: {
     *     // ... data to create a T_PIC_Comentarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_PIC_Comentarios we want to update
     *   }
     * })
     */
    upsert<T extends T_PIC_ComentariosUpsertArgs>(args: SelectSubset<T, T_PIC_ComentariosUpsertArgs<ExtArgs>>): Prisma__T_PIC_ComentariosClient<$Result.GetResult<Prisma.$T_PIC_ComentariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_PIC_Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_ComentariosCountArgs} args - Arguments to filter T_PIC_Comentarios to count.
     * @example
     * // Count the number of T_PIC_Comentarios
     * const count = await prisma.t_PIC_Comentarios.count({
     *   where: {
     *     // ... the filter for the T_PIC_Comentarios we want to count
     *   }
     * })
    **/
    count<T extends T_PIC_ComentariosCountArgs>(
      args?: Subset<T, T_PIC_ComentariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_PIC_ComentariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_PIC_Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_ComentariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_PIC_ComentariosAggregateArgs>(args: Subset<T, T_PIC_ComentariosAggregateArgs>): Prisma.PrismaPromise<GetT_PIC_ComentariosAggregateType<T>>

    /**
     * Group by T_PIC_Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PIC_ComentariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_PIC_ComentariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_PIC_ComentariosGroupByArgs['orderBy'] }
        : { orderBy?: T_PIC_ComentariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_PIC_ComentariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_PIC_ComentariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_PIC_Comentarios model
   */
  readonly fields: T_PIC_ComentariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_PIC_Comentarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_PIC_ComentariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    T_PostInteracaoCapa<T extends T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs> = {}>(args?: Subset<T, T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs>>): Prisma__T_PostInteracaoCapaClient<$Result.GetResult<Prisma.$T_PostInteracaoCapaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    T_Perfil<T extends T_PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, T_PerfilDefaultArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_PIC_Comentarios model
   */
  interface T_PIC_ComentariosFieldRefs {
    readonly id_Comentario: FieldRef<"T_PIC_Comentarios", 'Int'>
    readonly id_Perfil_Comentario: FieldRef<"T_PIC_Comentarios", 'Int'>
    readonly conteudo_Comentario: FieldRef<"T_PIC_Comentarios", 'String'>
    readonly id_PIC_Comentario: FieldRef<"T_PIC_Comentarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * T_PIC_Comentarios findUnique
   */
  export type T_PIC_ComentariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Comentarios to fetch.
     */
    where: T_PIC_ComentariosWhereUniqueInput
  }

  /**
   * T_PIC_Comentarios findUniqueOrThrow
   */
  export type T_PIC_ComentariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Comentarios to fetch.
     */
    where: T_PIC_ComentariosWhereUniqueInput
  }

  /**
   * T_PIC_Comentarios findFirst
   */
  export type T_PIC_ComentariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Comentarios to fetch.
     */
    where?: T_PIC_ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Comentarios to fetch.
     */
    orderBy?: T_PIC_ComentariosOrderByWithRelationInput | T_PIC_ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_PIC_Comentarios.
     */
    cursor?: T_PIC_ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_PIC_Comentarios.
     */
    distinct?: T_PIC_ComentariosScalarFieldEnum | T_PIC_ComentariosScalarFieldEnum[]
  }

  /**
   * T_PIC_Comentarios findFirstOrThrow
   */
  export type T_PIC_ComentariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Comentarios to fetch.
     */
    where?: T_PIC_ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Comentarios to fetch.
     */
    orderBy?: T_PIC_ComentariosOrderByWithRelationInput | T_PIC_ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_PIC_Comentarios.
     */
    cursor?: T_PIC_ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_PIC_Comentarios.
     */
    distinct?: T_PIC_ComentariosScalarFieldEnum | T_PIC_ComentariosScalarFieldEnum[]
  }

  /**
   * T_PIC_Comentarios findMany
   */
  export type T_PIC_ComentariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which T_PIC_Comentarios to fetch.
     */
    where?: T_PIC_ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_PIC_Comentarios to fetch.
     */
    orderBy?: T_PIC_ComentariosOrderByWithRelationInput | T_PIC_ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_PIC_Comentarios.
     */
    cursor?: T_PIC_ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_PIC_Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_PIC_Comentarios.
     */
    skip?: number
    distinct?: T_PIC_ComentariosScalarFieldEnum | T_PIC_ComentariosScalarFieldEnum[]
  }

  /**
   * T_PIC_Comentarios create
   */
  export type T_PIC_ComentariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * The data needed to create a T_PIC_Comentarios.
     */
    data: XOR<T_PIC_ComentariosCreateInput, T_PIC_ComentariosUncheckedCreateInput>
  }

  /**
   * T_PIC_Comentarios createMany
   */
  export type T_PIC_ComentariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_PIC_Comentarios.
     */
    data: T_PIC_ComentariosCreateManyInput | T_PIC_ComentariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_PIC_Comentarios createManyAndReturn
   */
  export type T_PIC_ComentariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * The data used to create many T_PIC_Comentarios.
     */
    data: T_PIC_ComentariosCreateManyInput | T_PIC_ComentariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_PIC_Comentarios update
   */
  export type T_PIC_ComentariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * The data needed to update a T_PIC_Comentarios.
     */
    data: XOR<T_PIC_ComentariosUpdateInput, T_PIC_ComentariosUncheckedUpdateInput>
    /**
     * Choose, which T_PIC_Comentarios to update.
     */
    where: T_PIC_ComentariosWhereUniqueInput
  }

  /**
   * T_PIC_Comentarios updateMany
   */
  export type T_PIC_ComentariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_PIC_Comentarios.
     */
    data: XOR<T_PIC_ComentariosUpdateManyMutationInput, T_PIC_ComentariosUncheckedUpdateManyInput>
    /**
     * Filter which T_PIC_Comentarios to update
     */
    where?: T_PIC_ComentariosWhereInput
    /**
     * Limit how many T_PIC_Comentarios to update.
     */
    limit?: number
  }

  /**
   * T_PIC_Comentarios updateManyAndReturn
   */
  export type T_PIC_ComentariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * The data used to update T_PIC_Comentarios.
     */
    data: XOR<T_PIC_ComentariosUpdateManyMutationInput, T_PIC_ComentariosUncheckedUpdateManyInput>
    /**
     * Filter which T_PIC_Comentarios to update
     */
    where?: T_PIC_ComentariosWhereInput
    /**
     * Limit how many T_PIC_Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_PIC_Comentarios upsert
   */
  export type T_PIC_ComentariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * The filter to search for the T_PIC_Comentarios to update in case it exists.
     */
    where: T_PIC_ComentariosWhereUniqueInput
    /**
     * In case the T_PIC_Comentarios found by the `where` argument doesn't exist, create a new T_PIC_Comentarios with this data.
     */
    create: XOR<T_PIC_ComentariosCreateInput, T_PIC_ComentariosUncheckedCreateInput>
    /**
     * In case the T_PIC_Comentarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_PIC_ComentariosUpdateInput, T_PIC_ComentariosUncheckedUpdateInput>
  }

  /**
   * T_PIC_Comentarios delete
   */
  export type T_PIC_ComentariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
    /**
     * Filter which T_PIC_Comentarios to delete.
     */
    where: T_PIC_ComentariosWhereUniqueInput
  }

  /**
   * T_PIC_Comentarios deleteMany
   */
  export type T_PIC_ComentariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_PIC_Comentarios to delete
     */
    where?: T_PIC_ComentariosWhereInput
    /**
     * Limit how many T_PIC_Comentarios to delete.
     */
    limit?: number
  }

  /**
   * T_PIC_Comentarios.T_PostInteracaoCapa
   */
  export type T_PIC_Comentarios$T_PostInteracaoCapaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PostInteracaoCapa
     */
    select?: T_PostInteracaoCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PostInteracaoCapa
     */
    omit?: T_PostInteracaoCapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInteracaoCapaInclude<ExtArgs> | null
    where?: T_PostInteracaoCapaWhereInput
  }

  /**
   * T_PIC_Comentarios without action
   */
  export type T_PIC_ComentariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PIC_Comentarios
     */
    select?: T_PIC_ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_PIC_Comentarios
     */
    omit?: T_PIC_ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PIC_ComentariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const T_AccountScalarFieldEnum: {
    id_Account: 'id_Account',
    nome_Account: 'nome_Account',
    email_Account: 'email_Account',
    matricula_Account: 'matricula_Account',
    password_Account: 'password_Account',
    createdAt_Account: 'createdAt_Account',
    updatedAt_Account: 'updatedAt_Account'
  };

  export type T_AccountScalarFieldEnum = (typeof T_AccountScalarFieldEnum)[keyof typeof T_AccountScalarFieldEnum]


  export const T_PerfilScalarFieldEnum: {
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

  export type T_PerfilScalarFieldEnum = (typeof T_PerfilScalarFieldEnum)[keyof typeof T_PerfilScalarFieldEnum]


  export const T_CursoScalarFieldEnum: {
    id_Curso: 'id_Curso',
    nome_Curso: 'nome_Curso',
    maxSemestres_Curso: 'maxSemestres_Curso'
  };

  export type T_CursoScalarFieldEnum = (typeof T_CursoScalarFieldEnum)[keyof typeof T_CursoScalarFieldEnum]


  export const T_PostScalarFieldEnum: {
    id_Post: 'id_Post',
    title_Post: 'title_Post',
    content_Post: 'content_Post',
    image_Post: 'image_Post',
    TAG_Post: 'TAG_Post',
    createdAt_Post: 'createdAt_Post',
    updatedAt_Post: 'updatedAt_Post',
    id_Perfil_Post: 'id_Perfil_Post'
  };

  export type T_PostScalarFieldEnum = (typeof T_PostScalarFieldEnum)[keyof typeof T_PostScalarFieldEnum]


  export const T_PostInteracaoCapaScalarFieldEnum: {
    id_PIC: 'id_PIC',
    id_Post_PIC: 'id_Post_PIC',
    visualizacao_PIC: 'visualizacao_PIC'
  };

  export type T_PostInteracaoCapaScalarFieldEnum = (typeof T_PostInteracaoCapaScalarFieldEnum)[keyof typeof T_PostInteracaoCapaScalarFieldEnum]


  export const T_PIC_CurtidasScalarFieldEnum: {
    id_Curtida: 'id_Curtida',
    id_Perfil_Curtida: 'id_Perfil_Curtida',
    id_PIC_Curtida: 'id_PIC_Curtida'
  };

  export type T_PIC_CurtidasScalarFieldEnum = (typeof T_PIC_CurtidasScalarFieldEnum)[keyof typeof T_PIC_CurtidasScalarFieldEnum]


  export const T_PIC_ComentariosScalarFieldEnum: {
    id_Comentario: 'id_Comentario',
    id_Perfil_Comentario: 'id_Perfil_Comentario',
    conteudo_Comentario: 'conteudo_Comentario',
    id_PIC_Comentario: 'id_PIC_Comentario'
  };

  export type T_PIC_ComentariosScalarFieldEnum = (typeof T_PIC_ComentariosScalarFieldEnum)[keyof typeof T_PIC_ComentariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PerfilTipo'
   */
  export type EnumPerfilTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerfilTipo'>
    


  /**
   * Reference to a field of type 'PerfilTipo[]'
   */
  export type ListEnumPerfilTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerfilTipo[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type T_AccountWhereInput = {
    AND?: T_AccountWhereInput | T_AccountWhereInput[]
    OR?: T_AccountWhereInput[]
    NOT?: T_AccountWhereInput | T_AccountWhereInput[]
    id_Account?: IntFilter<"T_Account"> | number
    nome_Account?: StringFilter<"T_Account"> | string
    email_Account?: StringFilter<"T_Account"> | string
    matricula_Account?: StringFilter<"T_Account"> | string
    password_Account?: StringFilter<"T_Account"> | string
    createdAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    id_Perfil_Account?: T_PerfilListRelationFilter
  }

  export type T_AccountOrderByWithRelationInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
    id_Perfil_Account?: T_PerfilOrderByRelationAggregateInput
  }

  export type T_AccountWhereUniqueInput = Prisma.AtLeast<{
    id_Account?: number
    email_Account?: string
    matricula_Account?: string
    AND?: T_AccountWhereInput | T_AccountWhereInput[]
    OR?: T_AccountWhereInput[]
    NOT?: T_AccountWhereInput | T_AccountWhereInput[]
    nome_Account?: StringFilter<"T_Account"> | string
    password_Account?: StringFilter<"T_Account"> | string
    createdAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    id_Perfil_Account?: T_PerfilListRelationFilter
  }, "id_Account" | "email_Account" | "matricula_Account">

  export type T_AccountOrderByWithAggregationInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
    _count?: T_AccountCountOrderByAggregateInput
    _avg?: T_AccountAvgOrderByAggregateInput
    _max?: T_AccountMaxOrderByAggregateInput
    _min?: T_AccountMinOrderByAggregateInput
    _sum?: T_AccountSumOrderByAggregateInput
  }

  export type T_AccountScalarWhereWithAggregatesInput = {
    AND?: T_AccountScalarWhereWithAggregatesInput | T_AccountScalarWhereWithAggregatesInput[]
    OR?: T_AccountScalarWhereWithAggregatesInput[]
    NOT?: T_AccountScalarWhereWithAggregatesInput | T_AccountScalarWhereWithAggregatesInput[]
    id_Account?: IntWithAggregatesFilter<"T_Account"> | number
    nome_Account?: StringWithAggregatesFilter<"T_Account"> | string
    email_Account?: StringWithAggregatesFilter<"T_Account"> | string
    matricula_Account?: StringWithAggregatesFilter<"T_Account"> | string
    password_Account?: StringWithAggregatesFilter<"T_Account"> | string
    createdAt_Account?: DateTimeWithAggregatesFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeWithAggregatesFilter<"T_Account"> | Date | string
  }

  export type T_PerfilWhereInput = {
    AND?: T_PerfilWhereInput | T_PerfilWhereInput[]
    OR?: T_PerfilWhereInput[]
    NOT?: T_PerfilWhereInput | T_PerfilWhereInput[]
    id_Perfil?: IntFilter<"T_Perfil"> | number
    nome_Perfil?: StringFilter<"T_Perfil"> | string
    email_Perfil?: StringFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    tipo_Perfil?: EnumPerfilTipoFilter<"T_Perfil"> | $Enums.PerfilTipo
    semestre_Perfil?: IntNullableFilter<"T_Perfil"> | number | null
    createdAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    id_Curso_Perfil?: IntNullableFilter<"T_Perfil"> | number | null
    id_Account_Perfil?: IntFilter<"T_Perfil"> | number
    curso?: XOR<T_CursoNullableScalarRelationFilter, T_CursoWhereInput> | null
    account?: XOR<T_AccountScalarRelationFilter, T_AccountWhereInput>
    id_Post_Perfil?: T_PostListRelationFilter
    PostInteracaoCurtidas?: T_PIC_CurtidasListRelationFilter
    PostInteracaoComentarios?: T_PIC_ComentariosListRelationFilter
  }

  export type T_PerfilOrderByWithRelationInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    foto_Perfil?: SortOrderInput | SortOrder
    descricao_Perfil?: SortOrderInput | SortOrder
    tipo_Perfil?: SortOrder
    semestre_Perfil?: SortOrderInput | SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Curso_Perfil?: SortOrderInput | SortOrder
    id_Account_Perfil?: SortOrder
    curso?: T_CursoOrderByWithRelationInput
    account?: T_AccountOrderByWithRelationInput
    id_Post_Perfil?: T_PostOrderByRelationAggregateInput
    PostInteracaoCurtidas?: T_PIC_CurtidasOrderByRelationAggregateInput
    PostInteracaoComentarios?: T_PIC_ComentariosOrderByRelationAggregateInput
  }

  export type T_PerfilWhereUniqueInput = Prisma.AtLeast<{
    id_Perfil?: number
    email_Perfil?: string
    AND?: T_PerfilWhereInput | T_PerfilWhereInput[]
    OR?: T_PerfilWhereInput[]
    NOT?: T_PerfilWhereInput | T_PerfilWhereInput[]
    nome_Perfil?: StringFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    tipo_Perfil?: EnumPerfilTipoFilter<"T_Perfil"> | $Enums.PerfilTipo
    semestre_Perfil?: IntNullableFilter<"T_Perfil"> | number | null
    createdAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    id_Curso_Perfil?: IntNullableFilter<"T_Perfil"> | number | null
    id_Account_Perfil?: IntFilter<"T_Perfil"> | number
    curso?: XOR<T_CursoNullableScalarRelationFilter, T_CursoWhereInput> | null
    account?: XOR<T_AccountScalarRelationFilter, T_AccountWhereInput>
    id_Post_Perfil?: T_PostListRelationFilter
    PostInteracaoCurtidas?: T_PIC_CurtidasListRelationFilter
    PostInteracaoComentarios?: T_PIC_ComentariosListRelationFilter
  }, "id_Perfil" | "email_Perfil">

  export type T_PerfilOrderByWithAggregationInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    foto_Perfil?: SortOrderInput | SortOrder
    descricao_Perfil?: SortOrderInput | SortOrder
    tipo_Perfil?: SortOrder
    semestre_Perfil?: SortOrderInput | SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Curso_Perfil?: SortOrderInput | SortOrder
    id_Account_Perfil?: SortOrder
    _count?: T_PerfilCountOrderByAggregateInput
    _avg?: T_PerfilAvgOrderByAggregateInput
    _max?: T_PerfilMaxOrderByAggregateInput
    _min?: T_PerfilMinOrderByAggregateInput
    _sum?: T_PerfilSumOrderByAggregateInput
  }

  export type T_PerfilScalarWhereWithAggregatesInput = {
    AND?: T_PerfilScalarWhereWithAggregatesInput | T_PerfilScalarWhereWithAggregatesInput[]
    OR?: T_PerfilScalarWhereWithAggregatesInput[]
    NOT?: T_PerfilScalarWhereWithAggregatesInput | T_PerfilScalarWhereWithAggregatesInput[]
    id_Perfil?: IntWithAggregatesFilter<"T_Perfil"> | number
    nome_Perfil?: StringWithAggregatesFilter<"T_Perfil"> | string
    email_Perfil?: StringWithAggregatesFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableWithAggregatesFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableWithAggregatesFilter<"T_Perfil"> | string | null
    tipo_Perfil?: EnumPerfilTipoWithAggregatesFilter<"T_Perfil"> | $Enums.PerfilTipo
    semestre_Perfil?: IntNullableWithAggregatesFilter<"T_Perfil"> | number | null
    createdAt_Perfil?: DateTimeWithAggregatesFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeWithAggregatesFilter<"T_Perfil"> | Date | string
    id_Curso_Perfil?: IntNullableWithAggregatesFilter<"T_Perfil"> | number | null
    id_Account_Perfil?: IntWithAggregatesFilter<"T_Perfil"> | number
  }

  export type T_CursoWhereInput = {
    AND?: T_CursoWhereInput | T_CursoWhereInput[]
    OR?: T_CursoWhereInput[]
    NOT?: T_CursoWhereInput | T_CursoWhereInput[]
    id_Curso?: IntFilter<"T_Curso"> | number
    nome_Curso?: StringFilter<"T_Curso"> | string
    maxSemestres_Curso?: IntFilter<"T_Curso"> | number
    perfis?: T_PerfilListRelationFilter
  }

  export type T_CursoOrderByWithRelationInput = {
    id_Curso?: SortOrder
    nome_Curso?: SortOrder
    maxSemestres_Curso?: SortOrder
    perfis?: T_PerfilOrderByRelationAggregateInput
  }

  export type T_CursoWhereUniqueInput = Prisma.AtLeast<{
    id_Curso?: number
    nome_Curso?: string
    AND?: T_CursoWhereInput | T_CursoWhereInput[]
    OR?: T_CursoWhereInput[]
    NOT?: T_CursoWhereInput | T_CursoWhereInput[]
    maxSemestres_Curso?: IntFilter<"T_Curso"> | number
    perfis?: T_PerfilListRelationFilter
  }, "id_Curso" | "nome_Curso">

  export type T_CursoOrderByWithAggregationInput = {
    id_Curso?: SortOrder
    nome_Curso?: SortOrder
    maxSemestres_Curso?: SortOrder
    _count?: T_CursoCountOrderByAggregateInput
    _avg?: T_CursoAvgOrderByAggregateInput
    _max?: T_CursoMaxOrderByAggregateInput
    _min?: T_CursoMinOrderByAggregateInput
    _sum?: T_CursoSumOrderByAggregateInput
  }

  export type T_CursoScalarWhereWithAggregatesInput = {
    AND?: T_CursoScalarWhereWithAggregatesInput | T_CursoScalarWhereWithAggregatesInput[]
    OR?: T_CursoScalarWhereWithAggregatesInput[]
    NOT?: T_CursoScalarWhereWithAggregatesInput | T_CursoScalarWhereWithAggregatesInput[]
    id_Curso?: IntWithAggregatesFilter<"T_Curso"> | number
    nome_Curso?: StringWithAggregatesFilter<"T_Curso"> | string
    maxSemestres_Curso?: IntWithAggregatesFilter<"T_Curso"> | number
  }

  export type T_PostWhereInput = {
    AND?: T_PostWhereInput | T_PostWhereInput[]
    OR?: T_PostWhereInput[]
    NOT?: T_PostWhereInput | T_PostWhereInput[]
    id_Post?: IntFilter<"T_Post"> | number
    title_Post?: StringNullableFilter<"T_Post"> | string | null
    content_Post?: StringNullableFilter<"T_Post"> | string | null
    image_Post?: StringNullableFilter<"T_Post"> | string | null
    TAG_Post?: StringNullableFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntFilter<"T_Post"> | number
    T_Perfil?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
    T_PostInteracaoCapa?: T_PostInteracaoCapaListRelationFilter
  }

  export type T_PostOrderByWithRelationInput = {
    id_Post?: SortOrder
    title_Post?: SortOrderInput | SortOrder
    content_Post?: SortOrderInput | SortOrder
    image_Post?: SortOrderInput | SortOrder
    TAG_Post?: SortOrderInput | SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
    T_Perfil?: T_PerfilOrderByWithRelationInput
    T_PostInteracaoCapa?: T_PostInteracaoCapaOrderByRelationAggregateInput
  }

  export type T_PostWhereUniqueInput = Prisma.AtLeast<{
    id_Post?: number
    AND?: T_PostWhereInput | T_PostWhereInput[]
    OR?: T_PostWhereInput[]
    NOT?: T_PostWhereInput | T_PostWhereInput[]
    title_Post?: StringNullableFilter<"T_Post"> | string | null
    content_Post?: StringNullableFilter<"T_Post"> | string | null
    image_Post?: StringNullableFilter<"T_Post"> | string | null
    TAG_Post?: StringNullableFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntFilter<"T_Post"> | number
    T_Perfil?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
    T_PostInteracaoCapa?: T_PostInteracaoCapaListRelationFilter
  }, "id_Post">

  export type T_PostOrderByWithAggregationInput = {
    id_Post?: SortOrder
    title_Post?: SortOrderInput | SortOrder
    content_Post?: SortOrderInput | SortOrder
    image_Post?: SortOrderInput | SortOrder
    TAG_Post?: SortOrderInput | SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
    _count?: T_PostCountOrderByAggregateInput
    _avg?: T_PostAvgOrderByAggregateInput
    _max?: T_PostMaxOrderByAggregateInput
    _min?: T_PostMinOrderByAggregateInput
    _sum?: T_PostSumOrderByAggregateInput
  }

  export type T_PostScalarWhereWithAggregatesInput = {
    AND?: T_PostScalarWhereWithAggregatesInput | T_PostScalarWhereWithAggregatesInput[]
    OR?: T_PostScalarWhereWithAggregatesInput[]
    NOT?: T_PostScalarWhereWithAggregatesInput | T_PostScalarWhereWithAggregatesInput[]
    id_Post?: IntWithAggregatesFilter<"T_Post"> | number
    title_Post?: StringNullableWithAggregatesFilter<"T_Post"> | string | null
    content_Post?: StringNullableWithAggregatesFilter<"T_Post"> | string | null
    image_Post?: StringNullableWithAggregatesFilter<"T_Post"> | string | null
    TAG_Post?: StringNullableWithAggregatesFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeWithAggregatesFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeWithAggregatesFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntWithAggregatesFilter<"T_Post"> | number
  }

  export type T_PostInteracaoCapaWhereInput = {
    AND?: T_PostInteracaoCapaWhereInput | T_PostInteracaoCapaWhereInput[]
    OR?: T_PostInteracaoCapaWhereInput[]
    NOT?: T_PostInteracaoCapaWhereInput | T_PostInteracaoCapaWhereInput[]
    id_PIC?: IntFilter<"T_PostInteracaoCapa"> | number
    id_Post_PIC?: IntFilter<"T_PostInteracaoCapa"> | number
    visualizacao_PIC?: IntNullableListFilter<"T_PostInteracaoCapa">
    curtidas_PIC?: T_PIC_CurtidasListRelationFilter
    comentarios_PIC?: T_PIC_ComentariosListRelationFilter
    T_Post?: XOR<T_PostScalarRelationFilter, T_PostWhereInput>
  }

  export type T_PostInteracaoCapaOrderByWithRelationInput = {
    id_PIC?: SortOrder
    id_Post_PIC?: SortOrder
    visualizacao_PIC?: SortOrder
    curtidas_PIC?: T_PIC_CurtidasOrderByRelationAggregateInput
    comentarios_PIC?: T_PIC_ComentariosOrderByRelationAggregateInput
    T_Post?: T_PostOrderByWithRelationInput
  }

  export type T_PostInteracaoCapaWhereUniqueInput = Prisma.AtLeast<{
    id_PIC?: number
    AND?: T_PostInteracaoCapaWhereInput | T_PostInteracaoCapaWhereInput[]
    OR?: T_PostInteracaoCapaWhereInput[]
    NOT?: T_PostInteracaoCapaWhereInput | T_PostInteracaoCapaWhereInput[]
    id_Post_PIC?: IntFilter<"T_PostInteracaoCapa"> | number
    visualizacao_PIC?: IntNullableListFilter<"T_PostInteracaoCapa">
    curtidas_PIC?: T_PIC_CurtidasListRelationFilter
    comentarios_PIC?: T_PIC_ComentariosListRelationFilter
    T_Post?: XOR<T_PostScalarRelationFilter, T_PostWhereInput>
  }, "id_PIC">

  export type T_PostInteracaoCapaOrderByWithAggregationInput = {
    id_PIC?: SortOrder
    id_Post_PIC?: SortOrder
    visualizacao_PIC?: SortOrder
    _count?: T_PostInteracaoCapaCountOrderByAggregateInput
    _avg?: T_PostInteracaoCapaAvgOrderByAggregateInput
    _max?: T_PostInteracaoCapaMaxOrderByAggregateInput
    _min?: T_PostInteracaoCapaMinOrderByAggregateInput
    _sum?: T_PostInteracaoCapaSumOrderByAggregateInput
  }

  export type T_PostInteracaoCapaScalarWhereWithAggregatesInput = {
    AND?: T_PostInteracaoCapaScalarWhereWithAggregatesInput | T_PostInteracaoCapaScalarWhereWithAggregatesInput[]
    OR?: T_PostInteracaoCapaScalarWhereWithAggregatesInput[]
    NOT?: T_PostInteracaoCapaScalarWhereWithAggregatesInput | T_PostInteracaoCapaScalarWhereWithAggregatesInput[]
    id_PIC?: IntWithAggregatesFilter<"T_PostInteracaoCapa"> | number
    id_Post_PIC?: IntWithAggregatesFilter<"T_PostInteracaoCapa"> | number
    visualizacao_PIC?: IntNullableListFilter<"T_PostInteracaoCapa">
  }

  export type T_PIC_CurtidasWhereInput = {
    AND?: T_PIC_CurtidasWhereInput | T_PIC_CurtidasWhereInput[]
    OR?: T_PIC_CurtidasWhereInput[]
    NOT?: T_PIC_CurtidasWhereInput | T_PIC_CurtidasWhereInput[]
    id_Curtida?: IntFilter<"T_PIC_Curtidas"> | number
    id_Perfil_Curtida?: IntFilter<"T_PIC_Curtidas"> | number
    id_PIC_Curtida?: IntNullableFilter<"T_PIC_Curtidas"> | number | null
    T_PostInteracaoCapa?: XOR<T_PostInteracaoCapaNullableScalarRelationFilter, T_PostInteracaoCapaWhereInput> | null
    T_Perfil?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
  }

  export type T_PIC_CurtidasOrderByWithRelationInput = {
    id_Curtida?: SortOrder
    id_Perfil_Curtida?: SortOrder
    id_PIC_Curtida?: SortOrderInput | SortOrder
    T_PostInteracaoCapa?: T_PostInteracaoCapaOrderByWithRelationInput
    T_Perfil?: T_PerfilOrderByWithRelationInput
  }

  export type T_PIC_CurtidasWhereUniqueInput = Prisma.AtLeast<{
    id_Curtida?: number
    AND?: T_PIC_CurtidasWhereInput | T_PIC_CurtidasWhereInput[]
    OR?: T_PIC_CurtidasWhereInput[]
    NOT?: T_PIC_CurtidasWhereInput | T_PIC_CurtidasWhereInput[]
    id_Perfil_Curtida?: IntFilter<"T_PIC_Curtidas"> | number
    id_PIC_Curtida?: IntNullableFilter<"T_PIC_Curtidas"> | number | null
    T_PostInteracaoCapa?: XOR<T_PostInteracaoCapaNullableScalarRelationFilter, T_PostInteracaoCapaWhereInput> | null
    T_Perfil?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
  }, "id_Curtida">

  export type T_PIC_CurtidasOrderByWithAggregationInput = {
    id_Curtida?: SortOrder
    id_Perfil_Curtida?: SortOrder
    id_PIC_Curtida?: SortOrderInput | SortOrder
    _count?: T_PIC_CurtidasCountOrderByAggregateInput
    _avg?: T_PIC_CurtidasAvgOrderByAggregateInput
    _max?: T_PIC_CurtidasMaxOrderByAggregateInput
    _min?: T_PIC_CurtidasMinOrderByAggregateInput
    _sum?: T_PIC_CurtidasSumOrderByAggregateInput
  }

  export type T_PIC_CurtidasScalarWhereWithAggregatesInput = {
    AND?: T_PIC_CurtidasScalarWhereWithAggregatesInput | T_PIC_CurtidasScalarWhereWithAggregatesInput[]
    OR?: T_PIC_CurtidasScalarWhereWithAggregatesInput[]
    NOT?: T_PIC_CurtidasScalarWhereWithAggregatesInput | T_PIC_CurtidasScalarWhereWithAggregatesInput[]
    id_Curtida?: IntWithAggregatesFilter<"T_PIC_Curtidas"> | number
    id_Perfil_Curtida?: IntWithAggregatesFilter<"T_PIC_Curtidas"> | number
    id_PIC_Curtida?: IntNullableWithAggregatesFilter<"T_PIC_Curtidas"> | number | null
  }

  export type T_PIC_ComentariosWhereInput = {
    AND?: T_PIC_ComentariosWhereInput | T_PIC_ComentariosWhereInput[]
    OR?: T_PIC_ComentariosWhereInput[]
    NOT?: T_PIC_ComentariosWhereInput | T_PIC_ComentariosWhereInput[]
    id_Comentario?: IntFilter<"T_PIC_Comentarios"> | number
    id_Perfil_Comentario?: IntFilter<"T_PIC_Comentarios"> | number
    conteudo_Comentario?: StringFilter<"T_PIC_Comentarios"> | string
    id_PIC_Comentario?: IntNullableFilter<"T_PIC_Comentarios"> | number | null
    T_PostInteracaoCapa?: XOR<T_PostInteracaoCapaNullableScalarRelationFilter, T_PostInteracaoCapaWhereInput> | null
    T_Perfil?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
  }

  export type T_PIC_ComentariosOrderByWithRelationInput = {
    id_Comentario?: SortOrder
    id_Perfil_Comentario?: SortOrder
    conteudo_Comentario?: SortOrder
    id_PIC_Comentario?: SortOrderInput | SortOrder
    T_PostInteracaoCapa?: T_PostInteracaoCapaOrderByWithRelationInput
    T_Perfil?: T_PerfilOrderByWithRelationInput
  }

  export type T_PIC_ComentariosWhereUniqueInput = Prisma.AtLeast<{
    id_Comentario?: number
    AND?: T_PIC_ComentariosWhereInput | T_PIC_ComentariosWhereInput[]
    OR?: T_PIC_ComentariosWhereInput[]
    NOT?: T_PIC_ComentariosWhereInput | T_PIC_ComentariosWhereInput[]
    id_Perfil_Comentario?: IntFilter<"T_PIC_Comentarios"> | number
    conteudo_Comentario?: StringFilter<"T_PIC_Comentarios"> | string
    id_PIC_Comentario?: IntNullableFilter<"T_PIC_Comentarios"> | number | null
    T_PostInteracaoCapa?: XOR<T_PostInteracaoCapaNullableScalarRelationFilter, T_PostInteracaoCapaWhereInput> | null
    T_Perfil?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
  }, "id_Comentario">

  export type T_PIC_ComentariosOrderByWithAggregationInput = {
    id_Comentario?: SortOrder
    id_Perfil_Comentario?: SortOrder
    conteudo_Comentario?: SortOrder
    id_PIC_Comentario?: SortOrderInput | SortOrder
    _count?: T_PIC_ComentariosCountOrderByAggregateInput
    _avg?: T_PIC_ComentariosAvgOrderByAggregateInput
    _max?: T_PIC_ComentariosMaxOrderByAggregateInput
    _min?: T_PIC_ComentariosMinOrderByAggregateInput
    _sum?: T_PIC_ComentariosSumOrderByAggregateInput
  }

  export type T_PIC_ComentariosScalarWhereWithAggregatesInput = {
    AND?: T_PIC_ComentariosScalarWhereWithAggregatesInput | T_PIC_ComentariosScalarWhereWithAggregatesInput[]
    OR?: T_PIC_ComentariosScalarWhereWithAggregatesInput[]
    NOT?: T_PIC_ComentariosScalarWhereWithAggregatesInput | T_PIC_ComentariosScalarWhereWithAggregatesInput[]
    id_Comentario?: IntWithAggregatesFilter<"T_PIC_Comentarios"> | number
    id_Perfil_Comentario?: IntWithAggregatesFilter<"T_PIC_Comentarios"> | number
    conteudo_Comentario?: StringWithAggregatesFilter<"T_PIC_Comentarios"> | string
    id_PIC_Comentario?: IntNullableWithAggregatesFilter<"T_PIC_Comentarios"> | number | null
  }

  export type T_AccountCreateInput = {
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
    id_Perfil_Account?: T_PerfilCreateNestedManyWithoutAccountInput
  }

  export type T_AccountUncheckedCreateInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
    id_Perfil_Account?: T_PerfilUncheckedCreateNestedManyWithoutAccountInput
  }

  export type T_AccountUpdateInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Account?: T_PerfilUpdateManyWithoutAccountNestedInput
  }

  export type T_AccountUncheckedUpdateInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Account?: T_PerfilUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type T_AccountCreateManyInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountUpdateManyMutationInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_AccountUncheckedUpdateManyInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PerfilCreateInput = {
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    curso?: T_CursoCreateNestedOneWithoutPerfisInput
    account: T_AccountCreateNestedOneWithoutId_Perfil_AccountInput
    id_Post_Perfil?: T_PostCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilUncheckedCreateInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Curso_Perfil?: number | null
    id_Account_Perfil: number
    id_Post_Perfil?: T_PostUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilUpdateInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: T_CursoUpdateOneWithoutPerfisNestedInput
    account?: T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput
    id_Post_Perfil?: T_PostUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Curso_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
    id_Post_Perfil?: T_PostUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilCreateManyInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Curso_Perfil?: number | null
    id_Account_Perfil: number
  }

  export type T_PerfilUpdateManyMutationInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PerfilUncheckedUpdateManyInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Curso_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
  }

  export type T_CursoCreateInput = {
    nome_Curso: string
    maxSemestres_Curso: number
    perfis?: T_PerfilCreateNestedManyWithoutCursoInput
  }

  export type T_CursoUncheckedCreateInput = {
    id_Curso?: number
    nome_Curso: string
    maxSemestres_Curso: number
    perfis?: T_PerfilUncheckedCreateNestedManyWithoutCursoInput
  }

  export type T_CursoUpdateInput = {
    nome_Curso?: StringFieldUpdateOperationsInput | string
    maxSemestres_Curso?: IntFieldUpdateOperationsInput | number
    perfis?: T_PerfilUpdateManyWithoutCursoNestedInput
  }

  export type T_CursoUncheckedUpdateInput = {
    id_Curso?: IntFieldUpdateOperationsInput | number
    nome_Curso?: StringFieldUpdateOperationsInput | string
    maxSemestres_Curso?: IntFieldUpdateOperationsInput | number
    perfis?: T_PerfilUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type T_CursoCreateManyInput = {
    id_Curso?: number
    nome_Curso: string
    maxSemestres_Curso: number
  }

  export type T_CursoUpdateManyMutationInput = {
    nome_Curso?: StringFieldUpdateOperationsInput | string
    maxSemestres_Curso?: IntFieldUpdateOperationsInput | number
  }

  export type T_CursoUncheckedUpdateManyInput = {
    id_Curso?: IntFieldUpdateOperationsInput | number
    nome_Curso?: StringFieldUpdateOperationsInput | string
    maxSemestres_Curso?: IntFieldUpdateOperationsInput | number
  }

  export type T_PostCreateInput = {
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    T_Perfil: T_PerfilCreateNestedOneWithoutId_Post_PerfilInput
    T_PostInteracaoCapa?: T_PostInteracaoCapaCreateNestedManyWithoutT_PostInput
  }

  export type T_PostUncheckedCreateInput = {
    id_Post?: number
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    id_Perfil_Post: number
    T_PostInteracaoCapa?: T_PostInteracaoCapaUncheckedCreateNestedManyWithoutT_PostInput
  }

  export type T_PostUpdateInput = {
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    T_Perfil?: T_PerfilUpdateOneRequiredWithoutId_Post_PerfilNestedInput
    T_PostInteracaoCapa?: T_PostInteracaoCapaUpdateManyWithoutT_PostNestedInput
  }

  export type T_PostUncheckedUpdateInput = {
    id_Post?: IntFieldUpdateOperationsInput | number
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Post?: IntFieldUpdateOperationsInput | number
    T_PostInteracaoCapa?: T_PostInteracaoCapaUncheckedUpdateManyWithoutT_PostNestedInput
  }

  export type T_PostCreateManyInput = {
    id_Post?: number
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    id_Perfil_Post: number
  }

  export type T_PostUpdateManyMutationInput = {
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PostUncheckedUpdateManyInput = {
    id_Post?: IntFieldUpdateOperationsInput | number
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Post?: IntFieldUpdateOperationsInput | number
  }

  export type T_PostInteracaoCapaCreateInput = {
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasCreateNestedManyWithoutT_PostInteracaoCapaInput
    comentarios_PIC?: T_PIC_ComentariosCreateNestedManyWithoutT_PostInteracaoCapaInput
    T_Post: T_PostCreateNestedOneWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaUncheckedCreateInput = {
    id_PIC?: number
    id_Post_PIC: number
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput
    comentarios_PIC?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaUpdateInput = {
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUpdateManyWithoutT_PostInteracaoCapaNestedInput
    comentarios_PIC?: T_PIC_ComentariosUpdateManyWithoutT_PostInteracaoCapaNestedInput
    T_Post?: T_PostUpdateOneRequiredWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PostInteracaoCapaUncheckedUpdateInput = {
    id_PIC?: IntFieldUpdateOperationsInput | number
    id_Post_PIC?: IntFieldUpdateOperationsInput | number
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput
    comentarios_PIC?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PostInteracaoCapaCreateManyInput = {
    id_PIC?: number
    id_Post_PIC: number
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
  }

  export type T_PostInteracaoCapaUpdateManyMutationInput = {
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
  }

  export type T_PostInteracaoCapaUncheckedUpdateManyInput = {
    id_PIC?: IntFieldUpdateOperationsInput | number
    id_Post_PIC?: IntFieldUpdateOperationsInput | number
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
  }

  export type T_PIC_CurtidasCreateInput = {
    T_PostInteracaoCapa?: T_PostInteracaoCapaCreateNestedOneWithoutCurtidas_PICInput
    T_Perfil: T_PerfilCreateNestedOneWithoutPostInteracaoCurtidasInput
  }

  export type T_PIC_CurtidasUncheckedCreateInput = {
    id_Curtida?: number
    id_Perfil_Curtida: number
    id_PIC_Curtida?: number | null
  }

  export type T_PIC_CurtidasUpdateInput = {
    T_PostInteracaoCapa?: T_PostInteracaoCapaUpdateOneWithoutCurtidas_PICNestedInput
    T_Perfil?: T_PerfilUpdateOneRequiredWithoutPostInteracaoCurtidasNestedInput
  }

  export type T_PIC_CurtidasUncheckedUpdateInput = {
    id_Curtida?: IntFieldUpdateOperationsInput | number
    id_Perfil_Curtida?: IntFieldUpdateOperationsInput | number
    id_PIC_Curtida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PIC_CurtidasCreateManyInput = {
    id_Curtida?: number
    id_Perfil_Curtida: number
    id_PIC_Curtida?: number | null
  }

  export type T_PIC_CurtidasUpdateManyMutationInput = {

  }

  export type T_PIC_CurtidasUncheckedUpdateManyInput = {
    id_Curtida?: IntFieldUpdateOperationsInput | number
    id_Perfil_Curtida?: IntFieldUpdateOperationsInput | number
    id_PIC_Curtida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PIC_ComentariosCreateInput = {
    conteudo_Comentario: string
    T_PostInteracaoCapa?: T_PostInteracaoCapaCreateNestedOneWithoutComentarios_PICInput
    T_Perfil: T_PerfilCreateNestedOneWithoutPostInteracaoComentariosInput
  }

  export type T_PIC_ComentariosUncheckedCreateInput = {
    id_Comentario?: number
    id_Perfil_Comentario: number
    conteudo_Comentario: string
    id_PIC_Comentario?: number | null
  }

  export type T_PIC_ComentariosUpdateInput = {
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
    T_PostInteracaoCapa?: T_PostInteracaoCapaUpdateOneWithoutComentarios_PICNestedInput
    T_Perfil?: T_PerfilUpdateOneRequiredWithoutPostInteracaoComentariosNestedInput
  }

  export type T_PIC_ComentariosUncheckedUpdateInput = {
    id_Comentario?: IntFieldUpdateOperationsInput | number
    id_Perfil_Comentario?: IntFieldUpdateOperationsInput | number
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
    id_PIC_Comentario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PIC_ComentariosCreateManyInput = {
    id_Comentario?: number
    id_Perfil_Comentario: number
    conteudo_Comentario: string
    id_PIC_Comentario?: number | null
  }

  export type T_PIC_ComentariosUpdateManyMutationInput = {
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
  }

  export type T_PIC_ComentariosUncheckedUpdateManyInput = {
    id_Comentario?: IntFieldUpdateOperationsInput | number
    id_Perfil_Comentario?: IntFieldUpdateOperationsInput | number
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
    id_PIC_Comentario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type T_PerfilListRelationFilter = {
    every?: T_PerfilWhereInput
    some?: T_PerfilWhereInput
    none?: T_PerfilWhereInput
  }

  export type T_PerfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type T_AccountCountOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountAvgOrderByAggregateInput = {
    id_Account?: SortOrder
  }

  export type T_AccountMaxOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountMinOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountSumOrderByAggregateInput = {
    id_Account?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPerfilTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilTipo | EnumPerfilTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilTipoFilter<$PrismaModel> | $Enums.PerfilTipo
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type T_CursoNullableScalarRelationFilter = {
    is?: T_CursoWhereInput | null
    isNot?: T_CursoWhereInput | null
  }

  export type T_AccountScalarRelationFilter = {
    is?: T_AccountWhereInput
    isNot?: T_AccountWhereInput
  }

  export type T_PostListRelationFilter = {
    every?: T_PostWhereInput
    some?: T_PostWhereInput
    none?: T_PostWhereInput
  }

  export type T_PIC_CurtidasListRelationFilter = {
    every?: T_PIC_CurtidasWhereInput
    some?: T_PIC_CurtidasWhereInput
    none?: T_PIC_CurtidasWhereInput
  }

  export type T_PIC_ComentariosListRelationFilter = {
    every?: T_PIC_ComentariosWhereInput
    some?: T_PIC_ComentariosWhereInput
    none?: T_PIC_ComentariosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type T_PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type T_PIC_CurtidasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type T_PIC_ComentariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type T_PerfilCountOrderByAggregateInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    foto_Perfil?: SortOrder
    descricao_Perfil?: SortOrder
    tipo_Perfil?: SortOrder
    semestre_Perfil?: SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Curso_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilAvgOrderByAggregateInput = {
    id_Perfil?: SortOrder
    semestre_Perfil?: SortOrder
    id_Curso_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilMaxOrderByAggregateInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    foto_Perfil?: SortOrder
    descricao_Perfil?: SortOrder
    tipo_Perfil?: SortOrder
    semestre_Perfil?: SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Curso_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilMinOrderByAggregateInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    foto_Perfil?: SortOrder
    descricao_Perfil?: SortOrder
    tipo_Perfil?: SortOrder
    semestre_Perfil?: SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Curso_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilSumOrderByAggregateInput = {
    id_Perfil?: SortOrder
    semestre_Perfil?: SortOrder
    id_Curso_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPerfilTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilTipo | EnumPerfilTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilTipoWithAggregatesFilter<$PrismaModel> | $Enums.PerfilTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilTipoFilter<$PrismaModel>
    _max?: NestedEnumPerfilTipoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type T_CursoCountOrderByAggregateInput = {
    id_Curso?: SortOrder
    nome_Curso?: SortOrder
    maxSemestres_Curso?: SortOrder
  }

  export type T_CursoAvgOrderByAggregateInput = {
    id_Curso?: SortOrder
    maxSemestres_Curso?: SortOrder
  }

  export type T_CursoMaxOrderByAggregateInput = {
    id_Curso?: SortOrder
    nome_Curso?: SortOrder
    maxSemestres_Curso?: SortOrder
  }

  export type T_CursoMinOrderByAggregateInput = {
    id_Curso?: SortOrder
    nome_Curso?: SortOrder
    maxSemestres_Curso?: SortOrder
  }

  export type T_CursoSumOrderByAggregateInput = {
    id_Curso?: SortOrder
    maxSemestres_Curso?: SortOrder
  }

  export type T_PerfilScalarRelationFilter = {
    is?: T_PerfilWhereInput
    isNot?: T_PerfilWhereInput
  }

  export type T_PostInteracaoCapaListRelationFilter = {
    every?: T_PostInteracaoCapaWhereInput
    some?: T_PostInteracaoCapaWhereInput
    none?: T_PostInteracaoCapaWhereInput
  }

  export type T_PostInteracaoCapaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type T_PostCountOrderByAggregateInput = {
    id_Post?: SortOrder
    title_Post?: SortOrder
    content_Post?: SortOrder
    image_Post?: SortOrder
    TAG_Post?: SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type T_PostAvgOrderByAggregateInput = {
    id_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type T_PostMaxOrderByAggregateInput = {
    id_Post?: SortOrder
    title_Post?: SortOrder
    content_Post?: SortOrder
    image_Post?: SortOrder
    TAG_Post?: SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type T_PostMinOrderByAggregateInput = {
    id_Post?: SortOrder
    title_Post?: SortOrder
    content_Post?: SortOrder
    image_Post?: SortOrder
    TAG_Post?: SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type T_PostSumOrderByAggregateInput = {
    id_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type T_PostScalarRelationFilter = {
    is?: T_PostWhereInput
    isNot?: T_PostWhereInput
  }

  export type T_PostInteracaoCapaCountOrderByAggregateInput = {
    id_PIC?: SortOrder
    id_Post_PIC?: SortOrder
    visualizacao_PIC?: SortOrder
  }

  export type T_PostInteracaoCapaAvgOrderByAggregateInput = {
    id_PIC?: SortOrder
    id_Post_PIC?: SortOrder
    visualizacao_PIC?: SortOrder
  }

  export type T_PostInteracaoCapaMaxOrderByAggregateInput = {
    id_PIC?: SortOrder
    id_Post_PIC?: SortOrder
  }

  export type T_PostInteracaoCapaMinOrderByAggregateInput = {
    id_PIC?: SortOrder
    id_Post_PIC?: SortOrder
  }

  export type T_PostInteracaoCapaSumOrderByAggregateInput = {
    id_PIC?: SortOrder
    id_Post_PIC?: SortOrder
    visualizacao_PIC?: SortOrder
  }

  export type T_PostInteracaoCapaNullableScalarRelationFilter = {
    is?: T_PostInteracaoCapaWhereInput | null
    isNot?: T_PostInteracaoCapaWhereInput | null
  }

  export type T_PIC_CurtidasCountOrderByAggregateInput = {
    id_Curtida?: SortOrder
    id_Perfil_Curtida?: SortOrder
    id_PIC_Curtida?: SortOrder
  }

  export type T_PIC_CurtidasAvgOrderByAggregateInput = {
    id_Curtida?: SortOrder
    id_Perfil_Curtida?: SortOrder
    id_PIC_Curtida?: SortOrder
  }

  export type T_PIC_CurtidasMaxOrderByAggregateInput = {
    id_Curtida?: SortOrder
    id_Perfil_Curtida?: SortOrder
    id_PIC_Curtida?: SortOrder
  }

  export type T_PIC_CurtidasMinOrderByAggregateInput = {
    id_Curtida?: SortOrder
    id_Perfil_Curtida?: SortOrder
    id_PIC_Curtida?: SortOrder
  }

  export type T_PIC_CurtidasSumOrderByAggregateInput = {
    id_Curtida?: SortOrder
    id_Perfil_Curtida?: SortOrder
    id_PIC_Curtida?: SortOrder
  }

  export type T_PIC_ComentariosCountOrderByAggregateInput = {
    id_Comentario?: SortOrder
    id_Perfil_Comentario?: SortOrder
    conteudo_Comentario?: SortOrder
    id_PIC_Comentario?: SortOrder
  }

  export type T_PIC_ComentariosAvgOrderByAggregateInput = {
    id_Comentario?: SortOrder
    id_Perfil_Comentario?: SortOrder
    id_PIC_Comentario?: SortOrder
  }

  export type T_PIC_ComentariosMaxOrderByAggregateInput = {
    id_Comentario?: SortOrder
    id_Perfil_Comentario?: SortOrder
    conteudo_Comentario?: SortOrder
    id_PIC_Comentario?: SortOrder
  }

  export type T_PIC_ComentariosMinOrderByAggregateInput = {
    id_Comentario?: SortOrder
    id_Perfil_Comentario?: SortOrder
    conteudo_Comentario?: SortOrder
    id_PIC_Comentario?: SortOrder
  }

  export type T_PIC_ComentariosSumOrderByAggregateInput = {
    id_Comentario?: SortOrder
    id_Perfil_Comentario?: SortOrder
    id_PIC_Comentario?: SortOrder
  }

  export type T_PerfilCreateNestedManyWithoutAccountInput = {
    create?: XOR<T_PerfilCreateWithoutAccountInput, T_PerfilUncheckedCreateWithoutAccountInput> | T_PerfilCreateWithoutAccountInput[] | T_PerfilUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutAccountInput | T_PerfilCreateOrConnectWithoutAccountInput[]
    createMany?: T_PerfilCreateManyAccountInputEnvelope
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
  }

  export type T_PerfilUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<T_PerfilCreateWithoutAccountInput, T_PerfilUncheckedCreateWithoutAccountInput> | T_PerfilCreateWithoutAccountInput[] | T_PerfilUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutAccountInput | T_PerfilCreateOrConnectWithoutAccountInput[]
    createMany?: T_PerfilCreateManyAccountInputEnvelope
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type T_PerfilUpdateManyWithoutAccountNestedInput = {
    create?: XOR<T_PerfilCreateWithoutAccountInput, T_PerfilUncheckedCreateWithoutAccountInput> | T_PerfilCreateWithoutAccountInput[] | T_PerfilUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutAccountInput | T_PerfilCreateOrConnectWithoutAccountInput[]
    upsert?: T_PerfilUpsertWithWhereUniqueWithoutAccountInput | T_PerfilUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: T_PerfilCreateManyAccountInputEnvelope
    set?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    disconnect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    delete?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    update?: T_PerfilUpdateWithWhereUniqueWithoutAccountInput | T_PerfilUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: T_PerfilUpdateManyWithWhereWithoutAccountInput | T_PerfilUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type T_PerfilUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<T_PerfilCreateWithoutAccountInput, T_PerfilUncheckedCreateWithoutAccountInput> | T_PerfilCreateWithoutAccountInput[] | T_PerfilUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutAccountInput | T_PerfilCreateOrConnectWithoutAccountInput[]
    upsert?: T_PerfilUpsertWithWhereUniqueWithoutAccountInput | T_PerfilUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: T_PerfilCreateManyAccountInputEnvelope
    set?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    disconnect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    delete?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    update?: T_PerfilUpdateWithWhereUniqueWithoutAccountInput | T_PerfilUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: T_PerfilUpdateManyWithWhereWithoutAccountInput | T_PerfilUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
  }

  export type T_CursoCreateNestedOneWithoutPerfisInput = {
    create?: XOR<T_CursoCreateWithoutPerfisInput, T_CursoUncheckedCreateWithoutPerfisInput>
    connectOrCreate?: T_CursoCreateOrConnectWithoutPerfisInput
    connect?: T_CursoWhereUniqueInput
  }

  export type T_AccountCreateNestedOneWithoutId_Perfil_AccountInput = {
    create?: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
    connectOrCreate?: T_AccountCreateOrConnectWithoutId_Perfil_AccountInput
    connect?: T_AccountWhereUniqueInput
  }

  export type T_PostCreateNestedManyWithoutT_PerfilInput = {
    create?: XOR<T_PostCreateWithoutT_PerfilInput, T_PostUncheckedCreateWithoutT_PerfilInput> | T_PostCreateWithoutT_PerfilInput[] | T_PostUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutT_PerfilInput | T_PostCreateOrConnectWithoutT_PerfilInput[]
    createMany?: T_PostCreateManyT_PerfilInputEnvelope
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
  }

  export type T_PIC_CurtidasCreateNestedManyWithoutT_PerfilInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput> | T_PIC_CurtidasCreateWithoutT_PerfilInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput | T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PerfilInputEnvelope
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
  }

  export type T_PIC_ComentariosCreateNestedManyWithoutT_PerfilInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput> | T_PIC_ComentariosCreateWithoutT_PerfilInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput | T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PerfilInputEnvelope
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
  }

  export type T_PostUncheckedCreateNestedManyWithoutT_PerfilInput = {
    create?: XOR<T_PostCreateWithoutT_PerfilInput, T_PostUncheckedCreateWithoutT_PerfilInput> | T_PostCreateWithoutT_PerfilInput[] | T_PostUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutT_PerfilInput | T_PostCreateOrConnectWithoutT_PerfilInput[]
    createMany?: T_PostCreateManyT_PerfilInputEnvelope
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
  }

  export type T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PerfilInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput> | T_PIC_CurtidasCreateWithoutT_PerfilInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput | T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PerfilInputEnvelope
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
  }

  export type T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PerfilInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput> | T_PIC_ComentariosCreateWithoutT_PerfilInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput | T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PerfilInputEnvelope
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPerfilTipoFieldUpdateOperationsInput = {
    set?: $Enums.PerfilTipo
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type T_CursoUpdateOneWithoutPerfisNestedInput = {
    create?: XOR<T_CursoCreateWithoutPerfisInput, T_CursoUncheckedCreateWithoutPerfisInput>
    connectOrCreate?: T_CursoCreateOrConnectWithoutPerfisInput
    upsert?: T_CursoUpsertWithoutPerfisInput
    disconnect?: T_CursoWhereInput | boolean
    delete?: T_CursoWhereInput | boolean
    connect?: T_CursoWhereUniqueInput
    update?: XOR<XOR<T_CursoUpdateToOneWithWhereWithoutPerfisInput, T_CursoUpdateWithoutPerfisInput>, T_CursoUncheckedUpdateWithoutPerfisInput>
  }

  export type T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput = {
    create?: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
    connectOrCreate?: T_AccountCreateOrConnectWithoutId_Perfil_AccountInput
    upsert?: T_AccountUpsertWithoutId_Perfil_AccountInput
    connect?: T_AccountWhereUniqueInput
    update?: XOR<XOR<T_AccountUpdateToOneWithWhereWithoutId_Perfil_AccountInput, T_AccountUpdateWithoutId_Perfil_AccountInput>, T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput>
  }

  export type T_PostUpdateManyWithoutT_PerfilNestedInput = {
    create?: XOR<T_PostCreateWithoutT_PerfilInput, T_PostUncheckedCreateWithoutT_PerfilInput> | T_PostCreateWithoutT_PerfilInput[] | T_PostUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutT_PerfilInput | T_PostCreateOrConnectWithoutT_PerfilInput[]
    upsert?: T_PostUpsertWithWhereUniqueWithoutT_PerfilInput | T_PostUpsertWithWhereUniqueWithoutT_PerfilInput[]
    createMany?: T_PostCreateManyT_PerfilInputEnvelope
    set?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    disconnect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    delete?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    update?: T_PostUpdateWithWhereUniqueWithoutT_PerfilInput | T_PostUpdateWithWhereUniqueWithoutT_PerfilInput[]
    updateMany?: T_PostUpdateManyWithWhereWithoutT_PerfilInput | T_PostUpdateManyWithWhereWithoutT_PerfilInput[]
    deleteMany?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
  }

  export type T_PIC_CurtidasUpdateManyWithoutT_PerfilNestedInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput> | T_PIC_CurtidasCreateWithoutT_PerfilInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput | T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput[]
    upsert?: T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PerfilInput | T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PerfilInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PerfilInputEnvelope
    set?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    disconnect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    delete?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    update?: T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PerfilInput | T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PerfilInput[]
    updateMany?: T_PIC_CurtidasUpdateManyWithWhereWithoutT_PerfilInput | T_PIC_CurtidasUpdateManyWithWhereWithoutT_PerfilInput[]
    deleteMany?: T_PIC_CurtidasScalarWhereInput | T_PIC_CurtidasScalarWhereInput[]
  }

  export type T_PIC_ComentariosUpdateManyWithoutT_PerfilNestedInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput> | T_PIC_ComentariosCreateWithoutT_PerfilInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput | T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput[]
    upsert?: T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PerfilInput | T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PerfilInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PerfilInputEnvelope
    set?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    disconnect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    delete?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    update?: T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PerfilInput | T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PerfilInput[]
    updateMany?: T_PIC_ComentariosUpdateManyWithWhereWithoutT_PerfilInput | T_PIC_ComentariosUpdateManyWithWhereWithoutT_PerfilInput[]
    deleteMany?: T_PIC_ComentariosScalarWhereInput | T_PIC_ComentariosScalarWhereInput[]
  }

  export type T_PostUncheckedUpdateManyWithoutT_PerfilNestedInput = {
    create?: XOR<T_PostCreateWithoutT_PerfilInput, T_PostUncheckedCreateWithoutT_PerfilInput> | T_PostCreateWithoutT_PerfilInput[] | T_PostUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutT_PerfilInput | T_PostCreateOrConnectWithoutT_PerfilInput[]
    upsert?: T_PostUpsertWithWhereUniqueWithoutT_PerfilInput | T_PostUpsertWithWhereUniqueWithoutT_PerfilInput[]
    createMany?: T_PostCreateManyT_PerfilInputEnvelope
    set?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    disconnect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    delete?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    update?: T_PostUpdateWithWhereUniqueWithoutT_PerfilInput | T_PostUpdateWithWhereUniqueWithoutT_PerfilInput[]
    updateMany?: T_PostUpdateManyWithWhereWithoutT_PerfilInput | T_PostUpdateManyWithWhereWithoutT_PerfilInput[]
    deleteMany?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
  }

  export type T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilNestedInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput> | T_PIC_CurtidasCreateWithoutT_PerfilInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput | T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput[]
    upsert?: T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PerfilInput | T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PerfilInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PerfilInputEnvelope
    set?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    disconnect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    delete?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    update?: T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PerfilInput | T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PerfilInput[]
    updateMany?: T_PIC_CurtidasUpdateManyWithWhereWithoutT_PerfilInput | T_PIC_CurtidasUpdateManyWithWhereWithoutT_PerfilInput[]
    deleteMany?: T_PIC_CurtidasScalarWhereInput | T_PIC_CurtidasScalarWhereInput[]
  }

  export type T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilNestedInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput> | T_PIC_ComentariosCreateWithoutT_PerfilInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput | T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput[]
    upsert?: T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PerfilInput | T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PerfilInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PerfilInputEnvelope
    set?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    disconnect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    delete?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    update?: T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PerfilInput | T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PerfilInput[]
    updateMany?: T_PIC_ComentariosUpdateManyWithWhereWithoutT_PerfilInput | T_PIC_ComentariosUpdateManyWithWhereWithoutT_PerfilInput[]
    deleteMany?: T_PIC_ComentariosScalarWhereInput | T_PIC_ComentariosScalarWhereInput[]
  }

  export type T_PerfilCreateNestedManyWithoutCursoInput = {
    create?: XOR<T_PerfilCreateWithoutCursoInput, T_PerfilUncheckedCreateWithoutCursoInput> | T_PerfilCreateWithoutCursoInput[] | T_PerfilUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutCursoInput | T_PerfilCreateOrConnectWithoutCursoInput[]
    createMany?: T_PerfilCreateManyCursoInputEnvelope
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
  }

  export type T_PerfilUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<T_PerfilCreateWithoutCursoInput, T_PerfilUncheckedCreateWithoutCursoInput> | T_PerfilCreateWithoutCursoInput[] | T_PerfilUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutCursoInput | T_PerfilCreateOrConnectWithoutCursoInput[]
    createMany?: T_PerfilCreateManyCursoInputEnvelope
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
  }

  export type T_PerfilUpdateManyWithoutCursoNestedInput = {
    create?: XOR<T_PerfilCreateWithoutCursoInput, T_PerfilUncheckedCreateWithoutCursoInput> | T_PerfilCreateWithoutCursoInput[] | T_PerfilUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutCursoInput | T_PerfilCreateOrConnectWithoutCursoInput[]
    upsert?: T_PerfilUpsertWithWhereUniqueWithoutCursoInput | T_PerfilUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: T_PerfilCreateManyCursoInputEnvelope
    set?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    disconnect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    delete?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    update?: T_PerfilUpdateWithWhereUniqueWithoutCursoInput | T_PerfilUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: T_PerfilUpdateManyWithWhereWithoutCursoInput | T_PerfilUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
  }

  export type T_PerfilUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<T_PerfilCreateWithoutCursoInput, T_PerfilUncheckedCreateWithoutCursoInput> | T_PerfilCreateWithoutCursoInput[] | T_PerfilUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutCursoInput | T_PerfilCreateOrConnectWithoutCursoInput[]
    upsert?: T_PerfilUpsertWithWhereUniqueWithoutCursoInput | T_PerfilUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: T_PerfilCreateManyCursoInputEnvelope
    set?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    disconnect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    delete?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    update?: T_PerfilUpdateWithWhereUniqueWithoutCursoInput | T_PerfilUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: T_PerfilUpdateManyWithWhereWithoutCursoInput | T_PerfilUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
  }

  export type T_PerfilCreateNestedOneWithoutId_Post_PerfilInput = {
    create?: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutId_Post_PerfilInput
    connect?: T_PerfilWhereUniqueInput
  }

  export type T_PostInteracaoCapaCreateNestedManyWithoutT_PostInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutT_PostInput, T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput> | T_PostInteracaoCapaCreateWithoutT_PostInput[] | T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput[]
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput | T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput[]
    createMany?: T_PostInteracaoCapaCreateManyT_PostInputEnvelope
    connect?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
  }

  export type T_PostInteracaoCapaUncheckedCreateNestedManyWithoutT_PostInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutT_PostInput, T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput> | T_PostInteracaoCapaCreateWithoutT_PostInput[] | T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput[]
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput | T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput[]
    createMany?: T_PostInteracaoCapaCreateManyT_PostInputEnvelope
    connect?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
  }

  export type T_PerfilUpdateOneRequiredWithoutId_Post_PerfilNestedInput = {
    create?: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutId_Post_PerfilInput
    upsert?: T_PerfilUpsertWithoutId_Post_PerfilInput
    connect?: T_PerfilWhereUniqueInput
    update?: XOR<XOR<T_PerfilUpdateToOneWithWhereWithoutId_Post_PerfilInput, T_PerfilUpdateWithoutId_Post_PerfilInput>, T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput>
  }

  export type T_PostInteracaoCapaUpdateManyWithoutT_PostNestedInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutT_PostInput, T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput> | T_PostInteracaoCapaCreateWithoutT_PostInput[] | T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput[]
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput | T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput[]
    upsert?: T_PostInteracaoCapaUpsertWithWhereUniqueWithoutT_PostInput | T_PostInteracaoCapaUpsertWithWhereUniqueWithoutT_PostInput[]
    createMany?: T_PostInteracaoCapaCreateManyT_PostInputEnvelope
    set?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    disconnect?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    delete?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    connect?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    update?: T_PostInteracaoCapaUpdateWithWhereUniqueWithoutT_PostInput | T_PostInteracaoCapaUpdateWithWhereUniqueWithoutT_PostInput[]
    updateMany?: T_PostInteracaoCapaUpdateManyWithWhereWithoutT_PostInput | T_PostInteracaoCapaUpdateManyWithWhereWithoutT_PostInput[]
    deleteMany?: T_PostInteracaoCapaScalarWhereInput | T_PostInteracaoCapaScalarWhereInput[]
  }

  export type T_PostInteracaoCapaUncheckedUpdateManyWithoutT_PostNestedInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutT_PostInput, T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput> | T_PostInteracaoCapaCreateWithoutT_PostInput[] | T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput[]
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput | T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput[]
    upsert?: T_PostInteracaoCapaUpsertWithWhereUniqueWithoutT_PostInput | T_PostInteracaoCapaUpsertWithWhereUniqueWithoutT_PostInput[]
    createMany?: T_PostInteracaoCapaCreateManyT_PostInputEnvelope
    set?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    disconnect?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    delete?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    connect?: T_PostInteracaoCapaWhereUniqueInput | T_PostInteracaoCapaWhereUniqueInput[]
    update?: T_PostInteracaoCapaUpdateWithWhereUniqueWithoutT_PostInput | T_PostInteracaoCapaUpdateWithWhereUniqueWithoutT_PostInput[]
    updateMany?: T_PostInteracaoCapaUpdateManyWithWhereWithoutT_PostInput | T_PostInteracaoCapaUpdateManyWithWhereWithoutT_PostInput[]
    deleteMany?: T_PostInteracaoCapaScalarWhereInput | T_PostInteracaoCapaScalarWhereInput[]
  }

  export type T_PostInteracaoCapaCreatevisualizacao_PICInput = {
    set: number[]
  }

  export type T_PIC_CurtidasCreateNestedManyWithoutT_PostInteracaoCapaInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PostInteracaoCapaInputEnvelope
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
  }

  export type T_PIC_ComentariosCreateNestedManyWithoutT_PostInteracaoCapaInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PostInteracaoCapaInputEnvelope
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
  }

  export type T_PostCreateNestedOneWithoutT_PostInteracaoCapaInput = {
    create?: XOR<T_PostCreateWithoutT_PostInteracaoCapaInput, T_PostUncheckedCreateWithoutT_PostInteracaoCapaInput>
    connectOrCreate?: T_PostCreateOrConnectWithoutT_PostInteracaoCapaInput
    connect?: T_PostWhereUniqueInput
  }

  export type T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PostInteracaoCapaInputEnvelope
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
  }

  export type T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PostInteracaoCapaInputEnvelope
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
  }

  export type T_PostInteracaoCapaUpdatevisualizacao_PICInput = {
    set?: number[]
    push?: number | number[]
  }

  export type T_PIC_CurtidasUpdateManyWithoutT_PostInteracaoCapaNestedInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    upsert?: T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PostInteracaoCapaInputEnvelope
    set?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    disconnect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    delete?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    update?: T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    updateMany?: T_PIC_CurtidasUpdateManyWithWhereWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasUpdateManyWithWhereWithoutT_PostInteracaoCapaInput[]
    deleteMany?: T_PIC_CurtidasScalarWhereInput | T_PIC_CurtidasScalarWhereInput[]
  }

  export type T_PIC_ComentariosUpdateManyWithoutT_PostInteracaoCapaNestedInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    upsert?: T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PostInteracaoCapaInputEnvelope
    set?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    disconnect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    delete?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    update?: T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    updateMany?: T_PIC_ComentariosUpdateManyWithWhereWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosUpdateManyWithWhereWithoutT_PostInteracaoCapaInput[]
    deleteMany?: T_PIC_ComentariosScalarWhereInput | T_PIC_ComentariosScalarWhereInput[]
  }

  export type T_PostUpdateOneRequiredWithoutT_PostInteracaoCapaNestedInput = {
    create?: XOR<T_PostCreateWithoutT_PostInteracaoCapaInput, T_PostUncheckedCreateWithoutT_PostInteracaoCapaInput>
    connectOrCreate?: T_PostCreateOrConnectWithoutT_PostInteracaoCapaInput
    upsert?: T_PostUpsertWithoutT_PostInteracaoCapaInput
    connect?: T_PostWhereUniqueInput
    update?: XOR<XOR<T_PostUpdateToOneWithWhereWithoutT_PostInteracaoCapaInput, T_PostUpdateWithoutT_PostInteracaoCapaInput>, T_PostUncheckedUpdateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_CurtidasUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput = {
    create?: XOR<T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    upsert?: T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_CurtidasCreateManyT_PostInteracaoCapaInputEnvelope
    set?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    disconnect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    delete?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    connect?: T_PIC_CurtidasWhereUniqueInput | T_PIC_CurtidasWhereUniqueInput[]
    update?: T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    updateMany?: T_PIC_CurtidasUpdateManyWithWhereWithoutT_PostInteracaoCapaInput | T_PIC_CurtidasUpdateManyWithWhereWithoutT_PostInteracaoCapaInput[]
    deleteMany?: T_PIC_CurtidasScalarWhereInput | T_PIC_CurtidasScalarWhereInput[]
  }

  export type T_PIC_ComentariosUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput = {
    create?: XOR<T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput> | T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput[] | T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput[]
    connectOrCreate?: T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput[]
    upsert?: T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    createMany?: T_PIC_ComentariosCreateManyT_PostInteracaoCapaInputEnvelope
    set?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    disconnect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    delete?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    connect?: T_PIC_ComentariosWhereUniqueInput | T_PIC_ComentariosWhereUniqueInput[]
    update?: T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput[]
    updateMany?: T_PIC_ComentariosUpdateManyWithWhereWithoutT_PostInteracaoCapaInput | T_PIC_ComentariosUpdateManyWithWhereWithoutT_PostInteracaoCapaInput[]
    deleteMany?: T_PIC_ComentariosScalarWhereInput | T_PIC_ComentariosScalarWhereInput[]
  }

  export type T_PostInteracaoCapaCreateNestedOneWithoutCurtidas_PICInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutCurtidas_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutCurtidas_PICInput>
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutCurtidas_PICInput
    connect?: T_PostInteracaoCapaWhereUniqueInput
  }

  export type T_PerfilCreateNestedOneWithoutPostInteracaoCurtidasInput = {
    create?: XOR<T_PerfilCreateWithoutPostInteracaoCurtidasInput, T_PerfilUncheckedCreateWithoutPostInteracaoCurtidasInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutPostInteracaoCurtidasInput
    connect?: T_PerfilWhereUniqueInput
  }

  export type T_PostInteracaoCapaUpdateOneWithoutCurtidas_PICNestedInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutCurtidas_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutCurtidas_PICInput>
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutCurtidas_PICInput
    upsert?: T_PostInteracaoCapaUpsertWithoutCurtidas_PICInput
    disconnect?: T_PostInteracaoCapaWhereInput | boolean
    delete?: T_PostInteracaoCapaWhereInput | boolean
    connect?: T_PostInteracaoCapaWhereUniqueInput
    update?: XOR<XOR<T_PostInteracaoCapaUpdateToOneWithWhereWithoutCurtidas_PICInput, T_PostInteracaoCapaUpdateWithoutCurtidas_PICInput>, T_PostInteracaoCapaUncheckedUpdateWithoutCurtidas_PICInput>
  }

  export type T_PerfilUpdateOneRequiredWithoutPostInteracaoCurtidasNestedInput = {
    create?: XOR<T_PerfilCreateWithoutPostInteracaoCurtidasInput, T_PerfilUncheckedCreateWithoutPostInteracaoCurtidasInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutPostInteracaoCurtidasInput
    upsert?: T_PerfilUpsertWithoutPostInteracaoCurtidasInput
    connect?: T_PerfilWhereUniqueInput
    update?: XOR<XOR<T_PerfilUpdateToOneWithWhereWithoutPostInteracaoCurtidasInput, T_PerfilUpdateWithoutPostInteracaoCurtidasInput>, T_PerfilUncheckedUpdateWithoutPostInteracaoCurtidasInput>
  }

  export type T_PostInteracaoCapaCreateNestedOneWithoutComentarios_PICInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutComentarios_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutComentarios_PICInput>
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutComentarios_PICInput
    connect?: T_PostInteracaoCapaWhereUniqueInput
  }

  export type T_PerfilCreateNestedOneWithoutPostInteracaoComentariosInput = {
    create?: XOR<T_PerfilCreateWithoutPostInteracaoComentariosInput, T_PerfilUncheckedCreateWithoutPostInteracaoComentariosInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutPostInteracaoComentariosInput
    connect?: T_PerfilWhereUniqueInput
  }

  export type T_PostInteracaoCapaUpdateOneWithoutComentarios_PICNestedInput = {
    create?: XOR<T_PostInteracaoCapaCreateWithoutComentarios_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutComentarios_PICInput>
    connectOrCreate?: T_PostInteracaoCapaCreateOrConnectWithoutComentarios_PICInput
    upsert?: T_PostInteracaoCapaUpsertWithoutComentarios_PICInput
    disconnect?: T_PostInteracaoCapaWhereInput | boolean
    delete?: T_PostInteracaoCapaWhereInput | boolean
    connect?: T_PostInteracaoCapaWhereUniqueInput
    update?: XOR<XOR<T_PostInteracaoCapaUpdateToOneWithWhereWithoutComentarios_PICInput, T_PostInteracaoCapaUpdateWithoutComentarios_PICInput>, T_PostInteracaoCapaUncheckedUpdateWithoutComentarios_PICInput>
  }

  export type T_PerfilUpdateOneRequiredWithoutPostInteracaoComentariosNestedInput = {
    create?: XOR<T_PerfilCreateWithoutPostInteracaoComentariosInput, T_PerfilUncheckedCreateWithoutPostInteracaoComentariosInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutPostInteracaoComentariosInput
    upsert?: T_PerfilUpsertWithoutPostInteracaoComentariosInput
    connect?: T_PerfilWhereUniqueInput
    update?: XOR<XOR<T_PerfilUpdateToOneWithWhereWithoutPostInteracaoComentariosInput, T_PerfilUpdateWithoutPostInteracaoComentariosInput>, T_PerfilUncheckedUpdateWithoutPostInteracaoComentariosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPerfilTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilTipo | EnumPerfilTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilTipoFilter<$PrismaModel> | $Enums.PerfilTipo
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPerfilTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilTipo | EnumPerfilTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilTipo[] | ListEnumPerfilTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilTipoWithAggregatesFilter<$PrismaModel> | $Enums.PerfilTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilTipoFilter<$PrismaModel>
    _max?: NestedEnumPerfilTipoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type T_PerfilCreateWithoutAccountInput = {
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    curso?: T_CursoCreateNestedOneWithoutPerfisInput
    id_Post_Perfil?: T_PostCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilUncheckedCreateWithoutAccountInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Curso_Perfil?: number | null
    id_Post_Perfil?: T_PostUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilCreateOrConnectWithoutAccountInput = {
    where: T_PerfilWhereUniqueInput
    create: XOR<T_PerfilCreateWithoutAccountInput, T_PerfilUncheckedCreateWithoutAccountInput>
  }

  export type T_PerfilCreateManyAccountInputEnvelope = {
    data: T_PerfilCreateManyAccountInput | T_PerfilCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type T_PerfilUpsertWithWhereUniqueWithoutAccountInput = {
    where: T_PerfilWhereUniqueInput
    update: XOR<T_PerfilUpdateWithoutAccountInput, T_PerfilUncheckedUpdateWithoutAccountInput>
    create: XOR<T_PerfilCreateWithoutAccountInput, T_PerfilUncheckedCreateWithoutAccountInput>
  }

  export type T_PerfilUpdateWithWhereUniqueWithoutAccountInput = {
    where: T_PerfilWhereUniqueInput
    data: XOR<T_PerfilUpdateWithoutAccountInput, T_PerfilUncheckedUpdateWithoutAccountInput>
  }

  export type T_PerfilUpdateManyWithWhereWithoutAccountInput = {
    where: T_PerfilScalarWhereInput
    data: XOR<T_PerfilUpdateManyMutationInput, T_PerfilUncheckedUpdateManyWithoutAccountInput>
  }

  export type T_PerfilScalarWhereInput = {
    AND?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
    OR?: T_PerfilScalarWhereInput[]
    NOT?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
    id_Perfil?: IntFilter<"T_Perfil"> | number
    nome_Perfil?: StringFilter<"T_Perfil"> | string
    email_Perfil?: StringFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    tipo_Perfil?: EnumPerfilTipoFilter<"T_Perfil"> | $Enums.PerfilTipo
    semestre_Perfil?: IntNullableFilter<"T_Perfil"> | number | null
    createdAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    id_Curso_Perfil?: IntNullableFilter<"T_Perfil"> | number | null
    id_Account_Perfil?: IntFilter<"T_Perfil"> | number
  }

  export type T_CursoCreateWithoutPerfisInput = {
    nome_Curso: string
    maxSemestres_Curso: number
  }

  export type T_CursoUncheckedCreateWithoutPerfisInput = {
    id_Curso?: number
    nome_Curso: string
    maxSemestres_Curso: number
  }

  export type T_CursoCreateOrConnectWithoutPerfisInput = {
    where: T_CursoWhereUniqueInput
    create: XOR<T_CursoCreateWithoutPerfisInput, T_CursoUncheckedCreateWithoutPerfisInput>
  }

  export type T_AccountCreateWithoutId_Perfil_AccountInput = {
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountUncheckedCreateWithoutId_Perfil_AccountInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountCreateOrConnectWithoutId_Perfil_AccountInput = {
    where: T_AccountWhereUniqueInput
    create: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
  }

  export type T_PostCreateWithoutT_PerfilInput = {
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    T_PostInteracaoCapa?: T_PostInteracaoCapaCreateNestedManyWithoutT_PostInput
  }

  export type T_PostUncheckedCreateWithoutT_PerfilInput = {
    id_Post?: number
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    T_PostInteracaoCapa?: T_PostInteracaoCapaUncheckedCreateNestedManyWithoutT_PostInput
  }

  export type T_PostCreateOrConnectWithoutT_PerfilInput = {
    where: T_PostWhereUniqueInput
    create: XOR<T_PostCreateWithoutT_PerfilInput, T_PostUncheckedCreateWithoutT_PerfilInput>
  }

  export type T_PostCreateManyT_PerfilInputEnvelope = {
    data: T_PostCreateManyT_PerfilInput | T_PostCreateManyT_PerfilInput[]
    skipDuplicates?: boolean
  }

  export type T_PIC_CurtidasCreateWithoutT_PerfilInput = {
    T_PostInteracaoCapa?: T_PostInteracaoCapaCreateNestedOneWithoutCurtidas_PICInput
  }

  export type T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput = {
    id_Curtida?: number
    id_PIC_Curtida?: number | null
  }

  export type T_PIC_CurtidasCreateOrConnectWithoutT_PerfilInput = {
    where: T_PIC_CurtidasWhereUniqueInput
    create: XOR<T_PIC_CurtidasCreateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput>
  }

  export type T_PIC_CurtidasCreateManyT_PerfilInputEnvelope = {
    data: T_PIC_CurtidasCreateManyT_PerfilInput | T_PIC_CurtidasCreateManyT_PerfilInput[]
    skipDuplicates?: boolean
  }

  export type T_PIC_ComentariosCreateWithoutT_PerfilInput = {
    conteudo_Comentario: string
    T_PostInteracaoCapa?: T_PostInteracaoCapaCreateNestedOneWithoutComentarios_PICInput
  }

  export type T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput = {
    id_Comentario?: number
    conteudo_Comentario: string
    id_PIC_Comentario?: number | null
  }

  export type T_PIC_ComentariosCreateOrConnectWithoutT_PerfilInput = {
    where: T_PIC_ComentariosWhereUniqueInput
    create: XOR<T_PIC_ComentariosCreateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput>
  }

  export type T_PIC_ComentariosCreateManyT_PerfilInputEnvelope = {
    data: T_PIC_ComentariosCreateManyT_PerfilInput | T_PIC_ComentariosCreateManyT_PerfilInput[]
    skipDuplicates?: boolean
  }

  export type T_CursoUpsertWithoutPerfisInput = {
    update: XOR<T_CursoUpdateWithoutPerfisInput, T_CursoUncheckedUpdateWithoutPerfisInput>
    create: XOR<T_CursoCreateWithoutPerfisInput, T_CursoUncheckedCreateWithoutPerfisInput>
    where?: T_CursoWhereInput
  }

  export type T_CursoUpdateToOneWithWhereWithoutPerfisInput = {
    where?: T_CursoWhereInput
    data: XOR<T_CursoUpdateWithoutPerfisInput, T_CursoUncheckedUpdateWithoutPerfisInput>
  }

  export type T_CursoUpdateWithoutPerfisInput = {
    nome_Curso?: StringFieldUpdateOperationsInput | string
    maxSemestres_Curso?: IntFieldUpdateOperationsInput | number
  }

  export type T_CursoUncheckedUpdateWithoutPerfisInput = {
    id_Curso?: IntFieldUpdateOperationsInput | number
    nome_Curso?: StringFieldUpdateOperationsInput | string
    maxSemestres_Curso?: IntFieldUpdateOperationsInput | number
  }

  export type T_AccountUpsertWithoutId_Perfil_AccountInput = {
    update: XOR<T_AccountUpdateWithoutId_Perfil_AccountInput, T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput>
    create: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
    where?: T_AccountWhereInput
  }

  export type T_AccountUpdateToOneWithWhereWithoutId_Perfil_AccountInput = {
    where?: T_AccountWhereInput
    data: XOR<T_AccountUpdateWithoutId_Perfil_AccountInput, T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput>
  }

  export type T_AccountUpdateWithoutId_Perfil_AccountInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PostUpsertWithWhereUniqueWithoutT_PerfilInput = {
    where: T_PostWhereUniqueInput
    update: XOR<T_PostUpdateWithoutT_PerfilInput, T_PostUncheckedUpdateWithoutT_PerfilInput>
    create: XOR<T_PostCreateWithoutT_PerfilInput, T_PostUncheckedCreateWithoutT_PerfilInput>
  }

  export type T_PostUpdateWithWhereUniqueWithoutT_PerfilInput = {
    where: T_PostWhereUniqueInput
    data: XOR<T_PostUpdateWithoutT_PerfilInput, T_PostUncheckedUpdateWithoutT_PerfilInput>
  }

  export type T_PostUpdateManyWithWhereWithoutT_PerfilInput = {
    where: T_PostScalarWhereInput
    data: XOR<T_PostUpdateManyMutationInput, T_PostUncheckedUpdateManyWithoutT_PerfilInput>
  }

  export type T_PostScalarWhereInput = {
    AND?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
    OR?: T_PostScalarWhereInput[]
    NOT?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
    id_Post?: IntFilter<"T_Post"> | number
    title_Post?: StringNullableFilter<"T_Post"> | string | null
    content_Post?: StringNullableFilter<"T_Post"> | string | null
    image_Post?: StringNullableFilter<"T_Post"> | string | null
    TAG_Post?: StringNullableFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntFilter<"T_Post"> | number
  }

  export type T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PerfilInput = {
    where: T_PIC_CurtidasWhereUniqueInput
    update: XOR<T_PIC_CurtidasUpdateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedUpdateWithoutT_PerfilInput>
    create: XOR<T_PIC_CurtidasCreateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedCreateWithoutT_PerfilInput>
  }

  export type T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PerfilInput = {
    where: T_PIC_CurtidasWhereUniqueInput
    data: XOR<T_PIC_CurtidasUpdateWithoutT_PerfilInput, T_PIC_CurtidasUncheckedUpdateWithoutT_PerfilInput>
  }

  export type T_PIC_CurtidasUpdateManyWithWhereWithoutT_PerfilInput = {
    where: T_PIC_CurtidasScalarWhereInput
    data: XOR<T_PIC_CurtidasUpdateManyMutationInput, T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilInput>
  }

  export type T_PIC_CurtidasScalarWhereInput = {
    AND?: T_PIC_CurtidasScalarWhereInput | T_PIC_CurtidasScalarWhereInput[]
    OR?: T_PIC_CurtidasScalarWhereInput[]
    NOT?: T_PIC_CurtidasScalarWhereInput | T_PIC_CurtidasScalarWhereInput[]
    id_Curtida?: IntFilter<"T_PIC_Curtidas"> | number
    id_Perfil_Curtida?: IntFilter<"T_PIC_Curtidas"> | number
    id_PIC_Curtida?: IntNullableFilter<"T_PIC_Curtidas"> | number | null
  }

  export type T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PerfilInput = {
    where: T_PIC_ComentariosWhereUniqueInput
    update: XOR<T_PIC_ComentariosUpdateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedUpdateWithoutT_PerfilInput>
    create: XOR<T_PIC_ComentariosCreateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedCreateWithoutT_PerfilInput>
  }

  export type T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PerfilInput = {
    where: T_PIC_ComentariosWhereUniqueInput
    data: XOR<T_PIC_ComentariosUpdateWithoutT_PerfilInput, T_PIC_ComentariosUncheckedUpdateWithoutT_PerfilInput>
  }

  export type T_PIC_ComentariosUpdateManyWithWhereWithoutT_PerfilInput = {
    where: T_PIC_ComentariosScalarWhereInput
    data: XOR<T_PIC_ComentariosUpdateManyMutationInput, T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilInput>
  }

  export type T_PIC_ComentariosScalarWhereInput = {
    AND?: T_PIC_ComentariosScalarWhereInput | T_PIC_ComentariosScalarWhereInput[]
    OR?: T_PIC_ComentariosScalarWhereInput[]
    NOT?: T_PIC_ComentariosScalarWhereInput | T_PIC_ComentariosScalarWhereInput[]
    id_Comentario?: IntFilter<"T_PIC_Comentarios"> | number
    id_Perfil_Comentario?: IntFilter<"T_PIC_Comentarios"> | number
    conteudo_Comentario?: StringFilter<"T_PIC_Comentarios"> | string
    id_PIC_Comentario?: IntNullableFilter<"T_PIC_Comentarios"> | number | null
  }

  export type T_PerfilCreateWithoutCursoInput = {
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    account: T_AccountCreateNestedOneWithoutId_Perfil_AccountInput
    id_Post_Perfil?: T_PostCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilUncheckedCreateWithoutCursoInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Account_Perfil: number
    id_Post_Perfil?: T_PostUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilCreateOrConnectWithoutCursoInput = {
    where: T_PerfilWhereUniqueInput
    create: XOR<T_PerfilCreateWithoutCursoInput, T_PerfilUncheckedCreateWithoutCursoInput>
  }

  export type T_PerfilCreateManyCursoInputEnvelope = {
    data: T_PerfilCreateManyCursoInput | T_PerfilCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type T_PerfilUpsertWithWhereUniqueWithoutCursoInput = {
    where: T_PerfilWhereUniqueInput
    update: XOR<T_PerfilUpdateWithoutCursoInput, T_PerfilUncheckedUpdateWithoutCursoInput>
    create: XOR<T_PerfilCreateWithoutCursoInput, T_PerfilUncheckedCreateWithoutCursoInput>
  }

  export type T_PerfilUpdateWithWhereUniqueWithoutCursoInput = {
    where: T_PerfilWhereUniqueInput
    data: XOR<T_PerfilUpdateWithoutCursoInput, T_PerfilUncheckedUpdateWithoutCursoInput>
  }

  export type T_PerfilUpdateManyWithWhereWithoutCursoInput = {
    where: T_PerfilScalarWhereInput
    data: XOR<T_PerfilUpdateManyMutationInput, T_PerfilUncheckedUpdateManyWithoutCursoInput>
  }

  export type T_PerfilCreateWithoutId_Post_PerfilInput = {
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    curso?: T_CursoCreateNestedOneWithoutPerfisInput
    account: T_AccountCreateNestedOneWithoutId_Perfil_AccountInput
    PostInteracaoCurtidas?: T_PIC_CurtidasCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilUncheckedCreateWithoutId_Post_PerfilInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Curso_Perfil?: number | null
    id_Account_Perfil: number
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilCreateOrConnectWithoutId_Post_PerfilInput = {
    where: T_PerfilWhereUniqueInput
    create: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
  }

  export type T_PostInteracaoCapaCreateWithoutT_PostInput = {
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasCreateNestedManyWithoutT_PostInteracaoCapaInput
    comentarios_PIC?: T_PIC_ComentariosCreateNestedManyWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput = {
    id_PIC?: number
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput
    comentarios_PIC?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaCreateOrConnectWithoutT_PostInput = {
    where: T_PostInteracaoCapaWhereUniqueInput
    create: XOR<T_PostInteracaoCapaCreateWithoutT_PostInput, T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput>
  }

  export type T_PostInteracaoCapaCreateManyT_PostInputEnvelope = {
    data: T_PostInteracaoCapaCreateManyT_PostInput | T_PostInteracaoCapaCreateManyT_PostInput[]
    skipDuplicates?: boolean
  }

  export type T_PerfilUpsertWithoutId_Post_PerfilInput = {
    update: XOR<T_PerfilUpdateWithoutId_Post_PerfilInput, T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput>
    create: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
    where?: T_PerfilWhereInput
  }

  export type T_PerfilUpdateToOneWithWhereWithoutId_Post_PerfilInput = {
    where?: T_PerfilWhereInput
    data: XOR<T_PerfilUpdateWithoutId_Post_PerfilInput, T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput>
  }

  export type T_PerfilUpdateWithoutId_Post_PerfilInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: T_CursoUpdateOneWithoutPerfisNestedInput
    account?: T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Curso_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PostInteracaoCapaUpsertWithWhereUniqueWithoutT_PostInput = {
    where: T_PostInteracaoCapaWhereUniqueInput
    update: XOR<T_PostInteracaoCapaUpdateWithoutT_PostInput, T_PostInteracaoCapaUncheckedUpdateWithoutT_PostInput>
    create: XOR<T_PostInteracaoCapaCreateWithoutT_PostInput, T_PostInteracaoCapaUncheckedCreateWithoutT_PostInput>
  }

  export type T_PostInteracaoCapaUpdateWithWhereUniqueWithoutT_PostInput = {
    where: T_PostInteracaoCapaWhereUniqueInput
    data: XOR<T_PostInteracaoCapaUpdateWithoutT_PostInput, T_PostInteracaoCapaUncheckedUpdateWithoutT_PostInput>
  }

  export type T_PostInteracaoCapaUpdateManyWithWhereWithoutT_PostInput = {
    where: T_PostInteracaoCapaScalarWhereInput
    data: XOR<T_PostInteracaoCapaUpdateManyMutationInput, T_PostInteracaoCapaUncheckedUpdateManyWithoutT_PostInput>
  }

  export type T_PostInteracaoCapaScalarWhereInput = {
    AND?: T_PostInteracaoCapaScalarWhereInput | T_PostInteracaoCapaScalarWhereInput[]
    OR?: T_PostInteracaoCapaScalarWhereInput[]
    NOT?: T_PostInteracaoCapaScalarWhereInput | T_PostInteracaoCapaScalarWhereInput[]
    id_PIC?: IntFilter<"T_PostInteracaoCapa"> | number
    id_Post_PIC?: IntFilter<"T_PostInteracaoCapa"> | number
    visualizacao_PIC?: IntNullableListFilter<"T_PostInteracaoCapa">
  }

  export type T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput = {
    T_Perfil: T_PerfilCreateNestedOneWithoutPostInteracaoCurtidasInput
  }

  export type T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput = {
    id_Curtida?: number
    id_Perfil_Curtida: number
  }

  export type T_PIC_CurtidasCreateOrConnectWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_CurtidasWhereUniqueInput
    create: XOR<T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_CurtidasCreateManyT_PostInteracaoCapaInputEnvelope = {
    data: T_PIC_CurtidasCreateManyT_PostInteracaoCapaInput | T_PIC_CurtidasCreateManyT_PostInteracaoCapaInput[]
    skipDuplicates?: boolean
  }

  export type T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput = {
    conteudo_Comentario: string
    T_Perfil: T_PerfilCreateNestedOneWithoutPostInteracaoComentariosInput
  }

  export type T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput = {
    id_Comentario?: number
    id_Perfil_Comentario: number
    conteudo_Comentario: string
  }

  export type T_PIC_ComentariosCreateOrConnectWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_ComentariosWhereUniqueInput
    create: XOR<T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_ComentariosCreateManyT_PostInteracaoCapaInputEnvelope = {
    data: T_PIC_ComentariosCreateManyT_PostInteracaoCapaInput | T_PIC_ComentariosCreateManyT_PostInteracaoCapaInput[]
    skipDuplicates?: boolean
  }

  export type T_PostCreateWithoutT_PostInteracaoCapaInput = {
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    T_Perfil: T_PerfilCreateNestedOneWithoutId_Post_PerfilInput
  }

  export type T_PostUncheckedCreateWithoutT_PostInteracaoCapaInput = {
    id_Post?: number
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    id_Perfil_Post: number
  }

  export type T_PostCreateOrConnectWithoutT_PostInteracaoCapaInput = {
    where: T_PostWhereUniqueInput
    create: XOR<T_PostCreateWithoutT_PostInteracaoCapaInput, T_PostUncheckedCreateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_CurtidasUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_CurtidasWhereUniqueInput
    update: XOR<T_PIC_CurtidasUpdateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedUpdateWithoutT_PostInteracaoCapaInput>
    create: XOR<T_PIC_CurtidasCreateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedCreateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_CurtidasUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_CurtidasWhereUniqueInput
    data: XOR<T_PIC_CurtidasUpdateWithoutT_PostInteracaoCapaInput, T_PIC_CurtidasUncheckedUpdateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_CurtidasUpdateManyWithWhereWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_CurtidasScalarWhereInput
    data: XOR<T_PIC_CurtidasUpdateManyMutationInput, T_PIC_CurtidasUncheckedUpdateManyWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_ComentariosUpsertWithWhereUniqueWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_ComentariosWhereUniqueInput
    update: XOR<T_PIC_ComentariosUpdateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedUpdateWithoutT_PostInteracaoCapaInput>
    create: XOR<T_PIC_ComentariosCreateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedCreateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_ComentariosUpdateWithWhereUniqueWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_ComentariosWhereUniqueInput
    data: XOR<T_PIC_ComentariosUpdateWithoutT_PostInteracaoCapaInput, T_PIC_ComentariosUncheckedUpdateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PIC_ComentariosUpdateManyWithWhereWithoutT_PostInteracaoCapaInput = {
    where: T_PIC_ComentariosScalarWhereInput
    data: XOR<T_PIC_ComentariosUpdateManyMutationInput, T_PIC_ComentariosUncheckedUpdateManyWithoutT_PostInteracaoCapaInput>
  }

  export type T_PostUpsertWithoutT_PostInteracaoCapaInput = {
    update: XOR<T_PostUpdateWithoutT_PostInteracaoCapaInput, T_PostUncheckedUpdateWithoutT_PostInteracaoCapaInput>
    create: XOR<T_PostCreateWithoutT_PostInteracaoCapaInput, T_PostUncheckedCreateWithoutT_PostInteracaoCapaInput>
    where?: T_PostWhereInput
  }

  export type T_PostUpdateToOneWithWhereWithoutT_PostInteracaoCapaInput = {
    where?: T_PostWhereInput
    data: XOR<T_PostUpdateWithoutT_PostInteracaoCapaInput, T_PostUncheckedUpdateWithoutT_PostInteracaoCapaInput>
  }

  export type T_PostUpdateWithoutT_PostInteracaoCapaInput = {
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    T_Perfil?: T_PerfilUpdateOneRequiredWithoutId_Post_PerfilNestedInput
  }

  export type T_PostUncheckedUpdateWithoutT_PostInteracaoCapaInput = {
    id_Post?: IntFieldUpdateOperationsInput | number
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Post?: IntFieldUpdateOperationsInput | number
  }

  export type T_PostInteracaoCapaCreateWithoutCurtidas_PICInput = {
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    comentarios_PIC?: T_PIC_ComentariosCreateNestedManyWithoutT_PostInteracaoCapaInput
    T_Post: T_PostCreateNestedOneWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaUncheckedCreateWithoutCurtidas_PICInput = {
    id_PIC?: number
    id_Post_PIC: number
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    comentarios_PIC?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaCreateOrConnectWithoutCurtidas_PICInput = {
    where: T_PostInteracaoCapaWhereUniqueInput
    create: XOR<T_PostInteracaoCapaCreateWithoutCurtidas_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutCurtidas_PICInput>
  }

  export type T_PerfilCreateWithoutPostInteracaoCurtidasInput = {
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    curso?: T_CursoCreateNestedOneWithoutPerfisInput
    account: T_AccountCreateNestedOneWithoutId_Perfil_AccountInput
    id_Post_Perfil?: T_PostCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilUncheckedCreateWithoutPostInteracaoCurtidasInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Curso_Perfil?: number | null
    id_Account_Perfil: number
    id_Post_Perfil?: T_PostUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilCreateOrConnectWithoutPostInteracaoCurtidasInput = {
    where: T_PerfilWhereUniqueInput
    create: XOR<T_PerfilCreateWithoutPostInteracaoCurtidasInput, T_PerfilUncheckedCreateWithoutPostInteracaoCurtidasInput>
  }

  export type T_PostInteracaoCapaUpsertWithoutCurtidas_PICInput = {
    update: XOR<T_PostInteracaoCapaUpdateWithoutCurtidas_PICInput, T_PostInteracaoCapaUncheckedUpdateWithoutCurtidas_PICInput>
    create: XOR<T_PostInteracaoCapaCreateWithoutCurtidas_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutCurtidas_PICInput>
    where?: T_PostInteracaoCapaWhereInput
  }

  export type T_PostInteracaoCapaUpdateToOneWithWhereWithoutCurtidas_PICInput = {
    where?: T_PostInteracaoCapaWhereInput
    data: XOR<T_PostInteracaoCapaUpdateWithoutCurtidas_PICInput, T_PostInteracaoCapaUncheckedUpdateWithoutCurtidas_PICInput>
  }

  export type T_PostInteracaoCapaUpdateWithoutCurtidas_PICInput = {
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    comentarios_PIC?: T_PIC_ComentariosUpdateManyWithoutT_PostInteracaoCapaNestedInput
    T_Post?: T_PostUpdateOneRequiredWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PostInteracaoCapaUncheckedUpdateWithoutCurtidas_PICInput = {
    id_PIC?: IntFieldUpdateOperationsInput | number
    id_Post_PIC?: IntFieldUpdateOperationsInput | number
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    comentarios_PIC?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PerfilUpsertWithoutPostInteracaoCurtidasInput = {
    update: XOR<T_PerfilUpdateWithoutPostInteracaoCurtidasInput, T_PerfilUncheckedUpdateWithoutPostInteracaoCurtidasInput>
    create: XOR<T_PerfilCreateWithoutPostInteracaoCurtidasInput, T_PerfilUncheckedCreateWithoutPostInteracaoCurtidasInput>
    where?: T_PerfilWhereInput
  }

  export type T_PerfilUpdateToOneWithWhereWithoutPostInteracaoCurtidasInput = {
    where?: T_PerfilWhereInput
    data: XOR<T_PerfilUpdateWithoutPostInteracaoCurtidasInput, T_PerfilUncheckedUpdateWithoutPostInteracaoCurtidasInput>
  }

  export type T_PerfilUpdateWithoutPostInteracaoCurtidasInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: T_CursoUpdateOneWithoutPerfisNestedInput
    account?: T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput
    id_Post_Perfil?: T_PostUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateWithoutPostInteracaoCurtidasInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Curso_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
    id_Post_Perfil?: T_PostUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PostInteracaoCapaCreateWithoutComentarios_PICInput = {
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasCreateNestedManyWithoutT_PostInteracaoCapaInput
    T_Post: T_PostCreateNestedOneWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaUncheckedCreateWithoutComentarios_PICInput = {
    id_PIC?: number
    id_Post_PIC: number
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PostInteracaoCapaInput
  }

  export type T_PostInteracaoCapaCreateOrConnectWithoutComentarios_PICInput = {
    where: T_PostInteracaoCapaWhereUniqueInput
    create: XOR<T_PostInteracaoCapaCreateWithoutComentarios_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutComentarios_PICInput>
  }

  export type T_PerfilCreateWithoutPostInteracaoComentariosInput = {
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    curso?: T_CursoCreateNestedOneWithoutPerfisInput
    account: T_AccountCreateNestedOneWithoutId_Perfil_AccountInput
    id_Post_Perfil?: T_PostCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilUncheckedCreateWithoutPostInteracaoComentariosInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Curso_Perfil?: number | null
    id_Account_Perfil: number
    id_Post_Perfil?: T_PostUncheckedCreateNestedManyWithoutT_PerfilInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedCreateNestedManyWithoutT_PerfilInput
  }

  export type T_PerfilCreateOrConnectWithoutPostInteracaoComentariosInput = {
    where: T_PerfilWhereUniqueInput
    create: XOR<T_PerfilCreateWithoutPostInteracaoComentariosInput, T_PerfilUncheckedCreateWithoutPostInteracaoComentariosInput>
  }

  export type T_PostInteracaoCapaUpsertWithoutComentarios_PICInput = {
    update: XOR<T_PostInteracaoCapaUpdateWithoutComentarios_PICInput, T_PostInteracaoCapaUncheckedUpdateWithoutComentarios_PICInput>
    create: XOR<T_PostInteracaoCapaCreateWithoutComentarios_PICInput, T_PostInteracaoCapaUncheckedCreateWithoutComentarios_PICInput>
    where?: T_PostInteracaoCapaWhereInput
  }

  export type T_PostInteracaoCapaUpdateToOneWithWhereWithoutComentarios_PICInput = {
    where?: T_PostInteracaoCapaWhereInput
    data: XOR<T_PostInteracaoCapaUpdateWithoutComentarios_PICInput, T_PostInteracaoCapaUncheckedUpdateWithoutComentarios_PICInput>
  }

  export type T_PostInteracaoCapaUpdateWithoutComentarios_PICInput = {
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUpdateManyWithoutT_PostInteracaoCapaNestedInput
    T_Post?: T_PostUpdateOneRequiredWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PostInteracaoCapaUncheckedUpdateWithoutComentarios_PICInput = {
    id_PIC?: IntFieldUpdateOperationsInput | number
    id_Post_PIC?: IntFieldUpdateOperationsInput | number
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PerfilUpsertWithoutPostInteracaoComentariosInput = {
    update: XOR<T_PerfilUpdateWithoutPostInteracaoComentariosInput, T_PerfilUncheckedUpdateWithoutPostInteracaoComentariosInput>
    create: XOR<T_PerfilCreateWithoutPostInteracaoComentariosInput, T_PerfilUncheckedCreateWithoutPostInteracaoComentariosInput>
    where?: T_PerfilWhereInput
  }

  export type T_PerfilUpdateToOneWithWhereWithoutPostInteracaoComentariosInput = {
    where?: T_PerfilWhereInput
    data: XOR<T_PerfilUpdateWithoutPostInteracaoComentariosInput, T_PerfilUncheckedUpdateWithoutPostInteracaoComentariosInput>
  }

  export type T_PerfilUpdateWithoutPostInteracaoComentariosInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: T_CursoUpdateOneWithoutPerfisNestedInput
    account?: T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput
    id_Post_Perfil?: T_PostUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateWithoutPostInteracaoComentariosInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Curso_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
    id_Post_Perfil?: T_PostUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilCreateManyAccountInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Curso_Perfil?: number | null
  }

  export type T_PerfilUpdateWithoutAccountInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: T_CursoUpdateOneWithoutPerfisNestedInput
    id_Post_Perfil?: T_PostUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateWithoutAccountInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Curso_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_Post_Perfil?: T_PostUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateManyWithoutAccountInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Curso_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PostCreateManyT_PerfilInput = {
    id_Post?: number
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    TAG_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
  }

  export type T_PIC_CurtidasCreateManyT_PerfilInput = {
    id_Curtida?: number
    id_PIC_Curtida?: number | null
  }

  export type T_PIC_ComentariosCreateManyT_PerfilInput = {
    id_Comentario?: number
    conteudo_Comentario: string
    id_PIC_Comentario?: number | null
  }

  export type T_PostUpdateWithoutT_PerfilInput = {
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    T_PostInteracaoCapa?: T_PostInteracaoCapaUpdateManyWithoutT_PostNestedInput
  }

  export type T_PostUncheckedUpdateWithoutT_PerfilInput = {
    id_Post?: IntFieldUpdateOperationsInput | number
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    T_PostInteracaoCapa?: T_PostInteracaoCapaUncheckedUpdateManyWithoutT_PostNestedInput
  }

  export type T_PostUncheckedUpdateManyWithoutT_PerfilInput = {
    id_Post?: IntFieldUpdateOperationsInput | number
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    TAG_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PIC_CurtidasUpdateWithoutT_PerfilInput = {
    T_PostInteracaoCapa?: T_PostInteracaoCapaUpdateOneWithoutCurtidas_PICNestedInput
  }

  export type T_PIC_CurtidasUncheckedUpdateWithoutT_PerfilInput = {
    id_Curtida?: IntFieldUpdateOperationsInput | number
    id_PIC_Curtida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilInput = {
    id_Curtida?: IntFieldUpdateOperationsInput | number
    id_PIC_Curtida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PIC_ComentariosUpdateWithoutT_PerfilInput = {
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
    T_PostInteracaoCapa?: T_PostInteracaoCapaUpdateOneWithoutComentarios_PICNestedInput
  }

  export type T_PIC_ComentariosUncheckedUpdateWithoutT_PerfilInput = {
    id_Comentario?: IntFieldUpdateOperationsInput | number
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
    id_PIC_Comentario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilInput = {
    id_Comentario?: IntFieldUpdateOperationsInput | number
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
    id_PIC_Comentario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_PerfilCreateManyCursoInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    tipo_Perfil?: $Enums.PerfilTipo
    semestre_Perfil?: number | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Account_Perfil: number
  }

  export type T_PerfilUpdateWithoutCursoInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput
    id_Post_Perfil?: T_PostUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateWithoutCursoInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
    id_Post_Perfil?: T_PostUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoCurtidas?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PerfilNestedInput
    PostInteracaoComentarios?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PerfilNestedInput
  }

  export type T_PerfilUncheckedUpdateManyWithoutCursoInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_Perfil?: EnumPerfilTipoFieldUpdateOperationsInput | $Enums.PerfilTipo
    semestre_Perfil?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
  }

  export type T_PostInteracaoCapaCreateManyT_PostInput = {
    id_PIC?: number
    visualizacao_PIC?: T_PostInteracaoCapaCreatevisualizacao_PICInput | number[]
  }

  export type T_PostInteracaoCapaUpdateWithoutT_PostInput = {
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUpdateManyWithoutT_PostInteracaoCapaNestedInput
    comentarios_PIC?: T_PIC_ComentariosUpdateManyWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PostInteracaoCapaUncheckedUpdateWithoutT_PostInput = {
    id_PIC?: IntFieldUpdateOperationsInput | number
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
    curtidas_PIC?: T_PIC_CurtidasUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput
    comentarios_PIC?: T_PIC_ComentariosUncheckedUpdateManyWithoutT_PostInteracaoCapaNestedInput
  }

  export type T_PostInteracaoCapaUncheckedUpdateManyWithoutT_PostInput = {
    id_PIC?: IntFieldUpdateOperationsInput | number
    visualizacao_PIC?: T_PostInteracaoCapaUpdatevisualizacao_PICInput | number[]
  }

  export type T_PIC_CurtidasCreateManyT_PostInteracaoCapaInput = {
    id_Curtida?: number
    id_Perfil_Curtida: number
  }

  export type T_PIC_ComentariosCreateManyT_PostInteracaoCapaInput = {
    id_Comentario?: number
    id_Perfil_Comentario: number
    conteudo_Comentario: string
  }

  export type T_PIC_CurtidasUpdateWithoutT_PostInteracaoCapaInput = {
    T_Perfil?: T_PerfilUpdateOneRequiredWithoutPostInteracaoCurtidasNestedInput
  }

  export type T_PIC_CurtidasUncheckedUpdateWithoutT_PostInteracaoCapaInput = {
    id_Curtida?: IntFieldUpdateOperationsInput | number
    id_Perfil_Curtida?: IntFieldUpdateOperationsInput | number
  }

  export type T_PIC_CurtidasUncheckedUpdateManyWithoutT_PostInteracaoCapaInput = {
    id_Curtida?: IntFieldUpdateOperationsInput | number
    id_Perfil_Curtida?: IntFieldUpdateOperationsInput | number
  }

  export type T_PIC_ComentariosUpdateWithoutT_PostInteracaoCapaInput = {
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
    T_Perfil?: T_PerfilUpdateOneRequiredWithoutPostInteracaoComentariosNestedInput
  }

  export type T_PIC_ComentariosUncheckedUpdateWithoutT_PostInteracaoCapaInput = {
    id_Comentario?: IntFieldUpdateOperationsInput | number
    id_Perfil_Comentario?: IntFieldUpdateOperationsInput | number
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
  }

  export type T_PIC_ComentariosUncheckedUpdateManyWithoutT_PostInteracaoCapaInput = {
    id_Comentario?: IntFieldUpdateOperationsInput | number
    id_Perfil_Comentario?: IntFieldUpdateOperationsInput | number
    conteudo_Comentario?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}