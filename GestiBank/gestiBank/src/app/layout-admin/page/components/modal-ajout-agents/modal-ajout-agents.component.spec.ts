import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjoutAgentsComponent } from './modal-ajout-agents.component';

describe('ModalAjoutAgentsComponent', () => {
  let component: ModalAjoutAgentsComponent;
  let fixture: ComponentFixture<ModalAjoutAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjoutAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjoutAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
