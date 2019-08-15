# Contents

1. [Add prop](src/10%20-%20Add%20prop.tsx)
2. [Remove prop](src/11%20-%20Remove%20prop.tsx)
3. [Change prop type](src/12%20-%20Change%20prop%20type.tsx)
4. [Use WrappedComponent's prop](src/13%20-%20Use%20WrappedComponent's%20prop.tsx)
5. [Full example with comments](src/20%20-%20Full%20example%20with%20comments.tsx)

# Features
- Protection against 

# Not covered
- When RemovedPropKeys = 'a' and WrappedComponentPropsConstraint = {}, then TWrappedProps infers { a: ... } from WrappedComponent and CheckWrappedComponentProps tells props are correct because it takes into account `WrappedComponentPropsConstraint & TWrappedProps`.
- defaultProps combinations
- check (guard) type assertion for `const innerProps = { ... } as Something`. Should not allow wrong properties passed there.
