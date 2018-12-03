import { Component, OnInit } from '@angular/core';

import { arrayShuffle } from 'src/app/test/app.utils';

interface Exercise {
  series: any[];
  missingNumber: Number;
  selectedAnswer: any;
  bank: Number[];
  answerBank: Number[];
  optionsNumber: Number;
}

@Component({
  selector: 'app-exercise-missing-number',
  templateUrl: './exercise-missing-number.component.html',
  styleUrls: ['./exercise-missing-number.component.css']
})



export class ExerciseMissingNumberComponent implements OnInit {
  series: any[];
  missingNumber: Number;
  selectedAnswer: any;
  bank: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  answerBank: Number[];
  optionsNumber: Number = 4;
  qSeriesSartFrom: Number;
  qSeriesLenght: Number = 4;
  constructor() { }

  ngOnInit() {
    this.qSeriesSartFrom = Math.floor(Math.random() * 7) + 1;
    this.series = this.createSeries(this.qSeriesSartFrom, this.qSeriesLenght);
  }

  createSeries(startAt, length) {
    let series = [];
    for (let i = startAt; i < startAt + length; i++) {
      series.push({ number: i, active: true });
    }

    const missingNumber = Math.floor(Math.random() * length) + startAt;
    this.missingNumber = missingNumber;
    series = series.map(item => {
      if (item.number === missingNumber) {
        return { number: item.number, active: false };
      }
      return item;
    });

    this.createBank(this.optionsNumber);
    return series;

  }

  createBank(optionsNumber) {
    this.answerBank = [];
    let allOptions = this.bank.filter(item => item !== this.missingNumber);

    for (let i = 0; i < optionsNumber - 1; i++) {
      const selectedNum = allOptions[Math.floor(Math.random() * allOptions.length)];
      this.answerBank.push(selectedNum);
      allOptions = allOptions.filter(item => item !== selectedNum);
    }

    this.answerBank.push(this.missingNumber);
    this.answerBank = arrayShuffle(this.answerBank);
  }

  selectAnswer(answer) {
    if (answer === this.missingNumber) {
      this.ngOnInit();
    } else {

      const answerIndex = this.answerBank.indexOf(answer);
      this.answerBank.splice(answerIndex, 1);
    }
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
