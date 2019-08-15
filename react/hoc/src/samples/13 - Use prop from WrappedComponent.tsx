import { Base, BaseProps } from "./01 - Base Component";
import { Derived } from "./02 - Derived Component";
import { EnhancedProps } from "./50 - Helpers";

/* Types */

// HOC Requirement - Minimally required props for WrappedComponent:
// Could be`type WrappedComponentPropsConstraint = BaseProps`
type WrappedComponentPropsConstraint = {
  c: "c1" | "c2";
};

// HOC
const enhance = <TWrappedProps extends object>(
  WrappedComponent: React.JSXElementConstructor<
    TWrappedProps & WrappedComponentPropsConstraint
  >
) => (
  props: EnhancedProps<{
    wrappedProps: TWrappedProps & WrappedComponentPropsConstraint;
    addedProps: {};
    changedProps: {};
    removedKeys: never;
  }>
) => {
  // Use WrappedComponent "c" prop
  console.log(props.c);

  return <WrappedComponent {...props}>{props}</WrappedComponent>;
};

// Enhance
const EnhancedBase = enhance(Base);
const EnhancedDerived = enhance(Derived);

// Usage
const usage = (
  <>
    <EnhancedBase a="a1" b="b1" c="c1" />
    <EnhancedDerived a="a2" b="b1" c="c2" d={2} e={4} f={5} />
  </>
);
usage;
