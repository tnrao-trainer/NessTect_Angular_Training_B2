import { Component } from '@angular/core';
import { Employee } from '../models/empModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent {

    empsArray:Employee[]= [];

    constructor(private dataService:DataService)
    {

    }

    buttonClick()
    {
      this.empsArray = this.dataService.getAllEmployees();
    }
}
