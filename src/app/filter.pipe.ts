import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(value, args?) {    
    let field1 = args;
    return value.filter(fieldItem => {
      let keys = Object.keys(fieldItem);
      for(var i=0;i<keys.length;i++){
        if(field1 == "" || field1 == null) {
          return true;
        }
        let fieldObj = fieldItem[keys[i]].toString();
        let pos = fieldObj.toLowerCase().indexOf(field1.toLowerCase());
        if(pos !== -1){
          return true; 
        } 
      }    
    });
  }
}