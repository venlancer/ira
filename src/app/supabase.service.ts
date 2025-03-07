import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

declare const supabase: any; // Declare Supabase loaded from CDN

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;
  private SUPABASE_API_KEY = environment.supabaseAnonKey;

  constructor(private http: HttpClient) {
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

  addNewEvent(eventData: any): Observable<any> {
    const url = environment.supabaseUrl+`/new_event`;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.SUPABASE_API_KEY,
      'Authorization': `Bearer ${this.SUPABASE_API_KEY}`
    });

    return this.http.post(url, eventData, { headers });
  }

}
