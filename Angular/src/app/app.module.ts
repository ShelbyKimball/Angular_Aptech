import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {homeComponent} from "./home/home.component";
import {loginpageComponent} from "./login-page/loginpage.component";
import {FormsModule} from "@angular/forms";
import {registerComponent} from "./register/register.component";
import {assignment3Component} from "./assignment3/assignment3.component";
import {angulartestComponent} from "./angular-test/angulartest.component";
import {popuptestComponent} from "./popuptest/popuptest.component";


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    loginpageComponent,
    registerComponent,
    assignment3Component,
    angulartestComponent,
    popuptestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //su dung khi thao tac voi form
    //su dung cho api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
