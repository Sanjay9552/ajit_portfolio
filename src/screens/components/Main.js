import React, { useEffect } from "react";
import Intro from "./Intro/Intro";
import Description from "./Description";
import HomeScreen from "../HomeScreen";

const Main = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Intro />
      {/* <Description /> */}
      {/* <HomeScreen /> */}
    </div>
  );
};

export default Main;
