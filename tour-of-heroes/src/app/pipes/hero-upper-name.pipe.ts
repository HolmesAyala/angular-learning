import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '@src/interfaces/hero';
import * as _ from 'lodash';

@Pipe({
  name: 'heroUpperName'
})
export class HeroUpperNamePipe implements PipeTransform {

  transform(value: Hero): Hero {
    const valueCopy: Hero = _.cloneDeep(value);
    valueCopy.name = valueCopy.name.toUpperCase();
    return valueCopy;
  }

}
