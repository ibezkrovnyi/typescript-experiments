import React from 'react';

type ButtonWithCheckboxProps = {
  type: 'with-checkbox',
  onClick: React.MouseEventHandler<HTMLInputElement>,
}

type ButtonWithCheckboxState = {
  checked: boolean;
}

/**
 * 1 required property: `icon`
 * 1 optional (via defaultProps) property: `title`
 * 1 optional (via ? sign) property: `onClick`
 * 1 property `onClick` is of the same type as in `ButtonWithIcon`, but here it is via `? sign`
 */
export class ButtonWithCheckbox extends React.Component<ButtonWithCheckboxProps, ButtonWithCheckboxState> {
  static defaultProps = {
    onClick: () => { },
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.state.checked}
        onClick={e => this.setState({ checked: !this.state.checked }, () => this.props.onClick(e))}
      />
    );
  }
}
