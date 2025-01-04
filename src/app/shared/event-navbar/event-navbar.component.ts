import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-navbar',
  templateUrl: './event-navbar.component.html',
  styleUrls: ['./event-navbar.component.scss']
})
export class EventNavbarComponent implements OnInit {
  public pageName: string | null = null;
  public navItems: any = [
    { name: 'Home', link: '' }, // For DynamicLandingComponent
    { name: 'Abstract Submission', link: 'abstract-submission' },
    { name: 'Registration', link: 'event-registration' },
    { name: 'Scientific Committee', link: 'event-members' }
  ];
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageName = this.route.snapshot['_routerState'].url.split('/')[1];
    // this.route.params.subscribe(params => {
    //   this.pageName = params['pageName'] || 'dynamicpage'; // Fallback to 'dynamicpage'
    // });
  }

  navigateToHome(e) {
    if(e=='Home') {
      this.router.navigateByUrl("/"+this.pageName)
    }
  }

}
