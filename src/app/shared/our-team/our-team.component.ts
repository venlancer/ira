import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  public teamMembers = [
    {
      name: 'Subbarayan Ragu',
      title: 'Managing Director',
      imageUrl: './assets/img/theme/team-1-800x800.jpg',
    },
    {
      name: 'Anvesh Varma',
      title: 'Managing Director',
      imageUrl: './assets/img/theme/team-2-800x800.jpg',
    },
    {
      name: 'Achyutha Ramani',
      title: 'CEO',
      imageUrl: './assets/img/theme/team-3-800x800.jpg',
    },
    {
      name: 'Renee M. Borges',
      title: 'Scientific Research Coordinator',
      imageUrl: './assets/img/theme/team-4-800x800.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
