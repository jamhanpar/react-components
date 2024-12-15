import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import './button.scss';

interface ButtonProps {
  classname?: string;
  contentClassname?: string;
  buttonType?: 'headless' | 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  classname,
  contentClassname,
  buttonType = 'headless',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      className={clsx('btn', `btn-${buttonType}`, classname)}
      style={{ backgroundColor }}
      {...props}
    >
      <ButtonContents className={clsx('btn_contents', contentClassname)}>
        {label}
      </ButtonContents>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: none;
  margin: 1em;
  padding: 0;
  background: transparent;
  width: fit-content;
  font-size: 1em;

  &:hover {
    cursor: pointer;

    .btn_contents {
      transform: translateY(-10px);
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }
`;

const ButtonContents = styled.span`
  border: 1px solid lightgray;
  border-radius: 16px;
  padding: 16px 20px;
  background: transparent;
  display: grid;
  place-content: center;
  height: 100%;
  font-size: 1em;
  line-height: 1;
  transition: transform 250ms, box-shadow 250ms;
`;
