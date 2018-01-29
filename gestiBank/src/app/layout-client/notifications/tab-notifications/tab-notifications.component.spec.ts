import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNotificationsComponent } from './tab-notifications.component';

describe('TabNotificationsComponent', () => {
  let component: TabNotificationsComponent;
  let fixture: ComponentFixture<TabNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
