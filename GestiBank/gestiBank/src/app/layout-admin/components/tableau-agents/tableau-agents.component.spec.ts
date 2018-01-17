import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAgentsComponent } from './tableau-agents.component';

describe('TableauAgentsComponent', () => {
  let component: TableauAgentsComponent;
  let fixture: ComponentFixture<TableauAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
