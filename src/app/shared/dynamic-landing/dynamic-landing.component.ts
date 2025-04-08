import { Component, Input, OnInit } from '@angular/core';
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
  public startDate:string;
  public endDate:string;

  constructor(private eventServices:EventService, private sharedData: SharedDataService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.eventServices.getCompleteDetails(localStorage.getItem('id')).subscribe(e=> {
      this.pageDetail = e['events_by_pk'];
      this.startDate = this.pageDetail.scientific_programs[0].date;
      this.endDate = this.pageDetail.scientific_programs[this.pageDetail.scientific_programs.length-1].date;
    })
  }

}
