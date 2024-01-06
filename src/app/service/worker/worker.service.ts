import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  SERVICE_WORKER,
  WorkerMessageResponseType,
  WorkerPostMessageType,
} from './worker.model';
import { EventTrackerService } from '../event-tracker/event-tracker.service';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private eventTrackerService = inject(EventTrackerService);
  private worker: ServiceWorker | null = null;

  init(): Observable<boolean> {
    const initSubject = new Subject<boolean>();
    const worker = this.getWorkerRegistration();
    if (worker) {
      worker
        .then((registration) => {
          if (registration) {
            this.worker = registration.active as ServiceWorker;
            this.eventTrackerService.resetEventListenerByType<
              MessageEvent<any>
            >(navigator.serviceWorker, 'message', (event) => {
              console.log('got message from service worker!!!!!', event);
              if (event.data.type === WorkerMessageResponseType.INITED) {
                initSubject.next(true);
                initSubject.complete();
              }
              this.workerEventHandler(event);
            });
            this.postMessage(WorkerPostMessageType.INIT);
          }
        })
        .catch((error) => {
          console.error('Error during service worker registration:', error);
          initSubject.error(error);
        });
    } else {
      const errormsg = 'Service worker not supported.';
      console.warn(errormsg);
      initSubject.error(errormsg);
    }

    return initSubject.asObservable();
  }

  postMessage(type: WorkerPostMessageType, data?: any) {
    if (this.worker) {
      this.worker.postMessage({ type: type, data: data });
    }
  }

  private getWorkerRegistration() {
    if ('serviceWorker' in navigator && 'MessageChannel' in window) {
      return navigator.serviceWorker.getRegistration(SERVICE_WORKER);
    } else {
      return null;
    }
  }

  private workerEventHandler(event: MessageEvent<any>) {
    const { type, data } = event.data;

    switch (type) {
    }
  }
}
