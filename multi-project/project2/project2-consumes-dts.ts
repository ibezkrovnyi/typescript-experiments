import { ActionsWhichDoesntWork_v1, ActionsWhichDoesntWork_v2, ActionsWhichWorks_v2 } from '../project1/dist/project1-exports-dts';

let a: ActionsWhichDoesntWork_v1;
let b: ActionsWhichDoesntWork_v2;
let c: ActionsWhichWorks_v2;

a = b = c = a;

// type RR<T> = T extends { [K in infer P]: infer O[K] }


type Narrow<T>  = 
T extends string ? T :
T extends number ? T :
T extends boolean ? T :
T extends undefined ? T :
T extends Function ? T :
NarrowObject<T>;

type NarrowObject<T> = {
  readonly [P in keyof T]: Narrow<T[P]>;
};

function a1<T extends { [_ in keyof K]: K[_]}, K = T>(p: T) {
  return p;
}

function a2<T extends { [t: string]: any }>(p2: T) {
  return p2;
}

let b1 = a1({ n: 3 })
let b2 = a2({ n: 3 })