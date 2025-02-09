import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-cards',
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.scss']
})
export class EventCardsComponent implements OnInit {

  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() organizer: string = '';
  @Input() date: Date = new Date();
  @Input() edate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
