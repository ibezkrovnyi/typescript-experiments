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

// Check that WrappedComponentProps:
// - have no Added props
// - have Removed Props
// - have Changed Props
export type ValidateWrappedComponentProps<ResultType, TWrappedProps, WrappedProps, AddedProps, ChangedProps, RemovedKeys> = [
  Exclude<keyof ChangedProps | RemovedKeys, keyof WrappedProps>
] extends [never]
  ? [Extract<keyof TWrappedProps | keyof WrappedProps, keyof AddedProps>] extends [never]
    ? ResultType
    : never
  : never;
  