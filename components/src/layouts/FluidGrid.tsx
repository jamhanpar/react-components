import styled from 'styled-components';
import PolaroidFilm from '../components/Polaroid/PolaroidFilm';
import { polaroidFilm } from '../mock/data.json';

export default function Grid({
  gap = 0,
  columnMinWidth = 200,
  children,
}: {
  gap: number;
  columnMinWidth: number;
  children?: React.ReactNode;
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
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--column-min-width), 100%), 1fr)
  );
  grid-template-rows: repeat(autofill, 1fr);
  grid-auto-flow: column;
  gap: var(--gap);
`;

const GridItem = styled.div`
  border: 1px solid black;
`;
