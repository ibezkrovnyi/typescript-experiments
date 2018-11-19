type FunctorBody<T extends unknown> = {
  map: <A extends unknown>(f: (param: T) => A) => FunctorBody<A>,
  value: T,
}

export const Functor = <T extends unknown>(value: T): FunctorBody<T> => ({
  // map: <A extends unknown>(f: (p: T) => A),
  map: f => Functor(f(value)),
  value,
});

// const strVal: string
const strVal = Functor(1)
  .map(val => `${val}`)
  .value;

// const strMapped: FunctorBody<string>
const strMapped = Functor(1)
  .map(val => `${val}`);

// (property) value: string
strMapped.value;

// (property) map: <A extends unknown>(f: (param: string) => A) => FunctorBody<A>
strMapped.map;

// const numberVal: number
const numberVal = Functor('100')
  .map(parseInt)
  .value;

// const numberMapped: FunctorBody<number>
const numberMapped = Functor('100')
  .map(parseInt);

// const booleanMapped: FunctorBody<boolean>
const booleanMapped = numberMapped.map(val => Boolean(val));
