import React from 'react';
import styled from 'styled-components';
import PolaroidFilm from '../Polaroid/PolaroidFilm';
import mockData from '../../mock/data.json';

const { polaroidFilm, polaroidFilm2, polaroidFilm3 } = mockData;

export default function Container({
  classname,
  children,
}: {
  classname?: string;
  children?: React.ReactNode;
}) {
  return (
    <Wrapper className={classname}>
      <RightRail>
        <PolaroidFilm {...polaroidFilm} direction='left' />
        <PolaroidFilm {...polaroidFilm2} direction='right' />
        <PolaroidFilm {...polaroidFilm3} direction='left' />
      </RightRail>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-height: 100vh;
    margin: 0 20px;
    display: flex;
    flex-direction: row;
  }
`;

const RightRail = styled.div`
  border: 1px solid blue;
  @media (min-width: 768px) {
    min-height: 100vh;
    padding: 0 20px;
    width: 30%;
    min-width: 200px;
  }
`;

const Content = styled.div`
  border: 1px solid green;
  @media (min-width: 768px) {
    min-height: 100vh;
    padding: 0 20px;
    width: 70%;
    min-width: 500px;
  }
`;
