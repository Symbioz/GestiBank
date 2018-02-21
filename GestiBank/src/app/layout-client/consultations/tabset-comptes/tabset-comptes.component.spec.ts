import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsetComptesComponent } from './tabset-comptes.component';

describe('TabsetComptesComponent', () => {
  let component: TabsetComptesComponent;
  let fixture: ComponentFixture<TabsetComptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsetComptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsetComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
