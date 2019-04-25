import { ActionCreatorsMapObject } from "redux";
export declare enum ActionTypes {
    Action1 = "action1",
    Action2 = "action2"
}
export declare function createAction<T extends {
    type: ActionTypes;
}>(d: T): T;
export declare type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>;
export declare type ActionByType<TActionUnion, TActionType> = TActionUnion extends {
    type: TActionType;
} ? TActionUnion : never;
