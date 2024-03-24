import { AfterViewInit, Component, inject } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.scss'],
})
export class IssuePageComponent implements AfterViewInit {
  private apiService = inject(ApiService);

  ngAfterViewInit(): void {}
}
