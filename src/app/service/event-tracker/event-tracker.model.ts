export type CanAttachEventListener<T> = {
  addEventListener: (
    eventType: string,
    handler: (event: T) => unknown
  ) => unknown;
  removeEventListener: (
    eventType: string,
    handler: (event: T) => unknown
  ) => unknown;
  [key: string]: any;
};
