import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { MainPageRoutingType } from './main-page-routing-type';
import { slideInOutRouterAnimation } from 'src/app/util/animation/router.animation';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [slideInOutRouterAnimation],
})
export class MainPageComponent implements AfterViewInit {
  private apiService = inject(ApiService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  public get routeConfigChildren() {
    return this.activatedRoute.routeConfig?.children?.filter(
      (activatedRoute) => !!activatedRoute.loadChildren
    );
  }
  public get activatedPath() {
    const childRoute = this.activatedRoute.firstChild;
    return childRoute?.snapshot.url.join('/');
  }

  readonly MainPageRoutingType = MainPageRoutingType;

  ngAfterViewInit(): void {
    return;
  }

  navigateTo(relativePath: string) {
    this.router.navigate([relativePath], { relativeTo: this.activatedRoute });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
