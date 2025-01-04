import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractSubmissionComponent } from './abstract-submission.component';

describe('AbstractSubmissionComponent', () => {
  let component: AbstractSubmissionComponent;
  let fixture: ComponentFixture<AbstractSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
