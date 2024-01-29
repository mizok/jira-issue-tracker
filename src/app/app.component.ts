import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { WorkerService } from './service/worker/worker.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { ApiService } from './service/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('app') appEleRef!: ElementRef<HTMLElement>;
  private workerService = inject(WorkerService);
  private router = inject(Router);

  ngOnInit(): void {
    this.setRouterChangeTransition();
    this.workerService.init().subscribe();
  }

  setRouterChangeTransition() {
    this.router.events
      .pipe(
        tap((ev) => {
          const appEle = this.appEleRef.nativeElement;
          if (ev instanceof NavigationStart) {
            appEle.style.height = appEle.getBoundingClientRect().height + 'px';
          } else if (ev instanceof NavigationEnd) {
            appEle.style.height = '';
            appEle.style.height = appEle.getBoundingClientRect().height + 'px';
          }
        })
      )
      .subscribe();
  }
}
