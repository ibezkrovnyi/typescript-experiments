import React from 'react';
import { ButtonWithIcon } from './impl/ButtonWithIcon';
import { ButtonWithLabel } from './impl/ButtonWithLabel';
import { ButtonWithCheckbox } from './impl/ButtonWithCheckbox';
import { unreachable, SuperComponentProps } from './utils'

export type SuperButtonProps = SuperComponentProps<[typeof ButtonWithIcon, typeof ButtonWithCheckbox, typeof ButtonWithLabel]>;

/**
 * SuperComponent (Class Component)
 * Discriminated Union (Tagged Union) of Components, tag property is `type`
 */
export class SuperButtonAsClass extends React.Component<SuperButtonProps> {
  render() {
    switch (this.props.type) {
      case 'with-icon':
        return <ButtonWithIcon {...this.props} />;

      case 'with-label':
        return <ButtonWithLabel {...this.props} />;
      
      case 'with-checkbox':
        return <ButtonWithCheckbox {...this.props} />;
    }
    unreachable(this.props);
  }
}

/**
 * SuperComponent (Functional Component)
 * Discriminated Union (Tagged Union) of Components, tag property is `type`
 */
export const SuperButtonAsArrowFunction = (props: SuperButtonProps) => {
  switch (props.type) {
    case 'with-icon':
      return <ButtonWithIcon {...props} />;

    case 'with-label':
      return <ButtonWithLabel {...props} />;

    case 'with-checkbox':
      return <ButtonWithCheckbox {...props} />;
  }
  unreachable(props);
}

const tests = {
  'AsClass': {
    'with-icon (Functional Component)': {
      'Good': [
        <SuperButtonAsClass type="with-icon" icon="" />,
        <SuperButtonAsClass type="with-icon" icon="" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <SuperButtonAsClass type="with-icon" icon="" onDoubleClick={e => { }}/>, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <SuperButtonAsClass type="with-icon" icon="" onClick={e => { }} onDoubleClick={() => { }}/>, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
      ],
      'Errors': {
        'title is only in with-label': <SuperButtonAsClass type="with-icon" icon="" title="" />,
      }
    },
    'with-label (Functional Component)': {
      'Good': [
        <SuperButtonAsClass type="with-label" label="" />,
        <SuperButtonAsClass type="with-label" label="" title="" />,
        <SuperButtonAsClass type="with-label" label="" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <SuperButtonAsClass type="with-label" label="" onClick={e => { }} title="" />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
      ],
      'Errors': {
        'onDoubleClick is only in with-icon': <SuperButtonAsClass type="with-label" label="" onDoubleClick={() => { }} />,
      }
    },
    'with-checkbox (Class Component)': {
      'Good': [
        <SuperButtonAsClass type="with-checkbox" />,
        <SuperButtonAsClass type="with-checkbox" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLInputElement, MouseEvent>
      ],
      'Errors': {
        'title is only in with-label': <SuperButtonAsClass type="with-checkbox" title="" />,
        'onDoubleClick is only in with-icon': <SuperButtonAsClass type="with-checkbox" onDoubleClick={() => { }} />,
      }
    },
  }
};
