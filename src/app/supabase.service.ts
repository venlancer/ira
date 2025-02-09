import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

declare const supabase: any; // Declare Supabase loaded from CDN

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    if (!this.supabase) {
      this.supabase = createClient(environment.supabaseUrl, environment.supabaseAnonKey);
    }
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseAnonKey);
  }

  getClient() {
    return this.supabase;
  }

  async testConnection() {
    const { data, error } = await this.supabase.from('ira_user').select('*');
    if (error) {
      console.error('Supabase Connection Error:', error);
    } else {
      console.log('Supabase Connection Successful:', data);
    }
  }

}
