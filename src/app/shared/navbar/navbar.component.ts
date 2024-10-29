import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    public  navItems = [
        { name: 'Home', link: '/home' },
        { name: 'Upcoming Conferences', link: '/upcoming-conferences' },
        { name: 'Past Conferences', link: '/past-conferences' },
        { name: 'Webinars', link: '/webinars' },
        { name: 'Gallery', link: '/gallery' }
      ];
    public socialLinks = [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/creativetim',
          iconClass: 'fa fa-facebook-square',
          tooltip: 'Like us on Facebook'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/creativetimofficial',
          iconClass: 'fa fa-instagram',
          tooltip: 'Follow us on Instagram'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/creativetim',
          iconClass: 'fa fa-twitter-square',
          tooltip: 'Follow us on Twitter'
        },
        {
          name: 'Github',
          url: 'https://github.com/creativetimofficial/ira-angular?ref=adsa-navbar',
          iconClass: 'fa fa-linkedin',
          tooltip: 'Star us on Github'
        }
      ];

    constructor(public location: Location, private router: Router) {
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }

}
