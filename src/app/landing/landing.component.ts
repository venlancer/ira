import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  public cards = [
    {
      icon: 'ni ni-circle-08',
      title: 'Join Our Community',
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
      title: 'Explore Our Events',
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
      title: 'Download Resources',
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
  
  public teamMembers = [
    {
      name: 'Subbarayan Ragu',
      title: 'Managing Director',
      imageUrl: './assets/img/theme/team-1-800x800.jpg',
    },
    {
      name: 'Anvesh Varma',
      title: 'Managing Director',
      imageUrl: './assets/img/theme/team-2-800x800.jpg',
    },
    {
      name: 'Achyutha Ramani',
      title: 'CEO',
      imageUrl: './assets/img/theme/team-3-800x800.jpg',
    },
    {
      name: 'Renee M. Borges',
      title: 'Scientific Research Coordinator',
      imageUrl: './assets/img/theme/team-4-800x800.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
    var nucleoView = document.getElementsByClassName('icons-container')[0];
    window.addEventListener('scroll', function (event) {
    	if (this.isInViewport(nucleoView)) {
    		nucleoView.classList.add('on-screen');
    	}
      else{
        nucleoView.classList.remove('on-screen');
      }
    }.bind(this), false);
  }

  isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

}
