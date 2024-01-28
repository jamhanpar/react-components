import styled from 'styled-components';
import { VIEWPORTS } from '../mock/constants';

export default function TwoColumnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* every child element is full width */
  > * {
    width: 100%;
  }

  @media (${VIEWPORTS.tablet}) {
    flex-direction: row;
  }
`;

const Sidebar = styled.nav`
  border: 1px solid red;
  min-height: 20vh;
  flex-basis: 100%;
  min-width: 150px;

  @media (${VIEWPORTS.tablet}) {
    flex: 1;
    max-width: 150px;
  }
`;

const Main = styled.main`
  border: 1px solid blue;
  min-height: 20vh;
  flex-basis: 100%;
  min-width: 200px;

  @media (${VIEWPORTS.tablet}) {
    flex: 2;
    max-width: 500px;
  }
`;
