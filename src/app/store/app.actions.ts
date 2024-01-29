import { createAction, props } from '@ngrx/store';
import { UserConfig, UserState } from './app.state';

export const setUserConfig = createAction(
  '[User Config] Set User Config',
  props<UserConfig>()
);

export const setUserState = createAction(
  '[User State] Set User State',
  props<UserState>()
);
