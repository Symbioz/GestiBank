import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDemandeCompteComponent } from './tableau-demande-compte.component';

describe('TableauDemandeCompteComponent', () => {
  let component: TableauDemandeCompteComponent;
  let fixture: ComponentFixture<TableauDemandeCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauDemandeCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDemandeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
