import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public customerForm:FormGroup = new  FormGroup({
      fname  :  new FormControl(null, Validators.required),
      lname  :  new FormControl(null, Validators.required),
      city  :   new FormControl(null, [Validators.minLength(3), Validators.maxLength(10)]),
      email :   new FormControl("", Validators.email),
      pincode : new FormControl("", Validators.pattern("\\d{6}"))        
    });

  public submit_click():void
  {
     // ajax call to send data to server
     alert("Customer Details are registered.");
     let customerObj = this.customerForm.value;
    // console.log(customerObj);
  }


}
