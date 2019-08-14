import React from 'react';
import { Base, BaseProps } from './samples/01 - Base Component';

type AddedOrModifiedProps = {
  a: 'different-type';
  d: 'new-prop';
};
type ModifiedOrRemovedProps = 'a' | 'b';

const withS = <TBaseProps extends object>(Component: React.JSXElementConstructor<BaseProps & TBaseProps>) =>
  ({ a, d, ...props }: Omit<TBaseProps & BaseProps, ModifiedOrRemovedProps> & AddedOrModifiedProps) => {
    const innerProps = {
      ...props,
      a: 'a2',
      b: 'b2',
    } as TBaseProps & BaseProps;
    return <Component {...innerProps} a="a2">{props}</Component>;
  }

const T = withS(Base);

const ttt = <T a="different-type" d="new-prop" c="c2" />