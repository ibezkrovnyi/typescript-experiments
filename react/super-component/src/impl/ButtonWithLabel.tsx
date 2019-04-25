import React from 'react';

type ButtonWithLabelProps = {
  type: 'with-label',
  label: string,
  title: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

/**
 * 1 required property: `icon`
 * 1 optional (via defaultProps) property: `title`
 * 1 optional (via ? sign) property: `onClick`
 * 1 property `onClick` is of the same type as in `ButtonWithIcon`, but here it is via `? sign`
 */
export const ButtonWithLabel = ({ label, title, onClick }: ButtonWithLabelProps) => <button title={title} onClick={onClick}>{label}</button>

ButtonWithLabel.defaultProps = {
  title: '',
}
