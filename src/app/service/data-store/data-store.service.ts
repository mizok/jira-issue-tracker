import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUserConfig, setUserState } from '../../store/app.actions';
import { UserState, UserConfig } from '../../store/app.state';
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
}
