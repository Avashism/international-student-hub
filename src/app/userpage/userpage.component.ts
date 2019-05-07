import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ResultsComponent } from '../results/results.component';
import {HttpClient} from '@angular/common/http';
import {SERVER_ROOT} from '../config';




@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  qResult;
  Name;
  Wnumber;
  Country;
  mGpa;
  sCount;


  constructor(public dialogue: MatDialog,
    public http: HttpClient) { }
  openDialog() {
    const dialogRef = this.dialogue.open(ResultsComponent, {
       width: '100vh',
      data: {Result: this.qResult
      }});
    dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ${result}');
        this.ngOnInit();
    });
}
byName(){

  this.http.post<any>
        (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`, {'Name' : this.Name}
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
byWnumber(){
  this.http.post<any>
        (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`, {'Wnumber' : this.Wnumber}
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
byCountry(){
  this.http.post<any>
  (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`, {'Country' : this.Country}
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
byNameCountry(){
  this.http.post<any>
  (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`, {'Name' : this.Name , 'Country' : this.Country}
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
byCount(){
  this.http.post<any>
  (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`, {'sCount' : this.sCount}
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
byMinGpa(){
  this.http.post<any>
  (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`, {'mGpa' : this.mGpa}
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
allCountry(){
  this.http.get<any>
        (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
allStudent(){
  this.http.get<any>
  (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}
allRecord(){
  this.http.get<any>
  (`${SERVER_ROOT}/Retrive/postStoriesByCategory/2`
        ).subscribe(
            response => {
                this.qResult = response;
                console.log(response);
            });
  this.openDialog();
}

  ngOnInit() {
  }

}
