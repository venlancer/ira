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
    { src: './assets/img/theme/designsystem.png', title: 'Image 1', caption: 'This is Image 1', alt: 'Image 1' },
    { src: './assets/img/theme/img-1-1200x1000.jpg', title: 'Image 2', caption: 'This is Image 2', alt: 'Image 2' },
    { src: './assets/img/theme/img-2-1200x1000.jpg', title: 'Image 3', caption: 'This is Image 3', alt: 'Image 3' },
    { src: './assets/img/theme/designsystem.png', title: 'Image 1', caption: 'This is Image 1', alt: 'Image 1' },
    { src: './assets/img/theme/img-1-1200x1000.jpg', title: 'Image 2', caption: 'This is Image 2', alt: 'Image 2' },
    { src: './assets/img/theme/img-2-1200x1000.jpg', title: 'Image 3', caption: 'This is Image 3', alt: 'Image 3' },
    { src: './assets/img/theme/designsystem.png', title: 'Image 1', caption: 'This is Image 1', alt: 'Image 1' },
    { src: './assets/img/theme/img-1-1200x1000.jpg', title: 'Image 2', caption: 'This is Image 2', alt: 'Image 2' },
    { src: './assets/img/theme/img-2-1200x1000.jpg', title: 'Image 3', caption: 'This is Image 3', alt: 'Image 3' },
    { src: './assets/img/theme/designsystem.png', title: 'Image 1', caption: 'This is Image 1', alt: 'Image 1' },
    { src: './assets/img/theme/img-1-1200x1000.jpg', title: 'Image 2', caption: 'This is Image 2', alt: 'Image 2' },
    { src: './assets/img/theme/img-2-1200x1000.jpg', title: 'Image 3', caption: 'This is Image 3', alt: 'Image 3' }
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
