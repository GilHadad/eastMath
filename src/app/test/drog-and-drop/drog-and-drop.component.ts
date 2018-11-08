import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drog-and-drop',
  templateUrl: './drog-and-drop.component.html',
  styleUrls: ['./drog-and-drop.component.css']
})
export class DrogAndDropComponent implements OnInit {
  transferData: Object = {title: 'some title', description: 'bla bla bla'};
  receivedData: Array<any> = [];

  transferDataArr: Array<Object> = [
    {title: 'some title1', color: '#D4AC0D', description: 'bla bla bla'},
    {title: 'some title2', color: '#A3E4D7', description: 'bla bla bla bla bla bla'},
    {title: 'some title3', color: '#C39BD3', description: 'bla bla bla bla bla bla bla bla bla'},
    {title: 'some title4', color: '#2874A6', description: 'bla bla bla bla bla bla bla bla bla bla bla bla'},
    {title: 'some title5', color: '#85929E', description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'},
  ];

  receivedDataNew: Array<any> = [];

  transferDataSuccess($event: any) {
    console.log($event);
      this.receivedData.push($event);
  }

  transferDataSuccessNew($event: any) {
    console.log($event);
      this.receivedDataNew.push($event);
  }

  constructor() { }

  ngOnInit() {
  }

}
