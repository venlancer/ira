import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNavbarComponent } from './event-navbar.component';

describe('EventNavbarComponent', () => {
  let component: EventNavbarComponent;
  let fixture: ComponentFixture<EventNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
