export const initialState: AppState = {};

export interface AppState {
  userConfig?: UserConfig;
  userState?: UserState;
}

export interface UserConfig {
  jiraUrl: string;
}

export interface UserState {
  name: string;
  avatarImgUrl?: string;
}
