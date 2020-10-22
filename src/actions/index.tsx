export interface IIncrementCountAction {
  readonly type: 'increment';
}

export interface IDecrementCountAction {
  readonly type: 'decrement';
}

export type CountActions = IIncrementCountAction | IDecrementCountAction;
