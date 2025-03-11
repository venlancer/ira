import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/iraurls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private HASURA_REST_URL = 'https://choice-pangolin-52.hasura.app/api/rest/event_details';
  private API_URL = 'https://choice-pangolin-52.hasura.app/api/rest/insertcompleteevent';
  private API_URL2 = '	https://choice-pangolin-52.hasura.app/api/rest/event_details';
  private aas = 'https://choice-pangolin-52.hasura.app/api/rest/aws';
  private detailByID = 'https://choice-pangolin-52.hasura.app/api/rest/events/by-event-details/'
  private HASURA_ADMIN_SECRET = environment.hasurakey; // Replace with actual key
  private getCompleteDetail: 'https://choice-pangolin-52.hasura.app/api/rest/events/';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': this.HASURA_ADMIN_SECRET
    });

    return this.http.get<any>(this.HASURA_REST_URL, { headers });
  }
  getEventsById(ID): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': this.HASURA_ADMIN_SECRET
    });

    return this.http.get<any>(this.detailByID+ID, { headers });
  }
  getCompleteDetails(ID): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': this.HASURA_ADMIN_SECRET
    });

    return this.http.get<any>(this.getCompleteDetail+ID, { headers });
  }


  createEvent(eventData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': this.HASURA_ADMIN_SECRET
    });

    return this.http.post(this.API_URL, eventData, { headers });
  }

  createEventDetails(eventData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': this.HASURA_ADMIN_SECRET
    });

    const payLoad = {
      "object": eventData
    }

    return this.http.post(this.API_URL2, payLoad, { headers });
  }

}
