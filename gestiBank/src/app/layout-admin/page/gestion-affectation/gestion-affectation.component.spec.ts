import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAffectationComponent } from './gestion-affectation.component';

describe('GestionAffectationComponent', () => {
  let component: GestionAffectationComponent;
  let fixture: ComponentFixture<GestionAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
