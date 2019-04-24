import { ActionCreatorsMapObject } from "redux";

export enum ActionTypes {
  Action1 = 'action1',
  Action2 = 'action2',
}

// for action creators: disables widening of 'type' property
export function createAction<T extends { type: ActionTypes }>(d: T): T {
  return d;
}

export type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>;
export type ActionByType<TActionUnion, TActionType> = TActionUnion extends { type: TActionType } ? TActionUnion : never;
