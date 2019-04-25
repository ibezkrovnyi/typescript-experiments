type OptionalPropertyNames<T> = { [key in keyof T]-?: undefined extends T[key] ? key : never }[keyof T];
type Id<T> = { [K in keyof T]: [T[K]] extends [never] ? never : T[K] };

export type MakeDefaultPropsOptionalInProps<
  Props,
  DefaultPropNames extends string,
  AllPropNames extends string,
  OptionalPropNames = DefaultPropNames | OptionalPropertyNames<Props>
  > = Id<
    & { [K in Exclude<keyof Props, OptionalPropNames>]: Props[K] }
    & { [K in Extract<keyof Props, OptionalPropNames>]?: Props[K] }
    & { [K in Exclude<AllPropNames, keyof Props>]?: never }
  >;

type ComponentFactory<P> = React.FunctionComponent<P> | React.ComponentClass<P>
type Props<T> = T extends ComponentFactory<infer P> ? P : never;
type DefaultPropNames<T extends { defaultProps?: object }> = Extract<keyof T['defaultProps'], string>;
type GetAllPropNames<T extends any[]> = { [K in keyof T]: Extract<keyof Props<T[K]>, string> }[number];
type SubcomponentProps<T, AllPropNames extends string> = T extends { defaultProps?: object } ? MakeDefaultPropsOptionalInProps<Props<T>, DefaultPropNames<T>, AllPropNames> : never;

export type SuperComponentProps<TupleOfReactComponents extends any[], AllPropNames extends string = GetAllPropNames<TupleOfReactComponents>> = {
  [K in Extract<keyof TupleOfReactComponents, number>]: SubcomponentProps<TupleOfReactComponents[K], AllPropNames>
}[number]

export function unreachable(_value: never) {
  throw new Error('Error: this function should never be called');
}
