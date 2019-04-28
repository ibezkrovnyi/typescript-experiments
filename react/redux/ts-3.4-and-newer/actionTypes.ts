import * as actionCreators from './actionCreators';
import { ActionUnion } from './helpers';

export const actionTypes = {
  Action1: 'action1',
  Action2: 'action2',
} as const;

export type ActionType = typeof actionTypes[keyof typeof actionTypes];
export type Action = ActionUnion<typeof actionCreators>;
