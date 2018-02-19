import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauClientModalComponent } from './nouveau-client-modal.component';

describe('NouveauClientModalComponent', () => {
  let component: NouveauClientModalComponent;
  let fixture: ComponentFixture<NouveauClientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauClientModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
