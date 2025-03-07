import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public navItems = [
    { name: 'Home', link: '' },
    { name: 'Conferences', link: '/ira-conferences' },
    { name: 'Sponsors & Exhibitors', link: '/sponsors-and-exhibitors' },
    { name: 'Contact Us', link: '/contact-us' },
    { name: 'Gallery', link: '/ira-gallery' },
  ];
  public socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/creativetim',
      iconClass: 'fa fa-facebook-square',
      tooltip: 'Like us on Facebook',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iraevents2025/',
      iconClass: 'fa fa-instagram',
      tooltip: 'Follow us on Instagram',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/IraGroup2025',
      iconClass: 'fa fa-twitter-square',
      tooltip: 'Follow us on Twitter',
    },
    {
      name: 'Github',
      url: 'https://github.com/creativetimofficial/ira-angular?ref=adsa-navbar',
      iconClass: 'fa fa-linkedin',
      tooltip: 'Star us on Github',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {

    const navbar = document.querySelector('.navbar') as HTMLElement;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
  
      if (scrollY > 100) {
        navbar.classList.add('scrolled'); // Add the 'scrolled' class when user scrolls
      } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
      }
    });
    
    // Collapse the navbar on route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isCollapsed = true;
      });
  }
}
