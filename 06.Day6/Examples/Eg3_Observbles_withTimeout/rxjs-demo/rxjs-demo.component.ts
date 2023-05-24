import { Component } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent {

    observableObj$:Observable<any>;
    result:string = "";

    constructor()
    {
      this.observableObj$ = new  Observable((subscriber) => 
      {         
          setTimeout(() => 
          {
            subscriber.next("Data Generated from Observable ---- 1");
            subscriber.next("Data Generated from Observable ---- 2");
            subscriber.next("Data Generated from Observable ---- 3");
          },  3000);
         
      });
    }

    buttonClick()
    {
        this.result += "Before Subscribe --- Line:26" +  "<br/>";

        this.observableObj$.subscribe( (resData) => 
        {
          console.log(resData);
          this.result += resData +  " --- Line 31" +  "<br/>";
        } );

        this.result += "After Subscribe --- Line:34"+  "<br/>";
 
    }

}
