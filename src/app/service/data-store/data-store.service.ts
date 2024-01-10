import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUserConfig } from '../../store/app.actions';
import { UserConfig } from '../../store/app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  private store = inject(Store);

  setUserConfig(config: UserConfig) {
    this.store.dispatch(setUserConfig({ userConfig: config }));
  }

  getUserConfig(): Observable<UserConfig> {
    return this.store.select<UserConfig>((state) => state.app.userConfig);
  }
}
