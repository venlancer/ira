import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info-cards',
  templateUrl: './company-info-cards.component.html',
  styleUrls: ['./company-info-cards.component.scss']
})
export class CompanyInfoCardsComponent implements OnInit {

  public cards = [
    {
      icon: 'ni ni-circle-08',
      title: 'Join Our Conferences',
      description: 'Become part of a vibrant global network of innovators and professionals who are passionate about advancing their fields. Connect, collaborate, and share insights with like-minded individuals committed to making a difference.',
      badges: [
        { text: 'networking', class: 'badge-info' },
        { text: 'collaboration', class: 'badge-info' },
      ],
      link: '/community',
      iconClass: 'icon-shape-info',
      buttonClass: 'btn-info'
    },
    {
      icon: 'ni ni-calendar-grid-58',
      title: 'Sponsers & Exhibitors',
      description: 'Participate in our cutting-edge conferences designed to advance your knowledge and skills. Engage with thought leaders, attend informative sessions, and immerse yourself in discussions that shape the future of your industry.',
      badges: [
        { text: 'events', class: 'badge-success' },
        { text: 'learning', class: 'badge-success' },
      ],
      link: '/events',
      iconClass: 'icon-shape-success',
      buttonClass: 'btn-success'
    },
    {
      icon: 'ni ni-folder-17',
      title: 'Explore Our Gallery',
      description: 'Access a wealth of exclusive materials that enhance your conference experience and support your professional development. From research papers to presentation slides, our resources are tailored to enrich your learning journey.',
      badges: [
        { text: 'resources', class: 'badge-warning' },
        { text: 'downloads', class: 'badge-warning' },
      ],
      link: '/resources',
      iconClass: 'icon-shape-warning',
      buttonClass: 'btn-warning'
    },
    {
      "icon": "ni ni-collection",
      "title": "Explore Our Workshops",
      "description": "Dive into hands-on workshops designed to elevate your skills and knowledge. Our expert-led sessions cover a range of topics, providing practical insights and valuable techniques to enhance your professional toolkit.",
      "badges": [
        { "text": "workshops", "class": "badge-info" },
        { "text": "skills", "class": "badge-info" }
      ],
      "link": "/workshops",
      "iconClass": "icon-shape-info",
      "buttonClass": "btn-info"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
