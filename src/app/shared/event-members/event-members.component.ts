import { Component, OnInit } from '@angular/core';
import { EventPopupComponent } from '../event-popup/event-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-members',
  templateUrl: './event-members.component.html',
  styleUrls: ['./event-members.component.scss']
})
export class EventMembersComponent implements OnInit {

  items = [
    {
      image: './assets/img/brand/Ian James Martins.jpg',
      title: 'Ian James Martins',
      description: 'INDEPENDENT SCIENTIST (Pride of Australia)',
      extraDetails: ':Ian James Martins, Dr. Ian James Martins is an Editor/Reveiwer for Open Acess Pub/MDPI journals, Frontiers, Scientific Reports (Nature), PLOS ONE and various other international journals. Journal. INSO 2023 is glad to announce that Ian James Martins has been confirmed f.',
    },
    {
      image: './assets/img/brand/Namrita Lall.png',
      title: 'Namrita Lall',
      description: 'University of Pretoria, South Africa',
      extraDetails: 'Namrita Lall, Namrita Lall is a Professor and NRF rated researcher in the Department of Plant and Soil Sciences at the University of Pretoria (UP), and holds a NRF/DST Chair in Plant health Products from Indigenous Knowledge Systems (IKS). She obtained her PhD in 2001.',
    },
    {
      image: './assets/img/brand/Lynne Bend.png',
      title: 'Lynne Bend',
      description: 'University of Florida, United States',
      extraDetails: 'Lynne Bend, Brandon Lucke-Wold was born and raised in Colorado Springs, CO. He graduated magna cum laude with a BS in Neuroscience and distinction in honors from Baylor University. He completed his MD/PhD, Master.',
    },
    {
      image: './assets/img/brand/Giulio Tarro.png',
      title: 'Giulio Tarro',
      description: 'de Beaumont Bonelli Foundation for Cancer Research, Italy',
      extraDetails: 'Giulio Tarro, Giulio Tarro graduated from Medicine School, Naples University (1962). Research Associate, Division of Virology and Cancer Research, Childrenâ€™s Hospital (1965-1968), Assistant Professor of Research Pediatrics, College Medicine (1968-1969), Cincinnati Un.',
    }
  ];


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(item: any) {
    const modalRef = this.modalService.open(EventPopupComponent);
    modalRef.componentInstance.item = item;
  }

}
