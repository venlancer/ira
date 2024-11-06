import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { DOCUMENT, Location, PopStateEvent } from '@angular/common';
import { filter, Subscription } from 'rxjs';

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  hasScrolled() {

    var st = window.pageYOffset;
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    var navbar = document.getElementsByTagName('nav')[0];

    // If they scrolled down and are past the navbar, add class .headroom--unpinned.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      if (navbar.classList.contains('headroom--pinned')) {
        navbar.classList.remove('headroom--pinned');
        navbar.classList.add('headroom--unpinned');
      }
      // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
    } else {
      // Scroll Up
      //  $(window).height()
      if (st + window.innerHeight < document.body.scrollHeight) {
        // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
        if (navbar.classList.contains('headroom--unpinned')) {
          navbar.classList.remove('headroom--unpinned');
          navbar.classList.add('headroom--pinned');
        }
      }
    }

    lastScrollTop = st;
  };

  public isCollapsed = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  public navItems = [
    { name: 'Home', link: '' },
    { name: 'Conferences', link: '/ira-conferences' },
    // { name: 'Past Conferences', link: '/past-conferences' },
    // { name: 'Webinars', link: '/webinars' },
    { name: 'Gallery', link: '/ira-gallery' }
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
      url: 'https://www.instagram.com/iraevents2025/',
      iconClass: 'fa fa-instagram',
      tooltip: 'Follow us on Instagram'
    },
    {
      name: 'Twitter',
      url: ' https://x.com/IraGroup2025',
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

  private _router: Subscription;
  constructor(private renderer: Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element: ElementRef, public location: Location) {
  }

  ngOnInit() {

    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }
      this.renderer.listen('window', 'scroll', (event) => {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
          // add logic
          navbar.classList.add('headroom--not-top');
        } else {
          // remove logic
          navbar.classList.remove('headroom--not-top');
        }
      });
    });
    this.hasScrolled();

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
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
  }

  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee === '/home') {
      return true;
    }
    else {
      return false;
    }
  }

}
