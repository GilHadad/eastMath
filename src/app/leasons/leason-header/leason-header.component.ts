import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leason-header',
  templateUrl: './leason-header.component.html',
  styleUrls: ['./leason-header.component.css']
})
export class LeasonHeaderComponent implements OnInit {

  title: String = 'שלום כיתה א';
  classType: String = 'aaa';//dmiles77:what is it?

  constructor() { }

  ngOnInit() {
  }

}
