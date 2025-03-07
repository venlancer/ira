import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseAnonKey);
  }

  // Upload file to Supabase Storage
  async uploadFile(file: File): Promise<string> {
    if (!file) throw new Error("No file provided");

    const bucketName = 'abstracts'; // Ensure this matches your Supabase bucket name
    const filePath = `${Date.now()}_${file.name}`;

    // Upload the file
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      console.error("File upload error:", error);
      throw error;
    }

    // Get public URL of the uploaded file
    return this.supabase.storage.from(bucketName).getPublicUrl(filePath).data.publicUrl;
  }

  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }

async insertAbstractData(formData: any): Promise<any> {
  console.log("Submitting form data:", formData);

  const { data, error } = await this.supabase
    .from('abstract_submission')
    .insert([formData]);

  if (error) {
    console.error("Database insert error:", error);
    throw error;
  }

  return data;
}

  
}
