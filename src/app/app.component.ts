import { Component, OnInit, inject } from '@angular/core';
import { WorkerService } from './service/worker/worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jira-rader';
  private workerService = inject(WorkerService);

  ngOnInit(): void {
    this.workerService.init().subscribe(() => {
      const jiraBaseUrl = 'https://neutec.atlassian.net';
      const jqlQuery = 'project=CPS AND assignee = currentUser()'; // 替換成你的專案代碼
      const maxResults = 20; // 設定要返回的最大結果數量
      const apiUrl = `${jiraBaseUrl}/rest/api/3/search?jql=${encodeURIComponent(
        jqlQuery
      )}&maxResults=${maxResults}`;
      this.workerService.getApiData(apiUrl).subscribe((data) => {
        console.log(data);
      });
    });
  }
}
