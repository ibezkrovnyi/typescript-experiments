import { createAction, ActionTypes, ActionUnion } from './helpers';

export const actionCreators_v2 = {
  action1: (p1: number, p2: string) => createAction({
    type: ActionTypes.Action1,
    p1,
    p2,
  }),

  action2: (p3: object[]) => createAction({
    type: ActionTypes.Action2,
    p3,
  }),
};

export type ActionsWhichWorks_v2 = ActionUnion<typeof actionCreators_v2>;