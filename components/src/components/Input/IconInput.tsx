import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../mock/constants';
import Icon from '../Icon/Icon';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 26,
  },
};

export default function IconInput({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}: {
  label: string;
  icon: string;
  width: number;
  size: 'small' | 'large';
}) {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{ '--size': styles.iconSize + 'px' } as React.CSSProperties}
      >
        <Icon id={icon ? icon : 'search'} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        type='text'
        gap={size === 'small' ? '8px' : '16px'}
        style={
          {
            '--width': width + 'px',
            '--height': styles.height + 'px',
            '--border-thickness': styles.borderThickness + 'px',
            '--font-size': styles.fontSize / 16 + 'rem',
          } as React.CSSProperties
        }
        // passing rest of prop values to input including placeholder
        {...delegated}
      />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  font-family: 'Nunito Sans', sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap);
  min-width: max-content;
  padding: 4px 0;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  color: inherit;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input<{ gap: string }>`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  font-family: inherit;
  color: inherit;
  font-weight: 700;
  padding-left: var(--height);
  padding-bottom: 0px;
  outline-offset: 3px;

  &::placeholder {
    font-family: inherit;
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
