import { Injectable } from '@angular/core';

declare const supabase: any; // Declare Supabase loaded from CDN

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() { }

   // Fetch all users
   async getUsers() {
    const { data, error } = await supabase.from('user table').select('*');
    if (error) {
      console.error("Error fetching users:", error);
    }
    return data;
  }

  // Insert a new user
  async createUser(name: string, email: string) {
    const { data, error } = await supabase.from('users').insert([{ name, email }]);
    if (error) {
      console.error("Error inserting user:", error);
    }
    return data;
  }

}
