import {
  Action,
  ActionReducer,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { setUserConfig, setUserState } from './app.actions';
import { AppState, initialState } from './app.state';
import { localStorageSync } from 'ngrx-store-localstorage';

export const reducers: Record<string, ActionReducer<AppState, Action>> = {
  appState: createReducer(
    initialState,
    on(setUserConfig, (state, userConfig) => ({ ...state, userConfig })),
    on(setUserState, (state, userState) => ({ ...state, userState }))
  ),
};

export function localStorageSyncReducer(reducer: any): any {
  return localStorageSync({ keys: ['appState'], rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];
