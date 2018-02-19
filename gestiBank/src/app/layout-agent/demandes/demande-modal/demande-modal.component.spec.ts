import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeModalComponent } from './demande-modal.component';

describe('DemandeModalComponent', () => {
  let component: DemandeModalComponent;
  let fixture: ComponentFixture<DemandeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
