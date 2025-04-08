import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleApiService } from '../services/google-api.service';

@Component({
  selector: 'app-ira-gallery',
  templateUrl: './ira-gallery.component.html',
  styleUrls: ['./ira-gallery.component.scss']
})
export class IraGalleryComponent implements OnInit {
  @ViewChild('imageModal', { static: true }) imageModal;
  selectedImage: any = null;
  photos: any[] = [];
  isLoading = false;

  images = [
    { src: './assets/img/gallerypictures/1.jpg', title: '1', caption: 'Image of 1', alt: '1' },
    { src: './assets/img/gallerypictures/2.jpg', title: '2', caption: 'Image of 2', alt: '2' },
    { src: './assets/img/gallerypictures/3.jpg', title: '3', caption: 'Image of 3', alt: '3' },
    { src: './assets/img/gallerypictures/5.png', title: '5', caption: 'Image of 5', alt: '5' },
    { src: './assets/img/gallerypictures/Ann-Vote-30-400x400.jpg', title: 'Ann Vote', caption: 'Image of Ann Vote', alt: 'Ann Vote' },
    { src: './assets/img/gallerypictures/Antezana-500x500px-400x400.png', title: 'Antezana', caption: 'Image of Antezana', alt: 'Antezana' },
    { src: './assets/img/gallerypictures/Black-500x500px-400x400.png', title: 'Black', caption: 'Image of Black', alt: 'Black' },
    { src: './assets/img/gallerypictures/Booth-500x500-1-400x400.png', title: 'Booth', caption: 'Image of Booth', alt: 'Booth' },
    { src: './assets/img/gallerypictures/brian-gora-1-400x400.jpg', title: 'Brian Gora', caption: 'Image of Brian Gora', alt: 'Brian Gora' },
    { src: './assets/img/gallerypictures/Byrne-500x500-1-400x400.png', title: 'Byrne', caption: 'Image of Byrne', alt: 'Byrne' },
    { src: './assets/img/gallerypictures/C-O-Speaker-Jon-Colby-400x400.jpeg', title: 'C O Speaker Jon Colby', caption: 'Image of C O Speaker Jon Colby', alt: 'C O Speaker Jon Colby' },
    { src: './assets/img/gallerypictures/C-Webb-500x500-1-400x400.jpg', title: 'C Webb', caption: 'Image of C Webb', alt: 'C Webb' },
    { src: './assets/img/gallerypictures/Cederberg-500x500px-400x400.png', title: 'Cederberg', caption: 'Image of Cederberg', alt: 'Cederberg' },
    { src: './assets/img/gallerypictures/Coffey-500x500-1-400x400.png', title: 'Coffey', caption: 'Image of Coffey', alt: 'Coffey' },
    { src: './assets/img/gallerypictures/Deprey-500x500-1-400x400.png', title: 'Deprey', caption: 'Image of Deprey', alt: 'Deprey' },
    { src: './assets/img/gallerypictures/Fredlund-500x500-1-400x400.png', title: 'Fredlund', caption: 'Image of Fredlund', alt: 'Fredlund' },
    { src: './assets/img/gallerypictures/Ganapati_Srinivasa_Omics_Data_Automation.png', title: 'Ganapati Srinivasa Omics Data Automation', caption: 'Image of Ganapati Srinivasa Omics Data Automation', alt: 'Ganapati Srinivasa Omics Data Automation' },
    { src: './assets/img/gallerypictures/Gee-500x500-1-400x400.png', title: 'Gee', caption: 'Image of Gee', alt: 'Gee' },
    { src: './assets/img/gallerypictures/Geroux-500x500-1-400x400.png', title: 'Geroux', caption: 'Image of Geroux', alt: 'Geroux' },
    { src: './assets/img/gallerypictures/Headshot-2-400x400.jpg', title: 'Headshot 2', caption: 'Image of Headshot 2', alt: 'Headshot 2' },
    { src: './assets/img/gallerypictures/JM-Headshot-500-400x400.jpg', title: 'JM Headshot', caption: 'Image of JM Headshot', alt: 'JM Headshot' },
    { src: './assets/img/gallerypictures/Jon-Lokhorst-Portrait-400x400.jpg', title: 'Jon Lokhorst Portrait', caption: 'Image of Jon Lokhorst Portrait', alt: 'Jon Lokhorst Portrait' },
    { src: './assets/img/gallerypictures/Jones-Loflin-Promo-Photo-3-400x400.jpg', title: 'Jones Loflin Promo Photo', caption: 'Image of Jones Loflin Promo Photo', alt: 'Jones Loflin Promo Photo' },
    { src: './assets/img/gallerypictures/Mammano-500x500-1-400x400.png', title: 'Mammano', caption: 'Image of Mammano', alt: 'Mammano' },
    { src: './assets/img/gallerypictures/Mark-Hunter-Headshot-400x400.jpg', title: 'Mark Hunter Headshot', caption: 'Image of Mark Hunter Headshot', alt: 'Mark Hunter Headshot' },
    { src: './assets/img/gallerypictures/Nancy-500-400x400.jpeg', title: 'Nancy', caption: 'Image of Nancy', alt: 'Nancy' },
    { src: './assets/img/gallerypictures/Olsen-500x500-1-400x400.png', title: 'Olsen', caption: 'Image of Olsen', alt: 'Olsen' },
    { src: './assets/img/gallerypictures/Overson-500x500-1-400x400.png', title: 'Overson', caption: 'Image of Overson', alt: 'Overson' },
    { src: './assets/img/gallerypictures/Pancero-500x500px-400x400.png', title: 'Pancero', caption: 'Image of Pancero', alt: 'Pancero' },
    { src: './assets/img/gallerypictures/RoxaneBattle_HEADSHOT_MAY-2024-400x400.jpg', title: 'Roxane Battle Headshot May 2024', caption: 'Image of Roxane Battle Headshot May 2024', alt: 'Roxane Battle Headshot May 2024' },
    { src: './assets/img/gallerypictures/Seth-500x500-1-400x400.png', title: 'Seth', caption: 'Image of Seth', alt: 'Seth' },
    { src: './assets/img/gallerypictures/TD-400x400.jpg', title: 'TD', caption: 'Image of TD', alt: 'TD' }
  ];
  

  constructor(private modalService: NgbModal, private googleApiService: GoogleApiService) { }

  async ngOnInit() {
    // this.isLoading = true;
    // try {
    //   await this.googleApiService.initializeGapi();
    //   if (this.googleApiService.isSignedIn()) {
    //     console.log('User is already signed in');
    //     this.photos = await this.googleApiService.fetchPhotos();
    //   } else {
    //     console.log('User is not signed in, signing in...');
    //     await this.googleApiService.signIn();
    //     this.photos = await this.googleApiService.fetchPhotos();
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // } finally {
    //   this.isLoading = false;
    // }
  }

  openModal(image: any) {
    this.selectedImage = image;
    this.modalService.open(this.imageModal, { centered: true, size: 'xl' });  // 'x
  }

}
