import { Base } from "./01 - Base Component";
import { Derived } from "./02 - Derived Component";
import { EnhancedProps } from "./50 - Helpers";

/* Types */
type WrappedComponentPropsConstraint = {};
type AddedProps = {
  z: "added-prop";
};

// HOC
const enhance = <TWrappedProps extends object>(
  WrappedComponent: React.JSXElementConstructor<
    TWrappedProps & WrappedComponentPropsConstraint
  >
) => ({
  // Added prop
  z,

  // Other EnhancedComponent props
  ...props
}: EnhancedProps<{
  wrappedProps: TWrappedProps & WrappedComponentPropsConstraint;
  addedProps: AddedProps;
  changedProps: {};
  removedKeys: never;
}>) => {
  // We need this cast because of generics,
  // but if type was wrong TS will complain
  const innerProps = {
    ...props,
  } as TWrappedProps & WrappedComponentPropsConstraint;

  return <WrappedComponent {...innerProps}>{props}</WrappedComponent>;
};

// Enhance
const EnhancedBase = enhance(Base);
const EnhancedDerived = enhance(Derived);

// Usage
const usage = (
  <>
    <EnhancedBase a="a2" b="b1" c="c1" z="added-prop" />
    <EnhancedDerived
      a="a1"
      b="b2"
      c="c2"
      d={2}
      e={4}
      f={5}
      z="added-prop"
    />
  </>
);
usage;
