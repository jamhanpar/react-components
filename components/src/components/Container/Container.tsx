import React from 'react';
import styled from 'styled-components';
import PolaroidFilm from '../Polaroid/PolaroidFilm';
import mockData from '../../mock/data.json';
import { VIEWPORTS } from '../../mock/constants';

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
      <Content>
        <p>
          In a world brimming with wonders, the desire to explore new horizons
          and create lasting memories intensifies. If you're seeking inspiration
          for your next adventure, you're in the right place. We've curated a
          list of top destinations that promise a unique blend of culture,
          natural beauty, and unforgettable experiences.
        </p>
        <h3>1. Santorini, Greece</h3>
        <p>
          Nestled in the Aegean Sea, Santorini beckons with its postcard-perfect
          landscapes. Imagine stunning sunsets, crystal-clear waters, and
          charming white-washed architecture. Dive into ancient ruins, indulge
          in Mediterranean cuisine, and immerse yourself in the warm embrace of
          Greek hospitality.
        </p>
        <h3>2. Kyoto, Japan</h3>
        <p>
          A city where ancient traditions meet modern innovation, Kyoto
          captivates with historic temples, bamboo groves, and traditional tea
          ceremonies. Cherry blossoms in spring and vibrant autumn foliage add
          magic to this cultural haven.
        </p>
        <h3>3. Banff National Park, Canada</h3>

        <p>
          Nature enthusiasts will find paradise in Banff National Park. Majestic
          mountains, turquoise lakes, and abundant wildlife characterize this
          Canadian gem. Whether hiking, skiing, or simply enjoying the
          breathtaking scenery, Banff promises an escape into the heart of the
          Rockies.
        </p>

        <h3>4. Marrakech, Morocco</h3>
        <p>
          Marrakech, the "Red City," is a sensory delight. Lose yourself in the
          vibrant chaos of the medina, marvel at the intricate architecture, and
          savor the flavors of Moroccan cuisine in bustling marketplaces.
        </p>
        <h3>5. Bora Bora, French Polynesia</h3>
        <p>
          Known as the "Pearl of the Pacific," Bora Bora is the epitome of
          tropical paradise. Overwater bungalows, pristine coral reefs, and
          turquoise lagoons create an idyllic setting for relaxation and
          romance.
        </p>
        <h3>6. Barcelona, Spain</h3>
        <p>
          Barcelona seamlessly blends history and modernity. Gaudi's
          masterpieces enchant, while lively street culture, tapas bars, and the
          Mediterranean coastline add to the city's magnetic charm.
        </p>
        <h3>7. Maui, Hawaii, USA</h3>
        <p>
          Maui, a diverse playground for nature lovers, offers otherworldly
          landscapes, lush highways, and pristine beaches. Witness the
          mesmerizing sunrise at Haleakalā's summit or relax on the sun-kissed
          shores.
        </p>
        <h3>8. Dubrovnik, Croatia</h3>
        <p>
          Dubrovnik, a UNESCO World Heritage Site, boasts well-preserved
          medieval architecture. Walk the ancient city walls for panoramic views
          and embrace the rich cultural tapestry of this Croatian gem.
        </p>
        <h3>9. Sydney, Australia</h3>
        <p>
          Sydney, a vibrant metropolis, offers iconic landmarks, sun-kissed
          beaches, and a dynamic urban experience. Explore the Sydney Opera
          House, Bondi, and the laid-back atmosphere of Manly.
        </p>
        <h3>10. Reykjavik, Iceland</h3>
        <p>
          Reykjavik, the gateway to Iceland's wonders, promises geysers,
          waterfalls, and the ethereal Northern Lights. Relax in the Blue
          Lagoon, explore geothermal landscapes, and immerse yourself in the
          unique culture of the world's northernmost capital.
        </p>
        <p>
          Embarking on a journey to these top destinations isn't just about
          changing your surroundings; it's about embracing transformative
          experiences. Whether drawn to the rich history of European cities, the
          tranquility of Pacific islands, or the adventure in natural wonders,
          these destinations offer a kaleidoscope of experiences for every
          traveler. So, pack your bags, and let the exploration begin!
        </p>
        {children}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${VIEWPORTS.tablet}) {
    gap: 40px;
    flex-direction: row;
  }

  @media (${VIEWPORTS.desktop}) {
    gap: 52px;
    min-width: 1000px;
    max-width: 1024px;
  }
`;

const RightRail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 20px;

  @media (${VIEWPORTS.largeMobile}) {
    display: none;
  }

  @media (${VIEWPORTS.tablet}) {
    display: flex;
    justify-content: flex-start;
  }
`;

const Content = styled.div`
  padding: 0 20px;

  @media (${VIEWPORTS.tablet}) {
  }
`;
