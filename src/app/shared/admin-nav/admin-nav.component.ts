import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { DOCUMENT, Location, PopStateEvent } from '@angular/common';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
 public pageName: string | null = null;
  public navItems: any = [
    { name: 'Admin Page', link: '' },
    { name: 'Create Page', link: 'create-page' }
  ];
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageName = this.route.snapshot['_routerState'].url.split('/')[1];
  }

  navigateToHome(e) {
    if(e=='Admin Page') {
      this.router.navigateByUrl("/"+this.pageName)
    }
  }
}
