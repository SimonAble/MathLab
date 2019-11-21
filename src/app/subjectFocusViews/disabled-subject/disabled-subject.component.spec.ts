import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledSubjectComponent } from './disabled-subject.component';

describe('DisabledSubjectComponent', () => {
  let component: DisabledSubjectComponent;
  let fixture: ComponentFixture<DisabledSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
