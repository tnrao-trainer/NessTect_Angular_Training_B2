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
          subscriber.next("Data Generated from Observable ---- 1");
      });
    }

    buttonClick()
    {
        this.observableObj$.subscribe( (resData) => 
        {
          //  console.log(resData);
          this.result = resData;
        } );
 
    }

}
