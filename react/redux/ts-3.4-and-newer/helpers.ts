import { ActionCreatorsMapObject } from "redux";

export type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>;
export type ActionByType<TActionUnion, TActionType> = TActionUnion extends { type: TActionType } ? TActionUnion : never;
