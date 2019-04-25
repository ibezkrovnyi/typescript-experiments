import React from 'react';

type ButtonWithIconProps = {
  type: 'with-icon',
  icon: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  onDoubleClick: React.MouseEventHandler<HTMLButtonElement>,
}

/**
 * 1 required property: `icon`
 * 2 optional (via defaultProps) properties: `onClick`, `onDoubleClick`
 * 1 property `onClick` is of the same type as in `ButtonWithLabel`, but here it is via `defaultProps`
 */
export const ButtonWithIcon = ({ icon, onClick, onDoubleClick }: ButtonWithIconProps) => <button onClick={onClick} onDoubleClick={onDoubleClick}>{icon}</button>

ButtonWithIcon.defaultProps = {
  onClick: () => { },
  onDoubleClick: () => { },
}
