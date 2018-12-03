import { Component, OnInit } from '@angular/core';
import * as data from './config.json';
import {list} from "postcss";

interface Exercise {
  question: string;
  answer: number;
  hint: boolean;
  startTime: Date;
  endTime: Date;
  rankFromOneToFive?: number;
  answers: object;
  wrongAnswers: Number[];
}

@Component({
  selector: 'app-exercise-one-to-ten-fingers',
  templateUrl: './exercise-one-to-ten-fingers.component.html',
  styleUrls: ['./exercise-one-to-ten-fingers.component.css']
})
export class ExerciseOneToTenFingersComponent implements OnInit {
  imagesSrc = (<any>data).images;
  configStrings = (<any>data).configStrings;
  exercise: Exercise;
  constructor() { }

  ngOnInit() {
    this.exercise = this.createNewExercise(0);
  }

  onAnswerClick(ans,e) {
    if(ans.index === this.exercise.answer){
      this.exercise.endTime = new Date();
      //check how much time it took and update the rank
      this.exercise = this.createNewExercise(this.exercise.answer);
    }else{
      //change color for this element
      this.exercise.wrongAnswers.push(ans.index);
      ans.active = false;
    }
    //this.updateScale();
  }

  createNewExercise(lastAnswer): Exercise {
    let questionOptions = this.configStrings.answerOptions;
    questionOptions = questionOptions.filter(num => num !== lastAnswer);
    const rand = Math.floor(Math.random() * 4) + 0;
    let selectedQuestion = questionOptions[rand];
    let answers = this.configStrings.answerOptions;
    const newExercise = {
      question: this.imagesSrc[`finger_${selectedQuestion}`],
      answer: selectedQuestion,
      hint: false,
      startTime: new Date(),
      rankFromOneToFive: 0,
      answers:answers.map(item => {
        return {index: item, active: true}
      }),
      wrongAnswers: [],
      endTime: new Date()

      // create scale
    };
    return newExercise;
  }
}
