import { transition, trigger } from '@angular/animations';
import { SlideDirection, slideTo } from './lib';

export const slideInOutRouterAnimation = trigger('slideInOut', [
  transition('* <=> *', slideTo(SlideDirection.LEFT_IN)),
]);
