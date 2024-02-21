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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public get routeConfigChildren() {
    return this.route.routeConfig?.children?.filter(
      (route) => !!route.component
    );
  }
  readonly MainPageRoutingType = MainPageRoutingType;

  ngAfterViewInit(): void {
    this.apiService.getIssues().subscribe((data) => console.log(data));
  }

  navigateTo(relativePath: string) {
    this.router.navigate([relativePath], { relativeTo: this.route });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
