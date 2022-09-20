import React from 'react';
import * as S from './button.styled';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  isActive?: Boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ children, ...props }:ButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
