import React from 'react';
import styled from 'styled-components';
import { Search, AtSign, ChevronDown } from 'react-feather';

const icons = {
  search: Search,
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
};

const Icon = ({
  id,
  size,
  strokeWidth = 1,
  ...delegated
}: {
  id: string;
  size: number;
  strokeWidth?: number;
}) => {
  const IconIllustration = icons[id as keyof typeof icons];

  if (!IconIllustration) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={
        {
          '--size': size + 'px',
          '--stroke-width': strokeWidth + 'px',
        } as React.CSSProperties
      }
      {...delegated}
    >
      <IconIllustration color='currentColor' size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
