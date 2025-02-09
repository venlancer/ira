import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSectionDetailsComponent } from './event-section-details.component';

describe('EventSectionDetailsComponent', () => {
  let component: EventSectionDetailsComponent;
  let fixture: ComponentFixture<EventSectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
