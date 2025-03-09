import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubpageComponent } from './create-subpage.component';

describe('CreateSubpageComponent', () => {
  let component: CreateSubpageComponent;
  let fixture: ComponentFixture<CreateSubpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSubpageComponent]
    });
    fixture = TestBed.createComponent(CreateSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
