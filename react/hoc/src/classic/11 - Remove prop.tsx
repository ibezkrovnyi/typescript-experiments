import React from 'react';
import { Base, BaseProps } from "../01 - Base Component";
import { Derived } from "../02 - Derived Component";
import { EnhancedProps } from "../50 - Helpers";

/* Types */
type WrappedComponentPropsConstraint = {
  b: "b2";
};
type RemovedPropKeys = "b";

// HOC
const enhance = <TWrappedProps extends object>(
  WrappedComponent: React.JSXElementConstructor<
    TWrappedProps & WrappedComponentPropsConstraint
  >
) => (
  // Other EnhancedComponent props
  props: EnhancedProps<{
    wrappedProps: TWrappedProps & WrappedComponentPropsConstraint;
    addedProps: {};
    changedProps: {};
    removedKeys: RemovedPropKeys;
  }>
) => {
  // We need this cast because of generics,
  // but if type was wrong TS will complain
  const innerProps = {
    ...props,

    // Removed prop
    b: "b2"
  } as TWrappedProps & WrappedComponentPropsConstraint;

  return <WrappedComponent {...innerProps}>{props}</WrappedComponent>;
};

// Enhance
const EnhancedBase = enhance(Base);
const EnhancedDerived = enhance(Derived);

// Usage
const usage = (
  <>
    <EnhancedBase a="a2" c="c1" />
    <EnhancedDerived a="a1" c="c2" d={2} e={4} f={5} />
  </>
);
usage;
