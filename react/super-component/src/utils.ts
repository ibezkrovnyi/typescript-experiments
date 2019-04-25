type OptionalPropertyNames<T> = { [key in keyof T]-?: undefined extends T[key] ? key : never }[keyof T];
type Id<T> = { [K in keyof T]: [T[K]] extends [never] ? never : T[K] };

export type MakeDefaultPropsOptionalInProps<
  Props,
  DefaultPropNames extends string,
  AllPropNames extends string,
  OptionalPropNames = DefaultPropNames | OptionalPropertyNames<Props>
> = Id<{ [key in Exclude<keyof Props, OptionalPropNames>]: Props[key] }
  & { [key in Extract<keyof Props, OptionalPropNames>]?: Props[key] }
  & { [key in Exclude<AllPropNames, keyof Props>]?: never }>;

export type MakeDefaultPropsOptionalInPropsOld<
  Props,
  DefaultProps,
  AllPropNames extends string,
  OptionalPropNames = keyof DefaultProps | OptionalPropertyNames<Props>
  > = { [key in Exclude<keyof Props, OptionalPropNames>]: Props[key] }
    & { [key in Extract<keyof Props, OptionalPropNames>]?: Props[key] }
    & { [key in Exclude<AllPropNames, keyof Props>]?: never }

export function unreachable(_value: never) {
  throw new Error('Error: this function should never be called');
}
