import { ActionTypes, ActionUnion } from './helpers';
export declare const actionCreators_v2: {
    action1: (p1: number, p2: string) => {
        type: ActionTypes.Action1;
        p1: number;
        p2: string;
    };
    action2: (p3: object[]) => {
        type: ActionTypes.Action2;
        p3: object[];
    };
};
export declare type ActionsWhichWorks_v2 = ActionUnion<typeof actionCreators_v2>;
