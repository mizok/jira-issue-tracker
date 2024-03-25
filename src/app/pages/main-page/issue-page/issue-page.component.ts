import { AfterViewInit, Component, inject } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.scss'],
})
export class IssuePageComponent implements AfterViewInit {
  private apiService = inject(ApiService);
  readonly issueListSignal = toSignal(
    this.apiService.getIssues().pipe(tap((res) => console.log(res)))
  );

  ngAfterViewInit(): void {}
}
