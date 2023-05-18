import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   user1:string  = "Paul";
   user2:string  = "Stephen";

   usersArray:string[] = ["David", "Joseph", "Smith", "Steve"];

}
