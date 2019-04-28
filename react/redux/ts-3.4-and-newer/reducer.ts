import { ActionByType } from "./helpers";
import { actionTypes, Action, ActionType } from "./actionTypes";

const initialState = {
  app: {
    value: 5,
  },
};

export function appReducer(store = initialState.app, action: Action) {
  switch (action.type) {
    case actionTypes.Action1:
      action.p1; // ok
      action.p2; // ok

      action.p3; // error
      break;
    case actionTypes.Action2:
      action.p3; // ok

      action.p1; // error
      action.p2; // error

      let a: ActionByType<Action, typeof actionTypes.Action1> = null as any;
      a.p1; // ok
      a.p2; // ok
      a.p3; // error

      let b: ActionByType<Action, ActionType> = null as any;
      b.p1; // ok
      b.p2; // ok
      b.p3; // error
      break;
    default:
      return store;
  }
}
