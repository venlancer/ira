import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlService } from 'src/app/services/graphql.service';
import { SupabaseService } from 'src/app/supabase.service';
import { GET_EVENTS } from '../../graphql/queries'; // Import query
import { EventService } from 'src/app/services/event.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-ira-tabs',
  templateUrl: './ira-tabs.component.html',
  styleUrls: ['./ira-tabs.component.scss']
})
export class IraTabsComponent implements OnInit {

  activeTab = 1; // Initial active tab
  searchQuery: string = '';
  upcomingEvents = [];
  pastEvents = [];
  webinars = [];
  public events: any;
  isLoading = true; // Spinner control
  noDataAvailable = false;

  tabs = [
    { id: 1, label: 'Upcoming Conferences', events: [] },
    { id: 2, label: 'Past Conferences', events: [] },
    { id: 3, label: 'Webinars', events: [] }
  ];

  filteredEvents = [];
  queryData = [];

  constructor(private router: Router, private eventService: EventService, private sharedData: SharedDataService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (response) => {
        this.events = response.event_details; // Assign response to events array
        this.categorizeEvents();
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  categorizeEvents(): void {
    const currentDate = new Date();
    this.upcomingEvents = [];
    this.pastEvents = [];
    this.webinars = [];

    this.events.forEach(event => {
      const eventEndDate = new Date(event.end_date);
      if (event.event_type.toLowerCase() === 'conference') {
        if (eventEndDate < currentDate) {
          this.pastEvents.push(event);
        } else {
          this.upcomingEvents.push(event);
        }
      } else if (event.event_type.toLowerCase() === 'webinar') {
        this.webinars.push(event);
      }
    });

    // Assign categorized data to tabs
    this.tabs[0].events = this.upcomingEvents;
    this.tabs[1].events = this.pastEvents;
    this.tabs[2].events = this.webinars;

    this.onTabChange(this.activeTab);
  }

  filterEvents() {
    if (this.searchQuery.trim() === '') {
      this.filteredEvents = [...this.queryData];
    } else {
      this.filteredEvents = this.queryData.filter(event =>
        event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.organizer.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  navigateToPage(pageName: string, e): void {
    this.eventService.getEventsById(e.id).subscribe(e=> {
      const id = e.events[0].id;
      localStorage.setItem('id', id)
      this.sharedData.setEventData(e.events[0].id);
      const formattedName = this.formatString(pageName);
      const url = this.router.serializeUrl(this.router.createUrlTree([`/${formattedName}`]));
      window.open(url, '_blank');
    })
  }

  formatString(input) {
    return input.toLowerCase().replace(/\s+/g, '');
  }

  onTabChange(eventId: number) {
    if (eventId === 1) {
      this.filteredEvents = [...this.upcomingEvents];
      this.queryData = this.upcomingEvents;
    } else if (eventId === 2) {
      this.filteredEvents = [...this.pastEvents];
      this.queryData = this.pastEvents;
    } else if (eventId === 3) {
      this.filteredEvents = [...this.webinars];
      this.queryData = this.webinars;
    }
  }
}
