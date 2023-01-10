import React from "react";

// Components
import Dropdown from "../components/Dropdown/Dropdown";
import Card from "../components/Cards/Card";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";

// Layouts
import ThreeColGrid from "../layout/ThreeColGrid";
import OneTwoColGrid from "../layout/OneTwoColGrid";
import TwoOneColGrid from "../layout/TwoOneColGrid";
import OneColGrid from "../layout/OneColGrid";

export default function Home() {
  return (
    <div>
      <Dropdown />
      <main className="mx-6 md:mx-16 border border-red-400">
        <ThreeColGrid>
          <div className="p-4 flex justify-center items-center">
            <Card />
          </div>
          <div className="p-4 flex justify-center items-center">
            <Card1 />
          </div>
          <div className="p-4 flex justify-center items-center">
            <Card2 />
          </div>
        </ThreeColGrid>
      </main>
      <OneTwoColGrid />
      <TwoOneColGrid />
      <OneColGrid />
    </div>
  );
};
