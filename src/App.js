// import './App.css';
import React, { useEffect } from "react";
import Intro from "./screens/components/Intro/Intro";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Main from "./screens/components/Main";

function App() {
  return (
    <Routes>
      {/* <Intro/> */}
      <Route path="/" element={<Main />} />
      {/* <Route path="/" element={<HomeScreen />} /> */}
    </Routes>
  );
}

export default App;
