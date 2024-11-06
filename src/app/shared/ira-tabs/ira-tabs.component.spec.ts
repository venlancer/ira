import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IraTabsComponent } from './ira-tabs.component';

describe('IraTabsComponent', () => {
  let component: IraTabsComponent;
  let fixture: ComponentFixture<IraTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IraTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IraTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
