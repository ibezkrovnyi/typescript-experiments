import { ActionTypes } from './helpers';
export declare const action1: (p1: number, p2: string) => {
    type: ActionTypes.Action1;
    p1: number;
    p2: string;
};
export declare const action2: (p3: object[]) => {
    type: ActionTypes.Action2;
    p3: object[];
};
