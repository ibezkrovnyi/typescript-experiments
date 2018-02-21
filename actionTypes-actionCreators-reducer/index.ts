import { actions } from './actionCreators';
import { ActionTypes } from './actionTypes';

const initialState = {
  app: {
    value: 5,
  },
};

// Union
type Action = ReturnType<typeof actions[keyof typeof actions]>;

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
      break;
    default:
      return store;
  }
}