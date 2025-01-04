import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTblComponent } from './custom-tbl.component';

describe('CustomTblComponent', () => {
  let component: CustomTblComponent;
  let fixture: ComponentFixture<CustomTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
