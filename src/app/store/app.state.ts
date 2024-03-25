export const initialState: AppState = {};

export interface AppState {
  userConfig?: UserConfig;
  userState?: UserState;
  apiCache?: ApiCache;
}

export interface UserConfig {
  jiraUrl: string;
}

export interface UserState {
  name: string;
  avatarImgUrl?: string;
}

export interface ApiCache {
  [key: string]: any;
}
