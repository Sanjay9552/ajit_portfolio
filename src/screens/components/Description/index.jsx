import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const phrases =
  "My name is Ajit Bhandare, and I am an Animator by profession with a deep passion for wildlife photography. Based in a small village in the state of Maharashtra, India, I have always been captivated by the beauty of wild animals and the wonders of nature. Through my lens, I strive to capture the untamed essence of the wild, blending my artistic eye as an animator with my love for the natural world.";

export default function Description() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: background.current, // This component’s trigger
        scrub: true, // Smooth connection to scroll
        start: "top bottom", // Animation starts when top of element hits bottom of viewport
        end: "bottom top", // Ends when bottom of element hits top of viewport
        pin: true, // Pin this section
        markers: true,
      },
    });

    // Delay added to the animation
    timeline
      .from(background.current, { y: "100vh", delay: 1 }) // Delay of 1 second
      .to(background.current, { y: "-100vh", opacity: "0px" }, 0); // Move out of viewport
  }, []);

  return (
    <div
      // data-scroll
      // data-scroll-speed="0.7"
      style={{
        width: "40%",
        backgroundColor: "white",
      }}
      ref={background}
    >
      <p style={{ color: "black", fontSize: "20px" }}>{phrases}</p>
    </div>
  );
}

// function AnimatedText({children}) {
//     const text = useRef(null);

//     return <p ref={text}>{children}</p>
// }
