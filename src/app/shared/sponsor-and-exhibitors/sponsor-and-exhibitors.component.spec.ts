import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorAndExhibitorsComponent } from './sponsor-and-exhibitors.component';

describe('SponsorAndExhibitorsComponent', () => {
  let component: SponsorAndExhibitorsComponent;
  let fixture: ComponentFixture<SponsorAndExhibitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorAndExhibitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorAndExhibitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
