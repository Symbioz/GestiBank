import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletTableauComponent } from './onglet-tableau.component';

describe('OngletTableauComponent', () => {
  let component: OngletTableauComponent;
  let fixture: ComponentFixture<OngletTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngletTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
