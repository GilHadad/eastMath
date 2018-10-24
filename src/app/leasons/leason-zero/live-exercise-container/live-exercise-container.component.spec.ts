import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveExerciseContainerComponent } from './live-exercise-container.component';

describe('LiveExerciseContainerComponent', () => {
  let component: LiveExerciseContainerComponent;
  let fixture: ComponentFixture<LiveExerciseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveExerciseContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveExerciseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
