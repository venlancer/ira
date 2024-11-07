import { Component, OnInit } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ira-tabs',
  templateUrl: './ira-tabs.component.html',
  styleUrls: ['./ira-tabs.component.scss']
})
export class IraTabsComponent implements OnInit {

  activeTab = 1; // Initial active tab
  searchQuery: string = '';
  events = [
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Innovative Design Workshop',
      description: 'A hands-on workshop to explore modern design concepts.',
      organizer: 'Creative Minds',
      date: new Date(2024, 11, 1)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Future of Technology Conference',
      description: 'Join industry leaders to discuss the future of tech innovations.',
      organizer: 'Tech Innovators',
      date: new Date(2024, 11, 5)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'AI and Machine Learning Symposium',
      description: 'Dive deep into AI applications and advancements.',
      organizer: 'AI Masters',
      date: new Date(2024, 11, 7)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Data Science Expo',
      description: 'Exploring the latest trends in data science and analytics.',
      organizer: 'Data Wizards',
      date: new Date(2024, 11, 12)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Cybersecurity and Privacy Summit',
      description: 'A crucial event for understanding security in the digital age.',
      organizer: 'SecureTech',
      date: new Date(2024, 11, 15)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Cloud Computing Workshop',
      description: 'Master the cloud and its potential for business transformation.',
      organizer: 'CloudPioneers',
      date: new Date(2024, 11, 18)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Blockchain and Cryptocurrency Forum',
      description: 'Understand the impact of blockchain technology on various industries.',
      organizer: 'Crypto Innovators',
      date: new Date(2024, 11, 20)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Digital Marketing Conference',
      description: 'Learn the latest strategies to grow your business online.',
      organizer: 'Marketing Masters',
      date: new Date(2024, 11, 22)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Web Development Bootcamp',
      description: 'A comprehensive bootcamp to learn front-end and back-end development.',
      organizer: 'Dev Academy',
      date: new Date(2024, 11, 25)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Mobile App Development Seminar',
      description: 'Building cutting-edge mobile applications from start to finish.',
      organizer: 'AppCrafters',
      date: new Date(2024, 11, 28)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'IoT Solutions Expo',
      description: 'Explore the latest IoT devices and solutions transforming industries.',
      organizer: 'IoT Revolution',
      date: new Date(2024, 11, 30)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Artificial Intelligence Summit',
      description: 'Discuss the future of AI and its integration into business.',
      organizer: 'AI Leaders',
      date: new Date(2024, 11, 2)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Virtual Reality Workshop',
      description: 'Experience the immersive world of virtual reality and its applications.',
      organizer: 'Reality Creators',
      date: new Date(2024, 11, 10)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Tech Innovation Expo',
      description: 'Discover the next big tech innovations and trends.',
      organizer: 'InnovateTech',
      date: new Date(2024, 11, 14)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Sustainable Tech Conference',
      description: 'Learn how tech is contributing to a more sustainable world.',
      organizer: 'GreenTech Innovators',
      date: new Date(2024, 11, 17)
    }
];
  pastEvents = [
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Digital Transformation Summit',
      description: 'Exploring how digital technologies reshape industries.',
      organizer: 'Transform Leaders',
      date: new Date(2023, 5, 15)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Big Data & Analytics Conference',
      description: 'Analyzing big data to drive business success.',
      organizer: 'Data Insights Group',
      date: new Date(2023, 7, 20)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Cloud Computing Revolution',
      description: 'The future of cloud technology and infrastructure.',
      organizer: 'Cloud Innovators',
      date: new Date(2023, 3, 12)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'The AI Frontier Forum',
      description: 'Pioneering advancements in artificial intelligence.',
      organizer: 'AI Visionaries',
      date: new Date(2022, 11, 5)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Blockchain in Business Conference',
      description: 'Leveraging blockchain for business efficiency.',
      organizer: 'Blockchain Ventures',
      date: new Date(2023, 6, 18)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Mobile Tech Expo',
      description: 'Showcasing innovations in mobile technology.',
      organizer: 'Mobile First',
      date: new Date(2023, 4, 25)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Machine Learning & AI Symposium',
      description: 'Advanced techniques in machine learning and AI.',
      organizer: 'Smart Machines',
      date: new Date(2022, 9, 10)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Internet of Things (IoT) Forum',
      description: 'Exploring the impact of IoT on everyday life.',
      organizer: 'Connected World',
      date: new Date(2023, 2, 8)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Sustainable Tech and Energy Conference',
      description: 'Innovations in sustainable energy and technology.',
      organizer: 'EcoTech',
      date: new Date(2022, 10, 3)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Cybersecurity Insights Summit',
      description: 'Securing the digital future with modern security practices.',
      organizer: 'Security Experts',
      date: new Date(2023, 1, 14)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Virtual Reality & Augmented Reality Expo',
      description: 'Exploring VR/AR applications across industries.',
      organizer: 'Future Reality',
      date: new Date(2022, 12, 12)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'E-commerce and Digital Marketing Summit',
      description: 'Strategies for growth in e-commerce and digital marketing.',
      organizer: 'Digital Sales Hub',
      date: new Date(2022, 8, 22)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Fintech Innovation Forum',
      description: 'Latest trends in financial technology and banking.',
      organizer: 'Finance Next',
      date: new Date(2023, 0, 5)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Healthcare Technology Summit',
      description: 'Technological advancements in healthcare and medicine.',
      organizer: 'Health Innovators',
      date: new Date(2023, 3, 9)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Digital Learning and Education Conference',
      description: 'Revolutionizing education with digital tools.',
      organizer: 'EdTech Leaders',
      date: new Date(2022, 5, 19)
    }
  ]
  webinars = [
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Digital Transformation Summit',
      description: 'Exploring how digital technologies reshape industries.',
      organizer: 'Transform Leaders',
      date: new Date(2023, 5, 15)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Big Data & Analytics Conference',
      description: 'Analyzing big data to drive business success.',
      organizer: 'Data Insights Group',
      date: new Date(2023, 7, 20)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Cloud Computing Revolution',
      description: 'The future of cloud technology and infrastructure.',
      organizer: 'Cloud Innovators',
      date: new Date(2023, 3, 12)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'The AI Frontier Forum',
      description: 'Pioneering advancements in artificial intelligence.',
      organizer: 'AI Visionaries',
      date: new Date(2022, 11, 5)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Blockchain in Business Conference',
      description: 'Leveraging blockchain for business efficiency.',
      organizer: 'Blockchain Ventures',
      date: new Date(2023, 6, 18)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Mobile Tech Expo',
      description: 'Showcasing innovations in mobile technology.',
      organizer: 'Mobile First',
      date: new Date(2023, 4, 25)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Machine Learning & AI Symposium',
      description: 'Advanced techniques in machine learning and AI.',
      organizer: 'Smart Machines',
      date: new Date(2022, 9, 10)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Internet of Things (IoT) Forum',
      description: 'Exploring the impact of IoT on everyday life.',
      organizer: 'Connected World',
      date: new Date(2023, 2, 8)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Sustainable Tech and Energy Conference',
      description: 'Innovations in sustainable energy and technology.',
      organizer: 'EcoTech',
      date: new Date(2022, 10, 3)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Cybersecurity Insights Summit',
      description: 'Securing the digital future with modern security practices.',
      organizer: 'Security Experts',
      date: new Date(2023, 1, 14)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Virtual Reality & Augmented Reality Expo',
      description: 'Exploring VR/AR applications across industries.',
      organizer: 'Future Reality',
      date: new Date(2022, 12, 12)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'E-commerce and Digital Marketing Summit',
      description: 'Strategies for growth in e-commerce and digital marketing.',
      organizer: 'Digital Sales Hub',
      date: new Date(2022, 8, 22)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Fintech Innovation Forum',
      description: 'Latest trends in financial technology and banking.',
      organizer: 'Finance Next',
      date: new Date(2023, 0, 5)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Healthcare Technology Summit',
      description: 'Technological advancements in healthcare and medicine.',
      organizer: 'Health Innovators',
      date: new Date(2023, 3, 9)
    },
    {
      imageSrc: './assets/img/theme/designsystem.png',
      title: 'Digital Learning and Education Conference',
      description: 'Revolutionizing education with digital tools.',
      organizer: 'EdTech Leaders',
      date: new Date(2022, 5, 19)
    }
  ]
  
  filteredEvents = [...this.events];
  queryData = this.filteredEvents

  constructor() { }

  ngOnInit(): void {
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

  onTabChange(event) {
    if(event == 1) {
      this.filteredEvents = [...this.events];
      this.queryData = this.events
    }
    if(event == 2) {
      this.filteredEvents = [...this.pastEvents];
      this.queryData = this.pastEvents
    }
    if(event == 3) {
      this.filteredEvents = [...this.webinars];
      this.queryData = this.webinars
    }
  }


}
