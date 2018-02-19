import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNouveauClientsComponent } from './gestion-nouveau-clients.component';

describe('GestionNouveauClientsComponent', () => {
  let component: GestionNouveauClientsComponent;
  let fixture: ComponentFixture<GestionNouveauClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionNouveauClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNouveauClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
