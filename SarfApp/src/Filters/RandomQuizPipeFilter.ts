import { Pipe, PipeTransform } from '@angular/core';
import {Global} from '../Services/Global.service';


@Pipe({
  name: 'FILTER'
})

export class QuizFilter implements PipeTransform {
  constructor(public global: Global) {
  }
  filterFrom;
  transform(value: any): any {
    this.filterFrom = this.generateRange(this.global.qCount,this.global.total);
    return value.filter(item => this.filterFrom.some(f => f.ID == item.ID));
  }
  
  generateRange(qCount,total) {
     var resultArr = [];
    if(qCount > 0){
      for(var i=0; i <= total; i++){
        if(resultArr.length == qCount)
          break;
        var Random = Math.round(Math.random() * total) + 1;
        if(resultArr.some(f => f.ID == Random)){
          continue;
        }
        else{
          resultArr.push({"ID" : Random});
        }
      }
    }
    
    return resultArr;
  }
}
