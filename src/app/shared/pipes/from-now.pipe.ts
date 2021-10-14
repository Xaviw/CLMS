import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

@Pipe({
  name: 'fromNow',
})
export class FromNowPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return dayjs(value).fromNow();
  }
}
