import React from "react";
import { Base, BaseProps } from "../01 - Base Component";
import { Derived } from "../02 - Derived Component";
import { EnhancedProps, EnhancedPropsConstraint } from "../50 - Helpers";
import { createEnhancer } from "./60 - Helpers";

/* Types */

// HOC Requirement - Minimally required props for WrappedComponent:
// Could be`type WrappedComponentPropsConstraint = BaseProps`
type WrappedComponentPropsConstraint = {
  a: "a1" | "a2";
  b: "b1" | "b2";
  c: "c1" | "c2";
};
type AddedProps = {
  z: "added-prop";
};
type ChangedProps = {
  a: () => "changed-prop-type";
};
type RemovedPropKeys = "b";

// HOC
const enhance = createEnhancer<{
  wrappedProps: WrappedComponentPropsConstraint;
  addedProps: AddedProps;
  changedProps: ChangedProps;
  removedKeys: RemovedPropKeys;
}>(WrappedComponent => ({
  // Changed prop
  a,
  // Added prop
  z,
  // Other EnhancedComponent props
  ...props
}) => {
  // Use WrappedComponent "c" prop
  console.log(props.c);

  // We cannot access props `d`, `e` and `f` from DerivedProps here,
  // as these props are not in WrappedComponentPropsConstraint
  // innerProps.d; innerProps.e; innerProps.f;

  return <WrappedComponent {...props} a="a2" b="b1" />;
});

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
