import { Component, OnInit } from '@angular/core';
import * as data from './strings.json';

interface Exercise {
  question: string;
  answer: string;
  hint: boolean;
  startTime: Date;
  endTime?: Date;
  rankFromOneToFive?: number;
}

@Component({
  selector: 'app-exercise-one-to-ten-fingers',
  templateUrl: './exercise-one-to-ten-fingers.component.html',
  styleUrls: ['./exercise-one-to-ten-fingers.component.css']
})
export class ExerciseOneToTenFingersComponent implements OnInit {
  imagesSrc = (<any>data).images;
  exercise: Exercise;
  constructor() { }

  ngOnInit() {
    this.exercise = this.createNewExercise();
  }

  createNewExercise(): Exercise {
    const num = Math.floor(Math.random() * 9) + 1;
    const newExercise = {
      question: this.imagesSrc[`finger_${num}`],
      answer: this.imagesSrc[`finger_${num}`],
      hint: false,
      startTime: new Date(),
      rankFromOneToFive: 5
      // create scale
    };
    return newExercise;
  }
}
