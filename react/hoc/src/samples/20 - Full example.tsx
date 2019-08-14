import { Base, BaseProps } from "./01 - Base Component";
import { Derived } from "./02 - Derived Component";

// Types
type AddedProps = {
  d: 'added-prop';
}
type ChangedProps = {
  a: () => 'changed-prop-type';
};
type RemovedPropKeys = 'b';

// Helpers
type EnhancedProps<TWrappedComponentProps> = Omit<TWrappedComponentProps, RemovedPropKeys | keyof ChangedProps> & AddedProps & ChangedProps;

// Check that EnhancedProps have no Removed props 
// Check that WrappedComponentProps have no Added props
// type Guard<TWrappedComponentProps, AddedProps | RemovedPropKeys> = 

const enhance = <TBaseProps extends object>(Component: React.JSXElementConstructor<BaseProps & TBaseProps>) =>
  ({
    // Changed prop
    a,

    // Added prop
    d,

    // Other EnhancedComponent props
    ...props
  }: EnhancedProps<TBaseProps & BaseProps>) => {

    // We need this cast because of generics,
    // but if type was wrong TS will complain
    const innerProps = {
      ...props,
      
      // Changed prop
      a: 'a2',

      // Removed prop
      b: 'b2',
    } as TBaseProps & BaseProps;
    
    // Use WrappedComponent "c" prop
    console.log(innerProps.c);

    return <Component {...innerProps}>{props}</Component>;
  }

// Enhance
const EnhancedBase = enhance(Base);
const EnhancedDerived = enhance(Derived);

// Usage
const usage = <>
  <EnhancedBase a={() => 'changed-prop-type'} c="c1" d="added-prop" />
  <EnhancedDerived a={() => 'changed-prop-type'} c="c2" d="added-prop" />
</>;
