import { Client } from 'minio';

export const minioClient = new Client({
    endPoint: '192.168.3.9',
    port: 9000,
    useSSL: false,
    accessKey: 'userPassword',
    secretKey: 'userPassword',
});