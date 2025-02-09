import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-section-details',
  templateUrl: './event-section-details.component.html',
  styleUrls: ['./event-section-details.component.scss']
})
export class EventSectionDetailsComponent implements OnInit {

  eventName: string = 'Amazing Event 2025';
  contactDetails = {
    contactNumber: '+1 234 567 890',
    address: '123 Event Street, City, Country',
    email: 'example@event.com',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
