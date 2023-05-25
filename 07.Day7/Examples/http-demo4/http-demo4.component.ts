import { Component } from '@angular/core';
import { Student } from '../models/studentModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http-demo4',
  templateUrl: './http-demo4.component.html',
  styleUrls: ['./http-demo4.component.css']
})
export class HttpDemo4Component {

  studentsArray:Student[] = [];

  constructor(private dataService:DataService){

  }


  getData1_click()
  {
    this.dataService.getStudentsByCity("Goa").subscribe( (resData:Student[]) =>
    {
      this.studentsArray = resData;
    });
  }

  getData2_click()
  {
    this.dataService.getStudentsWithToken().subscribe( (resData:Student[]) =>
    {
      this.studentsArray = resData;
    });
  }

}
