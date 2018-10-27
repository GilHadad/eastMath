import { Component, OnInit } from '@angular/core';
import * as data from './strings.json';

interface exercise {
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
  exercise: exercise;
  constructor() { }

  ngOnInit() {
    this.exercise = this.createNewExercise();
  }

  createNewExercise(): exercise {
    const num = Math.floor(Math.random() * 9) + 1
    let exercise = {
      question: this.imagesSrc[`finger_${num}`],
      answer: this.imagesSrc[`finger_${num}`],
      hint: false,
      startTime: new Date(),
      rankFromOneToFive: 5
      //create scale
    }
    return exercise
  }
}
