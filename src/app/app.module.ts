import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MatTableModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserpageComponent,
    ResultsComponent
  ],
  entryComponents: [
    ResultsComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    TeximateModule,
    AppRoutingModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
