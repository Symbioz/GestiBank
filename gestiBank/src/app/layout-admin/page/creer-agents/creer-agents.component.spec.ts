import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerAgentsComponent } from './creer-agents.component';

describe('CreerAgentsComponent', () => {
  let component: CreerAgentsComponent;
  let fixture: ComponentFixture<CreerAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
