import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-section',
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss']
})
export class EventSectionComponent implements OnInit, OnChanges {
  @Input() eventImg: any;
  imageUrl:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const originalUrl = this.eventImg; // or wherever you're getting it
    const cleanImageUrl = originalUrl.split('?')[0];
    this.imageUrl = cleanImageUrl;

  }

  navigateTo(path: string): void {
    var urlPath = window.location.href.split('/').pop();
    this.router.navigateByUrl(urlPath + path);
  }

}
