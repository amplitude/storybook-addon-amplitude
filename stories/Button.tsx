import React from 'react';
import type { FC } from 'react';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
  ...props
}) => {
  const baseClass = 'storybook-button';
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const sizeClass = `storybook-button--${size}`;

  return (
    <button
      type="button"
      className={[baseClass, mode, sizeClass].join(' ')}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
