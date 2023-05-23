import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HelloService } from './hello.service';
 
 
@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent, 
       ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,  //  for ngModel
    ReactiveFormsModule  // for  formGroup, formControlName
  ],
  providers: [ HelloService ],  // for Services
  bootstrap: [AppComponent]
})
export class AppModule { }


