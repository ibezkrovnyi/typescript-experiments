// Calculate EnhancedComponentProps
type EnhancedPropsSimple<WrappedComponentProps, AddedProps, ChangedProps, RemovedPropKeys extends string> = Omit<
  WrappedComponentProps,
  RemovedPropKeys | keyof ChangedProps
> &
  AddedProps &
  ChangedProps;

// Check that WrappedComponentProps:
// - have no Added props
// - have Removed Props
// - have Changed Props
// and then calculate EnhancedComponentProps
type EnhancedProps<WrappedComponentProps, AddedProps, ChangedProps, RemovedPropKeys extends string> = CheckWrappedComponentProps<
  WrappedComponentProps, AddedProps, ChangedProps, RemovedPropKeys
> extends true
  ? Omit<WrappedComponentProps, RemovedPropKeys | keyof ChangedProps> &
      AddedProps &
      ChangedProps
  : never;

type CheckWrappedComponentProps<WrappedComponentProps, AddedProps, ChangedProps, RemovedPropKeys> = [
  Exclude<keyof ChangedProps | RemovedPropKeys, keyof WrappedComponentProps>
] extends [never]
  ? [Extract<keyof WrappedComponentProps, keyof AddedProps>] extends [never]
    ? true
    : false
  : false;
