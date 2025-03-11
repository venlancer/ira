import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private eventData: any = null;

  // Getter method to retrieve data
  getEventData() {
    return this.eventData;
  }

  // Setter method to set data
  setEventData(data: any) {
    this.eventData = data;
  }
}
