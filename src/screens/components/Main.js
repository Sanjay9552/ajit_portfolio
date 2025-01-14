import React, { useEffect } from "react";
import Intro from "./Intro/Intro";
import Description from "./Description";
import HomeScreen from "../HomeScreen";

const Main = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "i" ||
          event.key === "c" ||
          event.key === "u" ||
          event.key === "j")
      ) {
        event.preventDefault();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "F12") {
        event.preventDefault();
      }
    });
  });

  return (
    <div>
      <Intro />
      {/* <Description /> */}
      {/* <HomeScreen /> */}
    </div>
  );
};

export default Main;
