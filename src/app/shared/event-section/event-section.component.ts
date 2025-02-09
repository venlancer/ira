import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-section',
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss']
})
export class EventSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

}
