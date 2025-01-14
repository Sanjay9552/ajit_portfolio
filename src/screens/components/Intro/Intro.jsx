"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "../../../utils/images";
import HomeScreen from "../../HomeScreen";
import ButtonWithIcon from "../ButtonWithIcon";
// import HomeScreen from "../HomeScreen/HomeScreen"; // Import HomeScreen component

export default function Intro() {
  const background = useRef(null);
  const introText = useRef(null);
  const descriptionText = useRef(null);
  // const [showHomeScreen, setShowHomeScreen] = useState(false); // State to control HomeScreen rendering

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for intro and background animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "bottom",
        // markers: true,
      },
    });

    // Animate the background image and intro text
    timeline
      .from(background.current, {
        clipPath: `inset(15%)`,
        // filter: "blur(20px)",
      })
      .to(background.current, { clipPath: `inset(0%)` }, 0)
      .to(introText.current, { y: -300, opacity: 0 }, "<");

    // Description text appears, scrolls up, and resets on scroll

    gsap.fromTo(
      background.current,
      {
        filter: "blur(150px)",
        scale: 1.5, // Starting scale value (slightly zoomed in)
      },
      {
        filter: "blur(0px)",
        scale: 1,
        scrollTrigger: {
          trigger: introText.current,
          start: "top bottom",
          end: "top top", // Ensure animation plays fully before reset
          scrub: true,
          // onEnter: () => setShowHomeScreen(true), // Show HomeScreen when description enters view
          // onLeaveBack: () => setShowHomeScreen(false), // Hide HomeScreen on scrolling back up
        },
      }
    );

    gsap.fromTo(
      descriptionText.current,
      { opacity: 0, y: 100, x: "13vw" },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: descriptionText.current,
          start: "top bottom",
          end: "top top", // Ensure animation plays fully before reset
          scrub: true,
          // onEnter: () => setShowHomeScreen(true), // Show HomeScreen when description enters view
          // onLeaveBack: () => setShowHomeScreen(false), // Hide HomeScreen on scrolling back up
        },
      }
    );

    // Scroll description text out of viewport
    gsap.to(descriptionText.current, {
      y: -200, // Move description up and out
      opacity: 0,
      scrollTrigger: {
        trigger: descriptionText.current,
        start: "bottom center",
        end: "bottom top",
        scrub: true,
        toggleActions: "play reverse play reverse", // Ensure animation plays back on scroll up
      },
    });

    // gsap.fromTo(
    //   background.current,
    //   { y: 100, x: 100 },
    //   {
    //     opacity: 1,
    //     // y: 0,
    //     scrollTrigger: {
    //       trigger: background.current,
    //       start: "top bottom",
    //       end: "top top", // Ensure animation plays fully before reset
    //       scrub: true,
    //       onEnter: () => setShowHomeScreen(true), // Show HomeScreen when description enters view
    //       onLeaveBack: () => setShowHomeScreen(false), // Hide HomeScreen on scrolling back up
    //     },
    //   }
    // );
  }, []);

  return (
    <>
      <div className={styles.homeHeader}>
        {/* Background Image */}
        <div className={styles.backgroundImage} ref={background}>
          <img
            src={images.BGImage}
            alt="background image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Intro Section */}
        <div className={styles.intro}>
          <h1
            className={styles.introFont}
            style={{ fontWeight: "400" }}
            ref={introText}
          >
            AJIT BHANDARE
          </h1>
          <p style={{ marginBottom: 0, fontWeight: "100" }} ref={introText}>
            Wildlife Photography
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className={styles.descriptionContainer} ref={descriptionText}>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            color: "black",
            // fontWeight: "regular",
            // opacity: 0.5,
          }}
        >
          <p>My name is Ajit Bhandare,</p>
          <p>
            An animator and passionate wildlife photographer from a village in
            Maharashtra, India.
          </p>
          <p>
            Inspired by nature's beauty, I blend my artistic vision with my love
            for the wild to capture its untamed essence through my lens.
          </p>
        </div>
      </div>

      {/* Conditionally Render HomeScreen */}
      {/* {showHomeScreen && ( */}
      <>
        <HomeScreen />
      </>
      {/* )} */}
    </>
  );
}
