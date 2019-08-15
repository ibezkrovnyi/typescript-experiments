export type EnhancedPropsConstraint = { wrappedProps: {}, addedProps: {}, changedProps: {}, removedKeys: string };

// Calculate EnhancedComponentProps
type EnhancedPropsSimple<T extends EnhancedPropsConstraint> = Omit<
  T['wrappedProps'],
  T['removedKeys'] | keyof T['changedProps']
> &
  T['addedProps'] &
  T['changedProps'];

// Check that WrappedComponentProps and HOC Props are valid (see below)
// and then calculate EnhancedComponentProps
export type EnhancedProps<T extends EnhancedPropsConstraint> = CheckWrappedComponentProps<
  T
> extends true
  ? EnhancedPropsSimple<T>
  : never;

// Check that WrappedComponentProps:
// - have no Added props
// - have Removed Props
// - have Changed Props
type CheckWrappedComponentProps<T extends EnhancedPropsConstraint> = [
  Exclude<keyof T["changedProps"] | T["removedKeys"], keyof T["wrappedProps"]>
] extends [never]
  ? [Extract<keyof T["wrappedProps"], keyof T["addedProps"]>] extends [never]
    ? true
    : false
  : false;
