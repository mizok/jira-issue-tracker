import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { WorkerService } from './service/worker/worker.service';
import { style, animate, trigger, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { ViewContainerRefDirective } from './directive/view-container-ref/view-container-ref.directive';
import { DOCUMENT } from '@angular/common';
import { fromEvent, map, merge, startWith, filter, switchMap } from 'rxjs';
import { ErrorHandlerService } from './service/error-handler/error-handler.service';

function checkInternetConnection() {
  return navigator.onLine;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  private workerService = inject(WorkerService);
  isOffline = !checkInternetConnection();

  ngAfterViewInit(): void {
    this.bindOfflineDetection();
    this.initWorkerService();
  }

  private initWorkerService() {
    this.workerService.init().subscribe();
  }

  private bindOfflineDetection() {
    const online$ = fromEvent(window, 'online').pipe(map(() => true));
    const offline$ = fromEvent(window, 'offline').pipe(map(() => false));

    merge(online$, offline$).subscribe((isOnline) => {
      this.isOffline = !isOnline;
    });
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
