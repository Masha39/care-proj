import type { NextPage } from "next";
import LandingBanner from "../components/landing-banner/landing_banner";

const Home: NextPage = () => {
  return (
    <div>
      <LandingBanner />
      {/* <Accordion /> */}
    </div>
  );
};

export default Home;
