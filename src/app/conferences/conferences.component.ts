import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {

  users: any[] = [];

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.addUser();
  }

  async fetchUsers() {
    this.users = await this.supabaseService.getUsers();
    console.log("Users:", this.users);
  }

  async addUser() {
    const newUser = await this.supabaseService.createUser("John Doe", "john@example.com");
    console.log("New User Added:", newUser);
    this.fetchUsers(); // Refresh the list after adding
  }

}
