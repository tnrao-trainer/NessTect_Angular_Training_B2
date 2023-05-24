import { Component } from '@angular/core';
import { Observable, Subscription, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent {

    observableObj$:Observable<number>;
    result:string = "";
    subscription?:Subscription;

    constructor()
    {
      this.observableObj$ = interval(1000);
      
    }

    startButtonClick()
    {       
      this.subscription = this.observableObj$.subscribe( (resData) => {                     
          this.result  += " ** " + resData;
      }); 
    }
    
    stopButtonClick()
    {       
      this.subscription?.unsubscribe();
    }

}
