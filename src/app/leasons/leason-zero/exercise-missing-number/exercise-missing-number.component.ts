import { Component, OnInit } from '@angular/core';

import { arrayShuffle } from 'src/app/test/app.utils';

@Component({
  selector: 'app-exercise-missing-number',
  templateUrl: './exercise-missing-number.component.html',
  styleUrls: ['./exercise-missing-number.component.css']
})
export class ExerciseMissingNumberComponent implements OnInit {
  series: any[];
  missingNumber: Number;
  bank: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  answerBank: Number[];
  optionsNumber = 4;
  constructor() { }

  ngOnInit() {
    this.series = this.createSeries(3, 4);
  }

  createSeries(startAt, length) {
    let series = [];
    // length = startAt + length;
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

    // console.log(series);
    // for (let i = 0; i < 100; i++) {
    //   console.log(Math.floor(Math.random() * length) + startAt);
    // }

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

    // console.log(this.missingNumber);
    // console.log(allOptions);
    // console.log(this.answerBank);
  }


}
