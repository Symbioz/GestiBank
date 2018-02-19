import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientModalComponent } from './detail-client-modal.component';

describe('DetailClientModalComponent', () => {
  let component: DetailClientModalComponent;
  let fixture: ComponentFixture<DetailClientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClientModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
