import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCuroselComponent } from './past-curosel.component';

describe('PastCuroselComponent', () => {
  let component: PastCuroselComponent;
  let fixture: ComponentFixture<PastCuroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastCuroselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastCuroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
