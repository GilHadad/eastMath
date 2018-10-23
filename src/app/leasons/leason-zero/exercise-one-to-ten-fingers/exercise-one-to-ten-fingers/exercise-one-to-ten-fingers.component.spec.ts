import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOneToTenFingersComponent } from './exercise-one-to-ten-fingers.component';

describe('ExerciseOneToTenFingersComponent', () => {
  let component: ExerciseOneToTenFingersComponent;
  let fixture: ComponentFixture<ExerciseOneToTenFingersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseOneToTenFingersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseOneToTenFingersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
