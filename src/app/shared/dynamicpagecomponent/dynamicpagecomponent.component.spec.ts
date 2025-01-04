import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicpagecomponentComponent } from './dynamicpagecomponent.component';

describe('DynamicpagecomponentComponent', () => {
  let component: DynamicpagecomponentComponent;
  let fixture: ComponentFixture<DynamicpagecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicpagecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicpagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
