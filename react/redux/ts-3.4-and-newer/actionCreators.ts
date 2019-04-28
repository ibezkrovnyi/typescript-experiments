import { actionTypes } from './actionTypes';

export const action1 = (p1: number, p2: string) => ({
  type: actionTypes.Action1,
  p1,
  p2,
});

export const action2 = (p3: object[]) => ({
  type: actionTypes.Action2,
  p3,
});

