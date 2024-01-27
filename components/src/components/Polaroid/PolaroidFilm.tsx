import { useMemo } from 'react';
import styled from 'styled-components';
import './PolaroidFilm.scss';

interface PolaroidProps {
  imageSrc: string;
  imageAlt: string;
  description?: string;
  direction?: 'left' | 'right';
  rotationAngle?: number;
}

export default function PolaroidFilm({
  imageSrc,
  imageAlt,
  description,
  direction,
  rotationAngle,
}: PolaroidProps) {
  const rotation =
    Math.ceil(Math.random() * 25) * (direction === 'right' ? 1 : -1);

  return (
    <Wrapper
      style={{
        transform: `rotate(${rotationAngle ? rotationAngle : rotation}deg)`,
      }}
    >
      <ImageWrapper>
        <Image src={imageSrc} alt={imageAlt} />
      </ImageWrapper>
      <TextWrapper>
        <Text>{description}</Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  background-color: white;
  width: 240px;
  height: 320px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  border: 1px solid white;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* add inner box shadow */
  border-radius: 4px;
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.2);
  /* box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); */
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.8;
`;

const Text = styled.span`
  color: #2d2d2d;
  margin-left: 1em;
  margin-right: 1em;

  font-family: 'Just Another Hand';
  font-weight: 400;
  font-style: normal;
  font-size: 1.25em;
  line-height: 1.75em;
`;
