import styled from 'styled-components';
import { images } from '../mock/data.json';

type Image = {
  src: string;
  alt: string;
};

export default function Masonry() {
  const imageData: Image[] = Object.values(images);

  return (
    <Wrapper>
      {imageData.map((image: Image, index) => (
        <ListItem key={index}>
            <a href={image.src}><ItemImage src={image.src} alt={image.alt} /></a>
        </ListItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  column-count: 3;
  column-gap: 10px;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const ItemImage = styled.img`
  width: 250px;
`;
