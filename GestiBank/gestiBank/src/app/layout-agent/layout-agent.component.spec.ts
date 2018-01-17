import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAgentComponent } from './layout-agent.component';

describe('LayoutAgentComponent', () => {
  let component: LayoutAgentComponent;
  let fixture: ComponentFixture<LayoutAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
