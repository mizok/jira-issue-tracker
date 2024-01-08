import { createReducer, on } from '@ngrx/store';
import { setUserConfig } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  userConfig: {
    domain: 'default',
  },
};

export const appReducer = createReducer(
  initialState,
  on(setUserConfig, (state, { userConfig }) => ({ ...state, userConfig }))
);
