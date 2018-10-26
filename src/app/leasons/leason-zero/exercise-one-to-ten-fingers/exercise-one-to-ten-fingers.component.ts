import { Component, OnInit } from '@angular/core';
import * as data from './strings.json';

@Component({
  selector: 'app-exercise-one-to-ten-fingers',
  templateUrl: './exercise-one-to-ten-fingers.component.html',
  styleUrls: ['./exercise-one-to-ten-fingers.component.css']
})
export class ExerciseOneToTenFingersComponent implements OnInit {
  imagesSrc = (<any>data).images;
  constructor() { }


  ngOnInit() {
    console.log(this.imagesSrc.finger_0);
  }

}
