import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-popup',
  templateUrl: './event-popup.component.html',
  styleUrls: ['./event-popup.component.scss']
})
export class EventPopupComponent implements OnInit {
  @Input() item: any;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }

  ngOnInit(): void {
  }

}
