import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {

  scheduleData: any[] = [];
  selectedDay: number = 0;
  itemsData:any;

  constructor(private eventServices:EventService) { }

  ngOnInit(): void {
    this.getDetails();
    this.scheduleData = [
      {
        day: 1,
        date: new Date('2025-03-10'),
        presentations: [
          {
            title: 'Why was Leonhard Euler blind?',
            type: 'Keynote Presentation (In-person)',
            speaker: 'John David Bullock',
            affiliation: 'Wright State University, United States',
            description: `Leonhard Euler was one of the most eminent mathematicians of all time...`,
            speakerImage: 'https://via.placeholder.com/100',
          },
          {
            title: 'Developing resilience-based treatments for glaucoma',
            type: 'Keynote Presentation (In-person)',
            speaker: 'Simon John',
            affiliation: 'Columbia University, United States',
            description: `We use mice to determine molecular mechanisms that contribute...`,
            speakerImage: 'https://via.placeholder.com/100',
          },
        ],
      },
      {
        day: 2,
        date: new Date('2025-03-11'),
        presentations: [
          {
            title: 'The future of AI in Healthcare',
            type: 'Keynote Presentation (Online)',
            speaker: 'Jane Doe',
            affiliation: 'MIT, United States',
            description: `AI is transforming healthcare by enabling personalized medicine...`,
            speakerImage: 'https://via.placeholder.com/100',
          },
        ],
      },
      {
        day: 3,
        date: new Date('2025-03-12'),
        presentations: [
          {
            title: 'Quantum Computing and Cryptography',
            type: 'Keynote Presentation (Hybrid)',
            speaker: 'Dr. Alan Turing',
            affiliation: 'University of Cambridge, UK',
            description: `Quantum computing is poised to revolutionize cryptography...`,
            speakerImage: 'https://via.placeholder.com/100',
          },
        ],
      },
    ];
  }

  selectDay(index: number): void {
    this.selectedDay = index;
  }

  getDetails() {
    this.eventServices.getCompleteDetails(localStorage.getItem('id')).subscribe(e=> {
      this.itemsData = e['events_by_pk'].scientific_programs;
      this.scheduleData = this.itemsData;
    })
  }

}
