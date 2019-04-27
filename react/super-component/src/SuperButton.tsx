import React from 'react';
import { ButtonWithIcon } from './impl/ButtonWithIcon';
import { ButtonWithLabel } from './impl/ButtonWithLabel';
import { ButtonWithCheckbox } from './impl/ButtonWithCheckbox';
import { unreachable, TaggedComponentProps } from './utils'

export type TaggedButtonProps = TaggedComponentProps<[typeof ButtonWithIcon, typeof ButtonWithCheckbox, typeof ButtonWithLabel]>;

/**
 * SuperComponent (Class Component)
 * Discriminated Union (Tagged Union) of Components, tag property is `type`
 */
export class TaggedButtonAsClass extends React.Component<TaggedButtonProps> {
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
export const TaggedButtonAsArrowFunction = (props: TaggedButtonProps) => {
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
  'Tagged Class Component': {
    'with-icon (Functional Component)': {
      'Good': [
        <TaggedButtonAsClass type="with-icon" icon="" />,
        <TaggedButtonAsClass type="with-icon" icon="" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <TaggedButtonAsClass type="with-icon" icon="" onDoubleClick={e => { }}/>, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <TaggedButtonAsClass type="with-icon" icon="" onClick={e => { }} onDoubleClick={() => { }}/>, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
      ],
      'Errors': {
        'title is only in with-label': <TaggedButtonAsClass type="with-icon" icon="" title="" />,
      }
    },
    'with-label (Functional Component)': {
      'Good': [
        <TaggedButtonAsClass type="with-label" label="" />,
        <TaggedButtonAsClass type="with-label" label="" title="" />,
        <TaggedButtonAsClass type="with-label" label="" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <TaggedButtonAsClass type="with-label" label="" onClick={e => { }} title="" />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
      ],
      'Errors': {
        'onDoubleClick is only in with-icon': <TaggedButtonAsClass type="with-label" label="" onDoubleClick={() => { }} />,
      }
    },
    'with-checkbox (Class Component)': {
      'Good': [
        <TaggedButtonAsClass type="with-checkbox" />,
        <TaggedButtonAsClass type="with-checkbox" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLInputElement, MouseEvent>
      ],
      'Errors': {
        'title is only in with-label': <TaggedButtonAsClass type="with-checkbox" title="" />,
        'onDoubleClick is only in with-icon': <TaggedButtonAsClass type="with-checkbox" onDoubleClick={() => { }} />,
      }
    },
  },

  'Tagged Functional Component': {
    'with-icon (Functional Component)': {
      'Good': [
        <TaggedButtonAsArrowFunction type="with-icon" icon="" />,
        <TaggedButtonAsArrowFunction type="with-icon" icon="" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <TaggedButtonAsArrowFunction type="with-icon" icon="" onDoubleClick={e => { }}/>, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <TaggedButtonAsArrowFunction type="with-icon" icon="" onClick={e => { }} onDoubleClick={() => { }}/>, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
      ],
      'Errors': {
        'title is only in with-label': <TaggedButtonAsArrowFunction type="with-icon" icon="" title="" />,
      }
    },
    'with-label (Functional Component)': {
      'Good': [
        <TaggedButtonAsArrowFunction type="with-label" label="" />,
        <TaggedButtonAsArrowFunction type="with-label" label="" title="" />,
        <TaggedButtonAsArrowFunction type="with-label" label="" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        <TaggedButtonAsArrowFunction type="with-label" label="" onClick={e => { }} title="" />, // `e`  is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
      ],
      'Errors': {
        'onDoubleClick is only in with-icon': <TaggedButtonAsArrowFunction type="with-label" label="" onDoubleClick={() => { }} />,
      }
    },
    'with-checkbox (Class Component)': {
      'Good': [
        <TaggedButtonAsArrowFunction type="with-checkbox" />,
        <TaggedButtonAsArrowFunction type="with-checkbox" onClick={e => { }} />, // `e`  is of type React.MouseEvent<HTMLInputElement, MouseEvent>
      ],
      'Errors': {
        'title is only in with-label': <TaggedButtonAsArrowFunction type="with-checkbox" title="" />,
        'onDoubleClick is only in with-icon': <TaggedButtonAsArrowFunction type="with-checkbox" onDoubleClick={() => { }} />,
      }
    },
  }
};
