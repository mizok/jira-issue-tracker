import { Injectable, inject } from '@angular/core';
import { WorkerService } from '../worker/worker.service';
import { DataStoreService } from '../data-store/data-store.service';
import { switchMap, take, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private workerService = inject(WorkerService);
  private dataStorageservice = inject(DataStoreService);
  private GET_ISSUES = '/rest/api/3/search';
  private GET_CURRENT_USER = '/rest/api/3/myself';

  private getApiData(url: string) {
    return this.dataStorageservice.getUserConfig().pipe(
      take(1),
      switchMap((config) => {
        if (!config) {
          return throwError(() => new Error(''));
        }
        const baseUrl = config.jiraUrl;
        const apiUrl = `${baseUrl}${url}`;
        return this.workerService.getApiData(apiUrl);
      })
    );
  }

  getIssues(maxResults = 20) {
    const jqlQuery = 'project=CPS AND assignee = currentUser()'; // 替換成你的專案代碼
    const url = `${this.GET_ISSUES}?jql==${encodeURIComponent(
      jqlQuery
    )}&maxResults=${maxResults}`;
    return this.getApiData(url);
  }

  getCurrentUser() {
    return this.getApiData(this.GET_CURRENT_USER);
  }
}
