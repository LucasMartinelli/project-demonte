import { NgModule } from '@angular/core';

import { ParallaxDirective } from './parallax.directive';
import { StickyDirective } from './header/sticky.directive';

@NgModule({
  declarations: [
  	ParallaxDirective,
    StickyDirective,
  ],
  imports: [],
  exports: [
  	ParallaxDirective,
  	StickyDirective
  ]
})
export class DirectivesModule { }
