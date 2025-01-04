import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfMoonComponent } from './half-moon.component';

describe('HalfMoonComponent', () => {
  let component: HalfMoonComponent;
  let fixture: ComponentFixture<HalfMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfMoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
