import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'segaType'
})
export class SegaTypeFilter implements PipeTransform {
  transform(value: any, SelectedSegaType: any): string {
     if(value == undefined)
       return value;
     else
        return value.filter(item => SelectedSegaType.some(f => f == item.Id));
  }
}