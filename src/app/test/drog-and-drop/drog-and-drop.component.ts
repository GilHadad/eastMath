import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drog-and-drop',
  templateUrl: './drog-and-drop.component.html',
  styleUrls: ['./drog-and-drop.component.css']
})
export class DrogAndDropComponent implements OnInit {
  transferData: Object = {id: 1, msg: 'Hello'};
  receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
      this.receivedData.push($event);
  }

  constructor() { }

  ngOnInit() {
  }

}
