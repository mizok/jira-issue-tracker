import { AfterViewInit, Component, inject } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements AfterViewInit {
  private apiService = inject(ApiService);

  ngAfterViewInit(): void {
    this.apiService.getIssues().subscribe((data) => console.log(data));
  }
}
