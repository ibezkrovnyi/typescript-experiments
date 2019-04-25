import React from 'react';
import { ButtonWithIcon } from './impl/ButtonWithIcon';
import { ButtonWithLabel } from './impl/ButtonWithLabel';
import { MakeDefaultPropsOptionalInProps, MakeDefaultPropsOptionalInProps2, unreachable } from './utils'

type ButtonWithIconProps = React.ComponentProps<typeof ButtonWithIcon>;
type ButtonWithLabelProps = React.ComponentProps<typeof ButtonWithLabel>;

type AllPropNames = keyof ButtonWithIconProps | keyof ButtonWithLabelProps;

export type SuperButtonPropsOld =
  | MakeDefaultPropsOptionalInProps2<ButtonWithIconProps, typeof ButtonWithIcon.defaultProps, AllPropNames>
  | MakeDefaultPropsOptionalInProps2<ButtonWithLabelProps, typeof ButtonWithLabel.defaultProps, AllPropNames>;

type ComponentFactory<P> = React.FunctionComponent<P> | React.ComponentClass<P>
type Props<T> = T extends ComponentFactory<infer P> ? P : never;
type DefaultPropNames<T extends { defaultProps?: object }> = Extract<keyof T['defaultProps'], string>;

type P = Props<typeof ButtonWithIcon>
type D = DefaultPropNames<typeof ButtonWithIcon>

type GetAllPropNames<T extends any[]> = { [key in keyof T]: Extract<keyof Props<T[key]>, string> }[number];

export type AllPropNames2 = GetAllPropNames<[typeof ButtonWithIcon, typeof ButtonWithLabel]>;
export type MM<T extends { defaultProps?: object }, AllPropNames extends string> = T extends { defaultProps?: object } ? MakeDefaultPropsOptionalInProps<Props<T>, DefaultPropNames<T>, AllPropNames> : never;

export type ApplyDefaultProps<
  T extends any[],
  AllPropNames extends string = GetAllPropNames<T>,
  > = { [key in Extract<keyof T, number>]: MM<T[key], AllPropNames> }[number]

export type SuperButtonProps = ApplyDefaultProps<[typeof ButtonWithIcon, typeof ButtonWithLabel]>;

/**
 * Discriminated Union (Tagged Union) of Components, property is `type`
 */
export class SuperButtonAsClass extends React.Component<SuperButtonProps> {
  render() {
    switch (this.props.type) {
      case 'with-icon':
        return <ButtonWithIcon {...this.props} />;

      case 'with-label':
        return <ButtonWithLabel {...this.props} />;
    }
    unreachable(this.props);
  }
}

export const SuperButtonAsArrowFunction = (props: SuperButtonProps) => {
  switch (props.type) {
    case 'with-icon':
      return <ButtonWithIcon {...props} />;

    case 'with-label':
      return <ButtonWithLabel {...props} />;
  }
  unreachable(props);
}

const tests = {
  'AsClass': {
    'with-icon': {
      'Good': [
        <SuperButtonAsClass type="with-icon" icon="" />,
        <SuperButtonAsClass type="with-icon" icon="" onClick={() => { }} />,
        <SuperButtonAsClass type="with-icon" icon="" onDoubleClick={() => { }}/>,
        <SuperButtonAsClass type="with-icon" icon="" onClick={() => { }} onDoubleClick={() => { }}/>,
      ],
      'Errors': {
        'title is only in with-label': <SuperButtonAsClass type="with-icon" icon="" title="" />,
      }
    },
    'with-label': {
      'Good': [
        <SuperButtonAsClass type="with-label" label="" />,
        <SuperButtonAsClass type="with-label" label="" title="" />,
        <SuperButtonAsClass type="with-label" label="" onClick={() => { }} />,
        <SuperButtonAsClass type="with-label" label="" onClick={() => { }} title="" />,
      ],
      'Errors': {
        'onDoubleClick is only in with-icon': <SuperButtonAsClass type="with-label" label="" onDoubleClick={() => { }} />,
      }
    }
  }
};
