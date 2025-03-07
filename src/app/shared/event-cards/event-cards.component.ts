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

  formattedImageSrc: string = '';

  constructor() { }

  ngOnInit(): void {
    this.formatBase64Image();
  }

  formatBase64Image(): void {
    if (this.imageSrc && !this.imageSrc.startsWith('data:image')) {
      // Ensure Base64 string starts with 'data:image/png;base64,'
      this.formattedImageSrc = `data:image/png;base64,${this.imageSrc}`;
    } else {
      this.formattedImageSrc = this.imageSrc; // Already formatted
    }
  }

}
