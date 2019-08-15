import { EnhancedProps, EnhancedPropsConstraint } from "../50 - Helpers";

export const createEnhancer = <T extends EnhancedPropsConstraint>(
  callback: (
    WrappedComponent: React.JSXElementConstructor<T["wrappedProps"]>
  ) => (props: EnhancedProps<T>) => JSX.Element
) => <TWrappedProps extends object>(
  WrappedComponent: React.JSXElementConstructor<
    TWrappedProps & T["wrappedProps"]
  >
) =>
  (callback as unknown as (
    WrappedComponent: React.JSXElementConstructor<
      TWrappedProps & T["wrappedProps"]
    >
  ) => (
    props: EnhancedProps<{
      wrappedProps: TWrappedProps & T["wrappedProps"];
      addedProps: T["addedProps"];
      changedProps: T["changedProps"];
      removedKeys: T["removedKeys"];
    }>
  ) => JSX.Element)(WrappedComponent);
