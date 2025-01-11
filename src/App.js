// import './App.css';
import React, { useEffect } from "react";
import Intro from "./screens/components/Intro/Intro";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";

function App() {

  
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <Routes>
      {/* <Intro/> */}
      <Route path="/" element={<Intro />} />
      {/* <Route path="/" element={<HomeScreen />} /> */}
    </Routes>
  );
}

export default App;
