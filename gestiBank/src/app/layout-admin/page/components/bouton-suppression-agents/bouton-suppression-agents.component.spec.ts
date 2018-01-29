import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonSuppressionAgentsComponent } from './bouton-suppression-agents.component';

describe('BoutonSuppressionAgentsComponent', () => {
  let component: BoutonSuppressionAgentsComponent;
  let fixture: ComponentFixture<BoutonSuppressionAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonSuppressionAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonSuppressionAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
