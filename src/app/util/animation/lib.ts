import { animate, group, query, style } from '@angular/animations';

export enum SlideDirection {
  RIGHT_IN = 'right_in',
  LEFT_IN = 'left_in',
  TOP_IN = 'top_in',
  BOTTOM_IN = 'bottom_in',
}

export function slideTo(direction: SlideDirection) {
  let transformStart = 'translateX(100%)';
  let transformEnd = 'translateX(-100%)';
  switch (direction) {
    case SlideDirection.TOP_IN:
      transformStart = 'translateY(-100%)';
      transformEnd = 'translateY(100%)';
      break;
    case SlideDirection.BOTTOM_IN:
      transformStart = 'translateY(100%)';
      transformEnd = 'translateY(-100%)';
      break;
    case SlideDirection.LEFT_IN:
      transformStart = 'translateX(100%)';
      transformEnd = 'translateX(-100%)';
      break;
    case SlideDirection.RIGHT_IN:
      transformStart = 'translateX(-100%)';
      transformEnd = 'translateX(100%)';
      break;
    default:
      transformStart = 'translateX(100%)';
      transformEnd = 'translateX(-100%)';
      break;
  }
  return [
    query(
      ':enter',
      [
        style({
          transform: transformStart,
          display: 'block',
          position: 'absolute',
          width: '100%',
          left: 0,
          overflow: 'hidden',
        }),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({
          transform: 'translate(0, 0)',
          display: 'block',
          position: 'absolute',
          width: '100%',
          left: 0,
          overflow: 'hidden',
        }),
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [animate('300ms ease', style({ transform: transformEnd }))],
        { optional: true }
      ),
      query(
        ':enter',
        [animate('300ms ease', style({ transform: 'translate(0, 0)' }))],
        { optional: true }
      ),
    ]),
  ];
}
