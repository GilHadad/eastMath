import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseMissingNumberComponent } from './exercise-missing-number.component';

describe('ExerciseMissingNumberComponent', () => {
  let component: ExerciseMissingNumberComponent;
  let fixture: ComponentFixture<ExerciseMissingNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseMissingNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseMissingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
