import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://choice-pangolin-52.hasura.app/api/rest/event_registrations'; // Hasura API URL

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': environment.hasurakey, // ✅ Replace with actual Hasura secret key
  });

  constructor(private http: HttpClient) {}

  submitRegistration(data: any): Observable<any> {
    const payload = { object : data}
    return this.http.post(this.apiUrl, payload, { headers: this.headers });
  }
}
