import { Injectable, inject } from '@angular/core';
import { WorkerService } from '../worker/worker.service';
import { DataStoreService } from '../data-store/data-store.service';
import { filter, of, switchMap, take, tap } from 'rxjs';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private workerService = inject(WorkerService);
  private dataStorageservice = inject(DataStoreService);
  private errorHandlerService = inject(ErrorHandlerService);
  private GET_ISSUES = '/rest/api/3/search';
  private GET_CURRENT_USER = '/rest/api/3/myself';

  private getApiData(url: string, cacheFirst = true) {
    return this.dataStorageservice.getApiDataCache(url).pipe(
      switchMap((dataCache) =>
        !!dataCache && cacheFirst
          ? of(dataCache)
          : this.dataStorageservice.getUserConfig().pipe(
              take(1),
              switchMap((config) => {
                if (!config) {
                  return this.errorHandlerService.info(
                    'No existing config. Please check setting page.',
                    true
                  );
                }
                const baseUrl = config.jiraUrl;
                if (!baseUrl) {
                  return this.errorHandlerService.info(
                    'No valid jira URL in config. Please check the jira URL setting in setting page.',
                    true
                  );
                }
                const apiUrl = `${baseUrl}${url}`;
                return this.workerService.getApiData(apiUrl);
              }),
              tap((data) => {
                this.dataStorageservice.cacheApiData({ [url]: data });
              })
            )
      )
    );
  }

  getIssues(maxResults = 20) {
    const jqlQuery = 'project=CPS AND assignee = currentUser()'; // 替換成你的專案代碼
    const url = `${this.GET_ISSUES}?jql=${encodeURIComponent(
      jqlQuery
    )}&maxResults=${maxResults}`;
    return this.getApiData(url);
  }

  getCurrentUser() {
    return this.getApiData(this.GET_CURRENT_USER);
  }
}
