# Contents

## Classic way

Create HOC manually

1. [Add prop](src/classic/10%20-%20Add%20prop.tsx)
2. [Remove prop](src/classic/11%20-%20Remove%20prop.tsx)
3. [Change prop type](src/classic/12%20-%20Change%20prop%20type.tsx)
4. [Use WrappedComponent's prop](src/classic/13%20-%20Use%20WrappedComponent's%20prop.tsx)
5. [Full example with comments](src/classic/20%20-%20Full%20example%20with%20comments.tsx)

## using `createEnhancer` helper

Use createEnhancer to create HOC. Generally less types, less verbose.

1. [Full example with comments](src/createEnhancer/30%20-%20Full%20example%20with%20comments.tsx)

# Features

### Protection against cases like:
- some of Added props are already on Props type of WrappedComponent
- some of Changed props are **not** on Props type of WrappedComponent
- some of Removed props are **not** on Props type of WrappedComponent

# Not covered
- When RemovedPropKeys = 'a' and WrappedComponentPropsConstraint = {}, then TWrappedProps infers { a: ... } from WrappedComponent and CheckWrappedComponentProps tells props are correct because it takes into account `WrappedComponentPropsConstraint & TWrappedProps`.
- defaultProps combinations
- check (guard) type assertion for `const innerProps = { ... } as Something`. Should not allow wrong properties passed there.
