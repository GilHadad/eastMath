import { Component, OnInit } from '@angular/core';
import * as data from './strings.json';
import {interval} from 'rxjs';


interface scale {
  scalesFace: string;
  lives: number;//a nubmer beween 1 to 10
  scaleRank: number;//a nubmer beween 1 to 5
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
    const source = interval(2000);
    source.subscribe(() => this.reduceScalesLives(1))
  }

  createNewScale(): scale {
    const lives = 10
    let scaleRank = this.getScaleRank(lives);
    let scale = {
      lives: lives,
      scalesFace: this.imagesSrc[`Face_${scaleRank}`],
      scaleRank: scaleRank
    }
    return scale
  }

  reduceScalesLives(num) {
    if(this.scale.lives > 0){
      const currentlives = this.scale.lives - num;
      this.scale.lives = currentlives;
      this.updateScale(currentlives);
      console.log('reduceScalesLives by 1');
    }

  }

  getScaleRank(lives) {
    const rank = Math.ceil(lives / 2);//there can be 10 lives and only 5 moods
    return rank
  }

  updateScale(lives) {
    this.scale.lives = lives;
    const scaleRank = this.getScaleRank(lives);
    this.scale.scaleRank = scaleRank
    this.updateScaleImage(scaleRank);
  }

  updateScaleImage(scaleRank) {
    if(scaleRank > 0){
      this.scale.scalesFace = this.imagesSrc[`Face_${scaleRank}`];
    }
  }



}
