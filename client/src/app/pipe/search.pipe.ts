import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)  return null;
    if(!args)return value;
    console.log(value,"value")
    return value.filter(array=>
      array.title.toLowerCase().indexOf(args.toLowerCase()) !==-1
    )
  }

}
