export enum WorkerMessageResponseType {
  INITED = 'INITED',
  RESPONSE_API_DATA = 'RESPONSE_API_DATA',
  GET_API_DATA_ERR = 'GET_API_DATA_ERR',
}

export enum WorkerPostMessageType {
  INIT = 'INIT',
  GET_API_DATA = 'GET_API_DATA',
}

export const SERVICE_WORKER = 'jira-rader-sw-worker.js';
