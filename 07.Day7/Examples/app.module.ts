import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { DemoComponent } from './demo/demo.component';

import {HttpClientModule}  from '@angular/common/http';
import { HttpDemo1Component } from './http-demo1/http-demo1.component';
import { HttpDemo2Component } from './http-demo2/http-demo2.component';
import { HttpDemo3Component } from './http-demo3/http-demo3.component';
import { HttpDemo4Component } from './http-demo4/http-demo4.component';

 
@NgModule({
  declarations: [
    AppComponent,  
    RxjsDemoComponent,
    DemoComponent,
    HttpDemo1Component,
    HttpDemo2Component,
    HttpDemo3Component,
    HttpDemo4Component,
    
       ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,  //  for ngModel
    ReactiveFormsModule,  // for  formGroup, formControlName
    HttpClientModule
  ],
  providers: [ 
      
         ], 
  bootstrap: [AppComponent]
})
export class AppModule { }


