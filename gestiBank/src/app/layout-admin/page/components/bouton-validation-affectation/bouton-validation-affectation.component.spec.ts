import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonValidationAffectationComponent } from './bouton-validation-affectation.component';

describe('BoutonValidationAffectationComponent', () => {
  let component: BoutonValidationAffectationComponent;
  let fixture: ComponentFixture<BoutonValidationAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonValidationAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonValidationAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
