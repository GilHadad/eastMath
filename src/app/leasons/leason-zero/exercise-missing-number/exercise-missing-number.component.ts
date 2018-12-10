import { Component, OnInit } from '@angular/core';
import * as conf from './config.json';
import { arrayShuffle } from 'src/app/app.utils';

interface Statistics {
  totalTime: number;
  wrongAnswers: boolean;
  score: number;
}

interface Exercise {
  series: number[];
  answer: number;
  bank: number[];
  answerBank: number[];
  optionsNumber: number;
  qSeriesSartFrom: number;
  qSeriesLenght: number;
  wrongAnswers: number[];
  startTime: number;
  endTime: number;
  statistics?: Statistics;
}

@Component({
  selector: 'app-exercise-missing-number',
  templateUrl: './exercise-missing-number.component.html',
  styleUrls: ['./exercise-missing-number.component.css']
})



export class ExerciseMissingNumberComponent implements OnInit {
  confExercise = (<any>conf).exercise;
  exerciseHistory: Exercise[] = [];
  exercise: Exercise = {
    series: [],
    answer: null,
    bank: this.confExercise.bank,
    answerBank: [],
    optionsNumber: this.confExercise.optionsNumber,
    qSeriesSartFrom: null,
    qSeriesLenght: this.confExercise.qSeriesLenght,

    wrongAnswers: [],
    startTime: null,
    endTime: null
  };

  constructor() { }

  ngOnInit() {

    this.setExercise();

    console.log(this.exerciseHistory);
    console.log(this.exercise);
  }

  setExercise() {
    this.exercise.startTime = Date.now();
    this.exercise.qSeriesSartFrom = Math.floor(Math.random() * 7) + 1;
    this.exercise.series = this.createSeries();
  }
  createSeries() {
    const startAt = this.exercise.qSeriesSartFrom;
    const length = this.exercise.qSeriesLenght;
    let series = [];
    for (let i = startAt; i < startAt + length; i++) {
      series.push({ number: i, active: true });
    }

    const missingNumber = Math.floor(Math.random() * length) + startAt;
    this.exercise.answer = missingNumber;
    series = series.map(item => {
      if (item.number === missingNumber) {
        return { number: item.number, active: false };
      }
      return item;
    });

    this.createBank(this.exercise.optionsNumber);
    return series;

  }

  createBank(optionsNumber) {
    this.exercise.answerBank = [];
    let allOptions = this.exercise.bank.filter(item => item !== this.exercise.answer);

    for (let i = 0; i < optionsNumber - 1; i++) {
      const selectedNum = allOptions[Math.floor(Math.random() * allOptions.length)];
      this.exercise.answerBank.push(selectedNum);
      allOptions = allOptions.filter(item => item !== selectedNum);
    }

    this.exercise.answerBank.push(this.exercise.answer);
    this.exercise.answerBank = arrayShuffle(this.exercise.answerBank);
  }

  selectAnswer(answer) {
    if (answer === this.exercise.answer) {
      this.exercise.endTime = Date.now();
      const statistics = this.generateStatistics();

      const histortItem = {
        series: this.exercise.series,
        answer: this.exercise.answer,
        bank: this.exercise.bank,
        answerBank: this.exercise.answerBank,
        optionsNumber: this.exercise.optionsNumber,
        qSeriesSartFrom: this.exercise.qSeriesSartFrom,
        qSeriesLenght: this.exercise.qSeriesLenght,
        wrongAnswers: this.exercise.wrongAnswers,
        startTime: this.exercise.startTime,
        endTime: this.exercise.endTime,
        statistics: statistics
      };


      this.exerciseHistory.push(histortItem);

      console.log(this.exerciseHistory);
      this.ngOnInit();
    } else {
      this.exercise.wrongAnswers.push(answer);
      const answerIndex = this.exercise.answerBank.indexOf(answer);
      this.exercise.answerBank.splice(answerIndex, 1);
    }
  }


  generateStatistics() {
    // const aaa = new Date(this.exercise.endTime) - new Date(this.exercise.endTime);
    // console.log('aaa', aaa);
    const totalTime = (new Date(this.exercise.endTime).getTime() - new Date(this.exercise.startTime).getTime()) / 1000;
    const wrongAnswers = this.exercise.wrongAnswers.length === 0 ? false : true;


    const statistics: Statistics = {
      wrongAnswers: wrongAnswers,
      totalTime: totalTime,
      score: this.getScore()
    };

    return statistics;

  }

  getScore() {
    return 4;
  }


  // palceDragedAnswer($event: any) {
  //   // console.log($event);
  //   if ($event.dragData === this.missingNumber) {
  //     console.log('good!');
  //     this.ngOnInit();
  //   } else {
  //     console.log('BAD!!!!!');
  //     this.selectedAnswer = $event;
  //   }

  // }


}
