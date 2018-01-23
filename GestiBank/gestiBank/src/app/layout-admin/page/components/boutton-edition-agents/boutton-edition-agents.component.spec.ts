import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonEditionAgentsComponent } from './boutton-edition-agents.component';

describe('BouttonEditionAgentsComponent', () => {
  let component: BouttonEditionAgentsComponent;
  let fixture: ComponentFixture<BouttonEditionAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouttonEditionAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouttonEditionAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
