import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dept } from '../models/deptModel';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent {

  @Input()  deptObj:Dept = new Dept();
  @Output() onDeptRemove:EventEmitter<number> = new EventEmitter();

  deptRemove_child()
  {
    //  code to remove the dept
    // alert("Message from child component method - deptRemove-child");

    //  trigger an event 
    this.onDeptRemove.emit(this.deptObj.deptno);
  }

}
