import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFocusComponent } from './subject-focus.component';

describe('SubjectFocusComponent', () => {
  let component: SubjectFocusComponent;
  let fixture: ComponentFixture<SubjectFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
