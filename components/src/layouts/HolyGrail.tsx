import styled from 'styled-components';
import PolaroidFilm from '../components/Polaroid/PolaroidFilm';
import { polaroidFilm } from '../mock/data.json';

export default function HolyGrailLayout({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Section>
        <Nav>
          <h2>Navigation</h2>
          <NavList>
            <NavItem>
              <a href="#">Home</a>
            </NavItem>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </NavList>
        </Nav>
        <Main>{children}</Main>
        <Aside>
          <PolaroidFilm {...polaroidFilm} direction="left" />
          <PolaroidFilm {...polaroidFilm} direction="right" />
          <PolaroidFilm {...polaroidFilm} direction="left" />
          <PolaroidFilm {...polaroidFilm} direction="right" />
        </Aside>
      </Section>
      <Footer>
        <p>
          &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
        </p>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200vh;
  min-width: 100vw;
`;

const Header = styled.header`
  border: 1px solid red;
`;

const Section = styled.section`
  border: 1px solid blue;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  border: 1px solid orange;
  flex: 1;

  /* Note: Reduce height so sticky takes into effect  */
  position: sticky;
  top: 10%;
  /* align-self: flex-start; */
  /* Alternatively */
  height: fit-content;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li``;

const Main = styled.main`
  border: 1px solid yellow;
  flex: 3;
`;

const Aside = styled.aside`
  border: 1px solid purple;
  flex: 1;

  > * {
    /* Note: Reduce height so sticky takes into effect  */
    position: sticky;
    top: 0;
    /* align-self: flex-start; */
    /* Alternatively */
    height: fit-content;
  }
`;

const Footer = styled.footer`
  border: 1px solid green;
`;
