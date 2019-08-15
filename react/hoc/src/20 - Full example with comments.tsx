import React from 'react';
import { Base, BaseProps } from "./01 - Base Component";
import { Derived } from "./02 - Derived Component";
import { EnhancedProps } from "./50 - Helpers";

/* Types */

// HOC Requirement - Minimally required props for WrappedComponent: 
// Could be`type WrappedComponentPropsConstraint = BaseProps`
type WrappedComponentPropsConstraint = {
  a: "a1" | "a2";
  b: "b1" | "b2";
  c: "c1" | "c2";
};
type AddedProps = {
  // d: 1;
  z: "added-prop";
};
type ChangedProps = {
  a: () => "changed-prop-type";
};
type RemovedPropKeys = "b";

// HOC
const enhance = <TWrappedProps extends object>(
  WrappedComponent: React.JSXElementConstructor<
    TWrappedProps & WrappedComponentPropsConstraint
  >
) => ({
  // Changed prop
  a,

  // Added prop
  z,

  // Other EnhancedComponent props
  ...props
}: EnhancedProps<{
  wrappedProps: TWrappedProps & WrappedComponentPropsConstraint;
  addedProps: AddedProps;
  changedProps: ChangedProps;
  removedKeys: RemovedPropKeys;
}>) => {
  // We need this cast because of generics,
  // but if type was wrong TS will complain
  const innerProps = {
    ...props,

    // Changed prop
    a: "a2",

    // Removed prop
    b: "b2"
  } as TWrappedProps & WrappedComponentPropsConstraint;

  // Use WrappedComponent "c" prop
  console.log(innerProps.c);

  // We cannot access props `d`, `e` and `f` from DerivedProps here,
  // as these props are not in WrappedComponentPropsConstraint
  // innerProps.d; innerProps.e; innerProps.f;

  return <WrappedComponent {...innerProps}>{props}</WrappedComponent>;
};

// Enhance
const EnhancedBase = enhance(Base);
const EnhancedDerived = enhance(Derived);

// Usage
const usage = (
  <>
    <EnhancedBase a={() => "changed-prop-type"} c="c1" z="added-prop" />
    <EnhancedDerived
      a={() => "changed-prop-type"}
      c="c2"
      d={2}
      e={4}
      f={5}
      z="added-prop"
    />
  </>
);
usage;
