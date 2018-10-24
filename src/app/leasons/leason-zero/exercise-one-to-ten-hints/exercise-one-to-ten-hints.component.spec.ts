import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOneToTenHintsComponent } from './exercise-one-to-ten-hints.component';

describe('ExerciseOneToTenHintsComponent', () => {
  let component: ExerciseOneToTenHintsComponent;
  let fixture: ComponentFixture<ExerciseOneToTenHintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseOneToTenHintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseOneToTenHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
