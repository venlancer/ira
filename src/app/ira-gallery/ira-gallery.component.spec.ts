import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IraGalleryComponent } from './ira-gallery.component';

describe('IraGalleryComponent', () => {
  let component: IraGalleryComponent;
  let fixture: ComponentFixture<IraGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IraGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IraGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
