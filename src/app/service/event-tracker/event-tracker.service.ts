import { Injectable } from '@angular/core';
import { CanAttachEventListener } from './event-tracker.model';

function removeFirstMatchTargetFromArr(
  matchPredicate: (value: any, index?: number) => boolean,
  arr: any[]
) {
  const matchTargetIndex = arr.findIndex(matchPredicate);
  if (matchTargetIndex !== -1) {
    arr.splice(matchTargetIndex, 1);
  }
}

@Injectable({
  providedIn: 'root',
})
export class EventTrackerService {
  constructor() {}
  private eventPools: {
    target: CanAttachEventListener<any>;
    events: { type: string; handler: (event: any) => unknown }[];
  }[] = [];

  addEventListener<T>(
    target: CanAttachEventListener<T>,
    eventType: string,
    handler: (event: T) => unknown
  ) {
    const targetEventPool = this.eventPools.find(
      (pool) => pool.target === target
    );
    const eventReference = { type: eventType, handler: handler };
    if (targetEventPool) {
      targetEventPool.events.push(eventReference);
    } else {
      this.eventPools.push({ target: target, events: [eventReference] });
    }
    target.addEventListener(eventType, handler);
  }

  removeAllEventListenerByType(
    target: CanAttachEventListener<any>,
    eventType: string
  ) {
    const targetEventPool = this.eventPools.find(
      (pool) => pool.target === target
    );

    if (targetEventPool) {
      targetEventPool.events = targetEventPool.events.filter(
        (event) => event.type !== eventType
      );

      if (targetEventPool.events.length === 0) {
        removeFirstMatchTargetFromArr((o) => o === target, this.eventPools);
      }
    }
  }

  resetEventListenerByType<T>(
    target: CanAttachEventListener<T>,
    eventType: string,
    handler: (event: T) => unknown
  ) {
    this.removeAllEventListenerByType(target, eventType);
    target.addEventListener(eventType, handler);
  }
}
