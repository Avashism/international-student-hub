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

  qResult : any[];
  Name;
  Wnumber;
  Country;
  mGpa;
  sCount;

  constructor(public dialogue: MatDialog,
    public http: HttpClient) { }
  openDialog() {
    console.log("i am here again and again" + JSON.stringify(this.qResult));
    const dialogRef = this.dialogue.open(ResultsComponent, {
       width: '100vh',
      data: {result: this.qResult
      }});
    dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ${result}');
    });
}



byName(){

  this.http.get<any>
        (`https://localhost:44350/api/students1/${this.Name}`
        ).subscribe(
            response => {
                this.qResult = response;
                if(response !=null){
                  this.openDialog();
               }
                console.log(response);
            });
}


byWnumber(){
  this.http.get<any>
        (`https://localhost:44350/api/students/${this.Wnumber}`
        ).subscribe(
            response => {
                this.qResult = response;
                if(response!= null){
                  this.openDialog();
                }
                console.log(" I am checking " +JSON.stringify(this.qResult));
            });
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
  this.http.get<any>
  (`https://localhost:44350/api/values/${this.mGpa}`
        ).subscribe(
            response => {
              if(response!= null){
                this.openDialog();
              }
              console.log(" I am checking " +JSON.stringify(this.qResult));
});
}
allCountry(){
  this.http.get<any>
        (`https://localhost:44350/postStoriesByCategory/2`
        ).subscribe(
            response => {
              this.qResult = response;
              console.log(response);
                });
                
                this.openDialog();
    
}
allStudent(){
  this.http.get<any>
  (`https://localhost:44350/api/Students`
        ).subscribe(
            response => {
                this.qResult = response;
                if(response!= null){
                  this.openDialog();
                }
                console.log(response);
            });
           
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
