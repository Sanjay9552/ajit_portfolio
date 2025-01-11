import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
// import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeScreen from "../../HomeScreen";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      // start: "top-=100px",
      // end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container}>
      <HomeScreen />
    </div>
  );
}
