import styled from 'styled-components';

export default function Grid() {
  return (
    <GridWrapper>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;

`;

const GridItem = styled.div`

`;
