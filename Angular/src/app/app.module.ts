import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {homeComponent} from "./home/home.component";
import {loginpageComponent} from "./login-page/loginpage.component";
import {FormsModule} from "@angular/forms";
import {registerComponent} from "./register/register.component";
import {assignment3Component} from "./assignment3/assignment3.component";
import {weatherComponent} from "./weather/weather.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {assignment4Component} from "./assignment4/assignment4.component";

const appRoutes: Routes = [
  { path:'',component: homeComponent},
  { path:'login-page',component: loginpageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    loginpageComponent,
    registerComponent,
    assignment3Component,
    weatherComponent,
    assignment4Component
  ],
  imports: [
    BrowserModule,
    FormsModule, //su dung khi thao tac voi form
    RouterModule.forRoot(appRoutes),
    HttpClientModule //su dung cho api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
