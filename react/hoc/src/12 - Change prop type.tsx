import React from 'react';
import { Base, BaseProps } from "./01 - Base Component";
import { Derived } from "./02 - Derived Component";
import { EnhancedProps } from "./50 - Helpers";

/* Types */

// HOC Requirement - Minimally required props for WrappedComponent:
// Could be`type WrappedComponentPropsConstraint = BaseProps`
type WrappedComponentPropsConstraint = {
  a: "a1" | "a2";
};
type ChangedProps = {
  a: () => "changed-prop-type";
};

// HOC
const enhance = <TWrappedProps extends object>(
  WrappedComponent: React.JSXElementConstructor<
    TWrappedProps & WrappedComponentPropsConstraint
  >
) => ({
  // Changed prop
  a,

  // Other EnhancedComponent props
  ...props
}: EnhancedProps<{
  wrappedProps: TWrappedProps & WrappedComponentPropsConstraint;
  addedProps: {};
  changedProps: ChangedProps;
  removedKeys: never;
}>) => {
  // We need this cast because of generics,
  // but if type was wrong TS will complain
  const innerProps = {
    ...props,

    // Changed prop
    a: "a2"
  } as TWrappedProps & WrappedComponentPropsConstraint;

  return <WrappedComponent {...innerProps}>{props}</WrappedComponent>;
};

// Enhance
const EnhancedBase = enhance(Base);
const EnhancedDerived = enhance(Derived);

// Usage
const usage = (
  <>
    <EnhancedBase a={() => "changed-prop-type"} b="b1" c="c1" />
    <EnhancedDerived
      a={() => "changed-prop-type"}
      b="b2"
      c="c2"
      d={2}
      e={4}
      f={5}
    />
  </>
);
usage;
