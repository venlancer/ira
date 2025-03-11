import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/iraurls';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private HASURA_REST_URL = 'https://choice-pangolin-52.hasura.app/api/rest/customer';
  private HASURA_ADMIN_SECRET = environment.hasurakey; // Replace with actual secret

  constructor(private http: HttpClient) {}

  // Method to send customer enquiry
  addCustomerEnquiry(company: string, name: string, contact: string, email: string, description: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': this.HASURA_ADMIN_SECRET
    });

    const body = { 
      object: { 
        company, 
        name, 
        contact, 
        email, 
        description 
      }
    };

    return this.http.post<any>(this.HASURA_REST_URL, body, { headers });
  }
}
