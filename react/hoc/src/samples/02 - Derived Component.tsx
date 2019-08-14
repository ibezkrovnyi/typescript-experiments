import { BaseProps } from "./01 - Base Component";

export type DerivedProps = BaseProps & {
  a: 'a1' | 'a2',
  b: 'b1' | 'b2',
  c: 'c1' | 'c2',
}
export const Derived = <T extends DerivedProps>(props: T) => <div>{props}</div>
