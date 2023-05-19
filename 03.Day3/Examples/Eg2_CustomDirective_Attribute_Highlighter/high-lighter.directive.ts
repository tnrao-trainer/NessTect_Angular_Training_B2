import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit {

  @Input()  appHighLighter = "";

  constructor(private el:ElementRef) {
     
   }


   ngOnInit(): void {
    // alert(this.appHighLighter);
    this.el.nativeElement.style.backgroundColor = this.appHighLighter || "Yellow";
   }

}
