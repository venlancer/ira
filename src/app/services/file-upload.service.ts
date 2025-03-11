import { Injectable } from '@angular/core';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { AWS_CONFIG } from './ira.config';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private s3 = new S3Client({
    region: AWS_CONFIG.region,
    credentials: {
      accessKeyId: AWS_CONFIG.accessKeyId,
      secretAccessKey: AWS_CONFIG.secretAccessKey,
    },
  });

  async uploadFile(file: File): Promise<string> {
    const fileName = `${Date.now()}-${file.name}`;
    const fileArrayBuffer = await file.arrayBuffer();
    const fileBuffer = new Uint8Array(fileArrayBuffer);

    const params = {
      Bucket: AWS_CONFIG.bucketName,
      Key: fileName,
      Body: fileBuffer,
      ContentType: file.type,
    };

    await this.s3.send(new PutObjectCommand(params));

    // ✅ Generate Signed URL (Valid for 1 hour)
    const signedUrl = await getSignedUrl(this.s3, new GetObjectCommand({ Bucket: AWS_CONFIG.bucketName, Key: fileName }), { expiresIn: 3600 });

    return signedUrl; // Send signed URL instead of public URL
  }
}
