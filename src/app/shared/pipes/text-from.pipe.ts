import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from '../types/commonTypes';

@Pipe({
  name: 'textFrom',
})
export class TextFromPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value?.map((item: FilterType) => item.name).join('，');
  }
}
