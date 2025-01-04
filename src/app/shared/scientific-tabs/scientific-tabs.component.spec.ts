import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificTabsComponent } from './scientific-tabs.component';

describe('ScientificTabsComponent', () => {
  let component: ScientificTabsComponent;
  let fixture: ComponentFixture<ScientificTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
