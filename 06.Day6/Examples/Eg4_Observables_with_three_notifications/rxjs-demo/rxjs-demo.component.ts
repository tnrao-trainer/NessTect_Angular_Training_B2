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
        subscriber.next("Data Generated from Observable ---- 2");

        let x = 10;
        if(x % 2 == 0)
        {
          subscriber.error("Error occurred in observable exeuction.");
        }
        
          setTimeout(() => 
          {           
            subscriber.next("Data Generated from Observable ---- 3");
            subscriber.complete();
          },  3000);
         
      });
    }

    buttonClick()
    {
        this.result += "Before Subscribe --- Line:39" +  "<br/>";

        this.observableObj$.subscribe({ 
          next :   (resData) => {
                     // console.log(resData);
                      this.result += resData +  " --- Line 44" +  "<br/>";
                    },
          error :   (errorResData) => {                
                    this.result += errorResData +  " --- Line 47" +  "<br/>";
                  },                    
          complete :   () => {                
                    this.result += "Observable execution completed. --- Line 50" +  "<br/>";
                  }
        });

        this.result += "After Subscribe --- Line:54"+  "<br/>";
 
    }

}
