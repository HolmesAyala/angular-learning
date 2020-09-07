import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EllipsisTextPipe } from './ellipsis-text.pipe';
import { HeroUpperNamePipe } from './hero-upper-name.pipe';
import { HeroEvenLengthNamePipe, HeroEvenLengthNameImpurePipe } from './hero-even-length-name.pipe';
import { HttpGetCachePipe } from './http-get-cache.pipe';

@NgModule({
  declarations: [
    EllipsisTextPipe,
    HeroUpperNamePipe,
    HeroEvenLengthNamePipe,
    HeroEvenLengthNameImpurePipe,
    HttpGetCachePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EllipsisTextPipe,
    HeroUpperNamePipe,
    HeroEvenLengthNamePipe,
    HeroEvenLengthNameImpurePipe,
    HttpGetCachePipe
  ]
})
export class PipesModule { }
