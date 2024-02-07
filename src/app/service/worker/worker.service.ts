import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Observable, Subject, catchError } from 'rxjs';
import {
  SERVICE_WORKER,
  WorkerMessageResponseType,
  WorkerPostMessageType,
} from './worker.model';
import { EventTrackerService } from '../event-tracker/event-tracker.service';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private eventTrackerService = inject(EventTrackerService);
  private worker: ServiceWorker | null = null;
  private initSubject = new Subject<boolean>();
  private getApiSubject = new Subject<any>();
  private errorHandlerService = inject(ErrorHandlerService);

  init(): Observable<boolean> {
    const worker = this.getWorkerRegistration();
    if (worker) {
      worker
        .then((registration) => {
          if (registration) {
            this.worker = registration.active as ServiceWorker;
            this.eventTrackerService.resetEventListenerByType<
              MessageEvent<any>
            >(navigator.serviceWorker, 'message', (event) => {
              // console.log('got message from service worker!!!!!', event);
              this.workerEventHandler(event);
            });
            this.postMessage(WorkerPostMessageType.INIT);
          }
        })
        .catch((error: any) => {
          let errorMessage = '';
          if (error instanceof Error) {
            const err: Error = error;
            errorMessage = err.message;
          } else {
            errorMessage = `Unknown Error: ${error}`;
          }
          this.initSubject.error(errorMessage);
        });
    } else {
      this.initSubject.error('Service worker not supported.');
    }

    return this.initSubject.pipe(
      catchError((error) => this.errorHandlerService.info(error, true))
    );
  }

  getApiData(apiUrl: string) {
    this.postMessage(WorkerPostMessageType.GET_API_DATA, { url: apiUrl });
    return this.getApiSubject.pipe(
      catchError((error) => this.errorHandlerService.info(error, true))
    );
  }

  private postMessage(type: WorkerPostMessageType, data?: any) {
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
      case WorkerMessageResponseType.INITED:
        this.initSubject.next(true);
        this.initSubject.complete();
        break;
      case WorkerMessageResponseType.RESPONSE_API_DATA:
        this.getApiSubject.next(data);
        break;
      case WorkerMessageResponseType.GET_API_DATA_ERR:
        this.getApiSubject.error(data);
        break;
    }
  }
}
