import React from 'react';
import { BaseProps } from "./01 - Base Component";

export type DerivedProps = BaseProps & {
  d: 1 | 2,
  e: 3 | 4,
  f: 5 | 6,
}
export const Derived = <T extends DerivedProps>(props: T) => <div>{props}</div>
