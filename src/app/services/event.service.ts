import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private HASURA_REST_URL = 'https://choice-pangolin-52.hasura.app/api/rest/event_details';
  private HASURA_ADMIN_SECRET = environment.hasurakey; // Replace with actual key

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': this.HASURA_ADMIN_SECRET
    });

    return this.http.get<any>(this.HASURA_REST_URL, { headers });
  }
}
