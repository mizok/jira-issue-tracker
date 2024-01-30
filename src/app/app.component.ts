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

  ngAfterViewInit(): void {
    this.workerService.init().subscribe();
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
