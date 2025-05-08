import styled from 'styled-components';

type GridProps = {
  autoFlow?: string;
  columns?: number;
  colSpecs?: string;
  rowSpecs?: string;
  rowSpacing?: string;
  colSpacing?: string;
};

export default function Grid({
  autoFlow = 'row',
  columns = 2,
  colSpecs,
  rowSpecs,
  rowSpacing,
  colSpacing,
}: GridProps) {
  const numOfColumns: string = colSpecs || `repeat(${columns}, 1fr)` || 'auto';
  const numOfRows: string = rowSpecs || 'auto';
  const spacing =
    (rowSpacing && colSpacing && `${rowSpacing}px ${colSpacing}px`) ||
    (rowSpacing && `${rowSpacing}px 0px`) ||
    (colSpacing && `0px ${colSpacing}px`) ||
    '0';

  return (
    <GridWrapper
      autoFlow={autoFlow}
      columnSpecs={numOfColumns}
      rowSpecs={numOfRows}
      spacing={spacing}
    >
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem>
      <header>Hello World</header>
      <section>Stuff here</section>
      <footer>Copyright notice</footer>
    </GridWrapper>
  );
}

type GridWrapperProps = {
  autoFlow?: string;
  columnSpecs?: string;
  rowSpecs?: string;
  spacing?: string;
};

const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  height: 300px;
  grid-auto-flow: ${(props) => props.autoFlow};
  grid-template-columns: ${(props) => props.columnSpecs};
  grid-template-rows: ${(props) => props.rowSpecs};
  gap: ${(props) => props.spacing || '0'};
`;

const GridItem = styled.div`
  border: 1px solid;
`;
