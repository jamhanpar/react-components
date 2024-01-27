import { useMemo } from 'react';
import styled from 'styled-components';
import './PolaroidFilm.scss';

interface PolaroidProps {
  imageSrc?: string;
  imageAlt?: string;
  description: string;
  direction: 'left' | 'right' | 'up' | 'down';
}

export default function PolaroidFilm({
  imageSrc,
  imageAlt,
  description,
  direction,
}: PolaroidProps) {
  const rotation = useMemo(
    () => Math.ceil(Math.random() * 25) + 10 * (1 % 2 === 0 ? 1 : -1),
    [direction]
  );

  return (
    <Wrapper style={{ transform: `rotate(${rotation}deg)` }}>
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
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.2);
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

  font-family: 'Just Another Hand', cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 1.25em;
  line-height: 1.75em;
`;
