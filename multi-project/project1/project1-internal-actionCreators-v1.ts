import { createAction, ActionTypes } from './helpers';

export const action1 = (p1: number, p2: string) => createAction({
  type: ActionTypes.Action1,
  p1,
  p2,
});

export const action2 = (p3: object[]) => createAction({
  type: ActionTypes.Action2,
  p3,
});
