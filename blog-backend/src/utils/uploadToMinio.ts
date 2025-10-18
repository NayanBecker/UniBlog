import { minioClient } from '../lib/minio';
import { randomUUID } from 'crypto';

export async function uploadToMinio(file: Buffer, originalName: string): Promise<string> {
    const bucket = 'uniblog-profile-update';
    const fileName = `${randomUUID()}-${originalName}`;

    const exists = await minioClient.bucketExists(bucket);
    if (!exists) await minioClient.makeBucket(bucket);

    await minioClient.putObject(bucket, fileName, file);

    const minioUrl = `http://192.168.3.9:9000/${bucket}/${fileName}`; 
    return minioUrl;
}
