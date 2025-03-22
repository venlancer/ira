import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-dynamic-landing',
  templateUrl: './dynamic-landing.component.html',
  styleUrls: ['./dynamic-landing.component.scss']
})
export class DynamicLandingComponent implements OnInit {

  public event:any;
  public pageDetail:any;

  constructor(private eventServices:EventService, private sharedData: SharedDataService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.eventServices.getCompleteDetails(localStorage.getItem('id')).subscribe(e=> {
      this.pageDetail = e['events_by_pk'];
      console.log(this.pageDetail);
    })
  }

}
