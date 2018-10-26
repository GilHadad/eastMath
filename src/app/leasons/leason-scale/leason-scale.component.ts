import { Component, OnInit } from '@angular/core';
import * as data from './strings.json';

@Component({
  selector: 'app-leason-scale',
  templateUrl: './leason-scale.component.html',
  styleUrls: ['./leason-scale.component.css']
})
export class LeasonScaleComponent implements OnInit {

  imagesSrc = (<any>data).images;

  constructor() { }

  ngOnInit() {
  }

}
