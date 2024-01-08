import { createAction, props } from '@ngrx/store';
import { UserConfig } from './app.state';

export const setUserConfig = createAction(
  '[User Config] Set User Config',
  props<{ userConfig: UserConfig }>()
);
