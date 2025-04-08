import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

@Input() conferenceschedules:any;

public timelineData = 
[
  {
    dayLabel: 'Day 1, April 14th 2025',
    events: [
      {
        time: '09:00 - 09:30',
        title: 'Opening Ceremony',
        description: 'Join us for the official opening remarks and introduction.',
      },
      {
        time: '09:30 - 12:00',
        title: 'Keynote Forum',
        description: 'Leading experts share insights on the latest industry trends.',
      },
      {
        time: '12:00 - 13:00',
        title: 'Lunch Break',
        description: 'Enjoy a break and connect with fellow attendees.',
      },
      {
        time: '13:00 - 14:00',
        title: 'Workshops',
        description: 'Hands-on sessions led by industry practitioners.',
      },
      {
        time: '14:00 - 15:00',
        title: 'Symposia',
        description: 'Focused discussions on emerging topics and challenges.',
      },
      {
        time: '15:00 - 16:30',
        title: 'Oral Presentations',
        description: 'Researchers present their findings and answer Q&A.',
      },
      {
        time: '16:30 - 17:00',
        title: 'Networking Break',
        description: 'Grab refreshments and meet fellow participants.',
      },
      {
        time: '17:00 - 18:00',
        title: 'Oral Presentations',
        description: 'Continued session for additional speaker presentations.',
      },
    ],
  },
  {
    dayLabel: 'Day 2, April 15th 2025',
    events: [
      {
        time: '09:00 - 12:00',
        title: 'Keynote Forum',
        description: 'Another round of keynote addresses from top thought leaders.',
      },
      {
        time: '12:00 - 12:30',
        title: 'Oral Presentations',
        description: 'Selected speakers delve deeper into specialized research.',
      },
      {
        time: '12:30 - 13:00',
        title: 'Lunch Break',
        description: 'A brief break for lunch and informal discussions.',
      },
      {
        time: '14:00 - 15:00',
        title: 'Young Researchers Forum',
        description: 'Emerging scholars showcase innovative studies.',
      },
      {
        time: '15:00 - 16:30',
        title: 'Poster Presentations',
        description: 'Engage with presenters at interactive poster stations.',
      },
      {
        time: '16:30 - 17:30',
        title: 'Video Presentations',
        description: 'Short film and video demos featuring new research highlights.',
      },
      {
        time: '17:30 - 18:00',
        title: 'Certificates & Awards',
        description: 'Acknowledging outstanding contributions and achievements.',
      },
      {
        time: '18:00 - 18:30',
        title: 'Closing Ceremony',
        description: 'Final remarks, farewell, and wrap-up of the conference.',
      },
    ],
  },
];

activeTabIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change:SimpleChanges) {
    this.timelineData = this.conferenceschedules;
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
  }

}
