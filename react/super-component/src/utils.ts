type OptionalPropertyNames<T> = { [K in keyof T]-?: undefined extends T[K] ? K : never }[keyof T];
type Id<T> = { [K in keyof T]: T[K] };

export type MakeDefaultPropsOptionalInProps<
  Props,
  DefaultPropNames extends keyof Props,
  OptionalPropNames extends keyof Props = Extract<OptionalPropertyNames<Props> | DefaultPropNames, string>,
  RequiredPropNames extends keyof Props = Exclude<keyof Props, OptionalPropNames>,
  > = Id<
    & { [K in RequiredPropNames]: Props[K] }
    & { [K in OptionalPropNames]?: Props[K] }
  >;

type ComponentFactory<P> = React.FunctionComponent<P> | React.ComponentClass<P>
type Props<T> = T extends ComponentFactory<infer P> ? P : never;
type DefaultPropNames<P, T extends { defaultProps?: object }> = Extract<keyof T['defaultProps'], keyof P>;
type SubcomponentProps<T extends { defaultProps?: object }, P = Props<T>> = MakeDefaultPropsOptionalInProps<P, DefaultPropNames<P, T>>;

export type TaggedComponentProps<TupleOfReactComponents extends any[]> = {
  [K in keyof TupleOfReactComponents]: SubcomponentProps<TupleOfReactComponents[K]>
}[number];

export function unreachable(_value: never) {
  throw new Error('Error: this function should never be called');
}
