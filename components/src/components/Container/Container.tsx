import React from 'react';
import styled from 'styled-components';
import PolaroidFilm from '../Polaroid/PolaroidFilm';
import mockData from '../../mock/data.json';

const { polaroidFilm } = mockData;

export default function Container({
  classname,
  children,
}: {
  classname?: string;
  children: React.ReactNode;
}) {
  return (
    <Wrapper className={classname}>
      <RightRail>
        <PolaroidFilm {...polaroidFilm} direction='left' />
      </RightRail>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  margin: 0 auto;
  /* overflow: hidden; */

  @media (min-width: 768px) {
    min-height: 100vh;
    margin: 0 20px;
    display: flex;
    flex-direction: row;
  }
`;

const RightRail = styled.div`
  @media (min-width: 768px) {
    border: 1px solid blue;
    min-height: 100vh;
    padding: 0 20px;
    width: 30%;
    min-width: 200px;
  }
`;

const Content = styled.div`
  @media (min-width: 768px) {
    border: 1px solid green;
    min-height: 100vh;
    padding: 0 20px;
    width: 70%;
    min-width: 500px;
  }
`;
