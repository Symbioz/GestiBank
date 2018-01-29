import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerAgentsComponent } from './editer-agents.component';

describe('EditerAgentsComponent', () => {
  let component: EditerAgentsComponent;
  let fixture: ComponentFixture<EditerAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
