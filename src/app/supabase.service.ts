import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/iraurls';

declare const supabase: any; // Declare Supabase loaded from CDN

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {


  constructor(private http: HttpClient) {
  }



}
