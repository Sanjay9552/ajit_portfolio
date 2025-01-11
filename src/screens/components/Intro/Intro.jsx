'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
// import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import images from '../../../utils/images';
import HomeScreen from '../../HomeScreen';
import Description from '../Description';
import Projects from '../Projects';

export default function Intro() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        ScrollTrigger.create({
            trigger: background.current,
            pin: true,
            start: "top-=100px",
            end: "+=500px",
        })
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`, filter: "blur(20px)"})
            .to(introImage.current, {height: "200px", filter: "blur(0px)"}, 0)

//             timeline
//   .from(background.current, {
//     clipPath: `inset(15%)`,
//     filter: "blur(8px)",       // 🔥 Start with a blur
//     // duration: 1
//   })
//   .to(background.current, {
//     filter: "blur(0px)",        // 🔥 Remove blur smoothly
//     // duration: 1
//   })
    }, [])

    return (
        // <div style={{width: '100%', height: '100%'}}>
<>
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <img 
                    src={images.BGImage}
                    fill="true" 
                    // alt="background image"
                    priority="true"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                />
            </div>
            <div className={styles.intro}>
                    {/* <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <img
                            src={images.background}
                            // alt="intro image"
                            fill="true" 
                            // priority={true}
                        />
                    </div> */}
                    <h1 data-scroll data-scroll-speed="0.7">Ajit Bhandare</h1>
             </div>
        </div>
             <Description/>
             <Projects/>
</>
        // </div>
    )
}
