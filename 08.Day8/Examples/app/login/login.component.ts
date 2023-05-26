import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
    uid:string  = "admin";
    pwd:string  = "admin123";
    result:string  = "";

    constructor(private router:Router, private activatedRoute:ActivatedRoute) { }
    
    loginButton_click():void
    {
      let str  = this.activatedRoute.snapshot.queryParams["returnUrl"];

      if(str == null)  
         str  = "/";

      // a. verify uid, pwd
      // make a ajax calls by invoke service methods 
      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        // b. if valid,    generate the token  and redirect the user 
	      sessionStorage.setItem("AUTH_TOKEN", this.uid);
        this.router.navigate([str]);
      }
      else
      {
         // c. if invalid,   display error message 
        this.result  = "Invalid user id or password";
      }
    }
     
      
     
}
