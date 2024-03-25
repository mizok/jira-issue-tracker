import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  setUserConfig,
  setUserState,
  storeApiCache,
} from '../../store/app.actions';
import { UserState, UserConfig, ApiCache } from '../../store/app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  private store = inject(Store);

  setUserConfig(config: UserConfig) {
    this.store.dispatch(setUserConfig(config));
  }

  getUserConfig(): Observable<UserConfig> {
    return this.store.select<UserConfig>((state) => state.appState.userConfig);
  }

  setUserState(state: UserState) {
    this.store.dispatch(setUserState(state));
  }

  getUserState(): Observable<UserState> {
    return this.store.select<UserState>((state) => state.appState.userState);
  }

  cacheApiData(state: ApiCache) {
    this.store.dispatch(storeApiCache(state));
  }

  getApiDataCache(url: string) {
    return this.store.select<ApiCache>((state) =>
      state.appState?.apiCache
        ? state.appState.apiCache[url] ?? undefined
        : undefined
    );
  }
}
