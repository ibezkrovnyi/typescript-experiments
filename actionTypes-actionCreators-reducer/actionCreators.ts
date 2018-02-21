import { ActionTypes } from './actionTypes';

// disables widening of 'type' property
function createAction<T extends { type: ActionTypes }>(d: T): T {
  return d;
}

export const actions = {
  action1: (p1: number, p2: string) => createAction({
    type: ActionTypes.Action1,
    p1,
    p2,
  }),

  action2: (p3: object[]) => createAction({
    type: ActionTypes.Action2,
    p3,
  }),

}