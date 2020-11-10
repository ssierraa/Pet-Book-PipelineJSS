import { Pipe, PipeTransform } from '@angular/core';    
import * as DUMMIES from './../../testing/dummies/items' 
@Pipe({    
    name: 'filterimages'    
  })    
export class FilterimagesPipeMock implements PipeTransform {    
  transform(items: any[], laptop: string): any {  
    return   DUMMIES.ALL_TEMS;
  }    
    
} 