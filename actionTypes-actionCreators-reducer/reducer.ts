import { ActionUnion, ActionByType } from "./helpers";
import * as actionCreators from './actionCreators';
import { ActionTypes } from "./actionTypes";

const initialState = {
  app: {
    value: 5,
  },
};

type Action = ActionUnion<typeof actionCreators>;

export function appReducer(store = initialState.app, action: Action) {
  switch (action.type) {
    case ActionTypes.Action1:
      action.p1; // ok
      action.p2; // ok

      action.p3; // error
      break;
    case ActionTypes.Action2:
      action.p3; // ok

      action.p1; // error
      action.p2; // error

      let a: ActionByType<Action, ActionTypes.Action1>;
      a.p1; // ok
      a.p2; // ok
      a.p3; // error
      break;
    default:
      return store;
  }
}
