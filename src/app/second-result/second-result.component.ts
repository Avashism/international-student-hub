import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-second-result',
  templateUrl: './second-result.component.html',
  styleUrls: ['./second-result.component.css']
})
export class SecondResultComponent implements OnInit {
  Result;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.Result = this.data.Result;
  }
  displayedColumns: string[] = ['Country', 'Count'];


}
 