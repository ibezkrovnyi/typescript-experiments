type OptionalPropertyNames<T> = { [K in keyof T]-?: undefined extends T[K] ? K : never }[keyof T];
type Id<T> = { [K in keyof T]: T[K] };

export type MakeDefaultPropsOptionalInProps<
  Props,
  DefaultPropNames,
  AllPropNames extends string,
  OptionalPropNames extends string = Extract<OptionalPropertyNames<Props> | DefaultPropNames, string>,
  RequiredPropNames extends keyof Props = Exclude<keyof Props, OptionalPropNames>,
  NeverPropNames extends string = Exclude<AllPropNames, keyof Props>
  > = Id<
    & { [K in RequiredPropNames]: Props[K] }
    & { [K in OptionalPropNames | NeverPropNames]?: K extends keyof Props ? Props[K] : never }
  >;

type ComponentFactory<P> = React.FunctionComponent<P> | React.ComponentClass<P>
type Props<T> = T extends ComponentFactory<infer P> ? P : never;
type DefaultPropNames<T extends { defaultProps?: object }> = keyof T['defaultProps'];
type GetAllPropNames<T extends any[]> = { [K in keyof T]: Extract<keyof Props<T[K]>, string> }[number];
type SubcomponentProps<
  T extends { defaultProps?: object },
  AllPropNames extends string
  > = MakeDefaultPropsOptionalInProps<Props<T>, DefaultPropNames<T>, AllPropNames>

export type SuperComponentProps<
  TupleOfReactComponents extends any[],
  AllPropNames extends string = GetAllPropNames<TupleOfReactComponents>
  > = {
    [K in keyof TupleOfReactComponents]: SubcomponentProps<TupleOfReactComponents[K], AllPropNames>
  }[number];

export function unreachable(_value: never) {
  throw new Error('Error: this function should never be called');
}
