import React from 'react';

export type BaseProps = {
  a: 'a1' | 'a2',
  b: 'b1' | 'b2',
  c: 'c1' | 'c2',
}
export const Base = <T extends BaseProps>(props: T) => <div>{props}</div>
