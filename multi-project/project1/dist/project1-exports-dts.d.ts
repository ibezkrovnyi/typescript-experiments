import * as actionCreators_v1 from './project1-internal-actionCreators-v1';
import { ActionUnion } from './helpers';
import { ActionsWhichWorks_v2, actionCreators_v2 } from './project1-internal-actionCreators-v2';
export declare type ActionsWhichDoesntWork_v1 = ActionUnion<typeof actionCreators_v1>;
export declare type ActionsWhichDoesntWork_v2 = ActionUnion<typeof actionCreators_v2>;
export { ActionsWhichWorks_v2 };
