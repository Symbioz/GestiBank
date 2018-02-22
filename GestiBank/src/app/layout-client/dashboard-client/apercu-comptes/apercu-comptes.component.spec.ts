import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuComptesComponent } from './apercu-comptes.component';

describe('ApercuComptesComponent', () => {
  let component: ApercuComptesComponent;
  let fixture: ComponentFixture<ApercuComptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApercuComptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
