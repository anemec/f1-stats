import React from "react";
import CurrentStandings from "../components/CurrentStandings";
import LastRace from "../components/LastRace";

const Home = () => {
  return (
    <div className="flex flex-col 2xl:flex-row h-full">
      <LastRace />
      <CurrentStandings />
    </div>
  );
};

export default Home;
