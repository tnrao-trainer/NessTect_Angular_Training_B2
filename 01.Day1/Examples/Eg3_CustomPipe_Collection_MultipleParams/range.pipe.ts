import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './models/studentModel';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(input:Student[],  min:number, max:number ) : Student[]
	{
    let output:Student[] = [];
		output =   input.filter(  item =>  item.total  >= min &&  item.total <= max  )		
    return output;
  }
	

}
