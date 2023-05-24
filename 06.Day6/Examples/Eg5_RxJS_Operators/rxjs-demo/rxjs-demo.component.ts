import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent {

    observableObj$:Observable<number>;
    result:string = "";

    constructor()
    {
      this.observableObj$ = of(1,2,3,4,5);
      // this.observableObj$ = of(...[1,2,3,4,5]);
    }

    buttonClick()
    {       
      let filteredObsObj$:Observable<number> =  this.observableObj$.pipe(  
          map(x => x * 10), 
          map(x => x * 2) );
      
      filteredObsObj$.subscribe( (resData) => {                     
                      this.result += resData +  "<br/>";
                }); 
    }

}
