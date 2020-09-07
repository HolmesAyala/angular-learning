import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisText',
})
export class EllipsisTextPipe implements PipeTransform {
  transform(value: string, maxLength: number = 5): string {
    if (value.length <= maxLength) {
      return value;
    }

    return value.substring(0, maxLength) + '...';
  }
}
