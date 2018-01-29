import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCreationAgentsComponent } from './bouton-creation-agents.component';

describe('BoutonCreationAgentsComponent', () => {
  let component: BoutonCreationAgentsComponent;
  let fixture: ComponentFixture<BoutonCreationAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonCreationAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonCreationAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
