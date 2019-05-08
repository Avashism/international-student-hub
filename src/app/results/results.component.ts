import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';
export interface resultData {
  name: string;
  wNumber: string;
  sex: string;
  phone: string;
  address: string;
  gpa: string;
  major: string;
}


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  Result : any[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.Result = this.data.result;
    console.log("Result ma aayo tah? " + JSON.stringify(this.Result));
  }
  displayedColumns: string[] = ['wNumber', 'name', 'phone', 'sex', 'gpa' , 'major', 'address'];
  dataSource = JSON.stringify(this.Result);
}

