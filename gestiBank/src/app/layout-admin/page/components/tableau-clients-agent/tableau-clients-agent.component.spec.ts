import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauClientsAgentComponent } from './tableau-clients-agent.component';

describe('TableauClientsAgentComponent', () => {
  let component: TableauClientsAgentComponent;
  let fixture: ComponentFixture<TableauClientsAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauClientsAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauClientsAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
