import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  public teamMembers = [
    {
      name: 'Bernd Krone',
      title: 'Georg August University, Germany',
      imageUrl: './assets/img/01.jpeg',
    },
    {
      name: 'Dr. Wassil Nowicky',
      title: 'Nowicky Pharma, Austria',
      imageUrl: './assets/img/02.jpeg',
    },
    {
      name: 'Rashid OOZEER',
      title: 'Radiation Therapy Consulting, FRANCE',
      imageUrl: './assets/img/03.jpeg',
    },
    {
      name: 'Zhi Qiang Yao, MD, PhD',
      title: 'Division Chief | Research Division, ETSU Quillen College of Medicine, USA',
      imageUrl: './assets/img/04.jpeg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
