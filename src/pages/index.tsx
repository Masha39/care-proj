import type { NextPage } from "next";
import LandingBanner from "../components/LandingBanner/LandingBanner";
import Accordion from "../components/accordion/accordion";

const Home: NextPage = () => {
  return (
    <div>
      <LandingBanner />
      <Accordion />
    </div>
  );
};

export default Home;
