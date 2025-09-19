import { Client } from 'minio';

export const minioClient = new Client({
    endPoint: 'minio.uniblog.cloud',
    port: 9000,
    useSSL: false,
    accessKey: 'userPassword',
    secretKey: 'userPassword',
});