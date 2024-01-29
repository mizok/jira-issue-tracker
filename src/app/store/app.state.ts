export const initialState: AppState = {
  userConfig: {
    jiraUrl: '',
  },
  userState: {
    name: '',
  },
};

export interface AppState {
  userConfig: UserConfig;
  userState: UserState;
}

export interface UserConfig {
  jiraUrl: string;
}

export interface UserState {
  name: string;
}
