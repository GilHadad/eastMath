import { Component, OnInit } from '@angular/core';
import * as data from './strings.json';

interface scale {
  scalesFace: string;
  lives: number;//a nubmer beween 1 to 10
}

@Component({
  selector: 'app-leason-scale',
  templateUrl: './leason-scale.component.html',
  styleUrls: ['./leason-scale.component.css']
})
export class LeasonScaleComponent implements OnInit {

  imagesSrc = (<any>data).images;
  scale: scale;

  constructor() { }

  ngOnInit() {
    this.scale = this.createNewScale();
  }

  createNewScale(): scale {
    const lives = 10
    let scaleRank = this.getScaleRank(lives);
    let scale = {
      lives: lives,
      scalesFace: this.imagesSrc[`Face_${scaleRank}`],
    }
    return scale
  }

  reduceScalesLives(num) {
    this.scale.lives = this.scale.lives - num;
  }

  getScaleRank(lives) {
    const rank = Math.ceil(lives / 2);//there can be 10 lives and only 5 moods
    return rank
  }

}
