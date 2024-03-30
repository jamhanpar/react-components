import styled from 'styled-components';
import { images } from '../mock/data.json';

export default function PhotoAlbum() {
  return (
    <GridWrapper>
      {images.map((image, index) => (
        <GridItem key={index}>
          <Image src={image.src} alt={image.alt} />
        </GridItem>
      ))}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  place-content: center;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 200px);
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

const GridItem = styled.div`
  height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;

  &:nth-of-type(6n + 1) {
    grid-column: 1 / -1;
  }

  &:nth-of-type(6n + 2) {
    grid-column: 1 / 3;
  }

  &:nth-of-type(6n + 3) {
    grid-column: 3;
  }

  &:nth-of-type(4) {
    grid-column: 1;
  }

  &:nth-of-type(5) {
    grid-column: 2;
  }

  &:nth-of-type(6) {
    grid-column: 3;
  }
`;

const Image = styled.img`
border-radius: 1rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
