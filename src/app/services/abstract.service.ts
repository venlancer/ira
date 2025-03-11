import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/iraurls';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {
  private hasuraUrl = 'https://choice-pangolin-52.hasura.app/api/rest/abstract_submission';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': environment.hasurakey // Replace with your actual Hasura admin secret
  });

  constructor(private http: HttpClient) {}

  submitAbstract(data: any): Observable<any> {
    const payload = { 
      object: data  // 🚀 Ensure the correct format
    };
    return this.http.post(this.hasuraUrl, payload, { headers: this.headers });
  }
}
