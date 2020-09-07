import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '@src/interfaces/hero';

@Pipe({
  name: 'heroEvenLengthName',
})
export class HeroEvenLengthNamePipe implements PipeTransform {
  transform(value: Hero[]): Hero[] {
    return value.filter((hero) => hero.name.length % 2 === 0);
  }
}

@Pipe({
  name: 'heroEvenLengthNameImpure',
  pure: false,
})
export class HeroEvenLengthNameImpurePipe extends HeroEvenLengthNamePipe {}
