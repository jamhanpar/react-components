import React from 'react';
import './button.scss';
import styled from 'styled-components';

interface ButtonProps {
  classname?: string;
  buttonType?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  classname,
  buttonType = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      type='button'
      className={`${buttonType} ${classname}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
