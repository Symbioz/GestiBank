import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEnCoursComponent } from './demande-en-cours.component';

describe('DemandeEnCoursComponent', () => {
  let component: DemandeEnCoursComponent;
  let fixture: ComponentFixture<DemandeEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
