import styled from 'styled-components';

export default function Grid({
  gap = 0,
  columnMinWidth = 200,
  children,
}: {
  gap: number;
  columnMinWidth: number;
  children: React.ReactNode;
}) {
  return (
    <GridWrapper
      style={
        {
          '--gap': `${gap}px`,
          '--column-min-width': `${columnMinWidth}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--column-min-width), 100%), 1fr)
  );
  gap: var(--gap);
`;
