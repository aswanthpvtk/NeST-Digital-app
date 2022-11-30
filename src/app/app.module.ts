import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegComponent } from './emp-reg/emp-reg.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';
import { ApiComponent } from './api/api.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewCourseComponent } from './view-course/view-course.component';

const myroute:Routes =[

  {
    path :"",
    component :HomeComponent
  },
  {
    path :"admin",
    component :AdminLoginComponent
  },
  {
    path :"emp",
    component : EmpLoginComponent
  },
  {
    path :"nemp",
    component :EmpRegComponent
  },
  {
    path :"adc",
    component :AddCourseComponent
  },
  {
    path :"vc",
    component :ViewCourseComponent
  },
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmpLoginComponent,
    EmpRegComponent,
    HomeComponent,
    NavbarComponent,
    AddCourseComponent,
    EmpNavbarComponent,
    ApiComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
