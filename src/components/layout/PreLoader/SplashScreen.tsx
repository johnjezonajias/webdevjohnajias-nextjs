'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './SplashScreen.module.css';
import gsap from 'gsap';

export const SplashScreen = () => {
    const blurbs = ["Hello", "Kamusta", "Hallå", "Hej", "Hola", "Ciao", "こんにちは", "안녕하세요", "مرحبًا", "Bonjour", "Salve", "Hallo"];
    const textRef = useRef<HTMLDivElement>(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const delay = 250;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= blurbs.length) {
                    clearInterval(intervalId);
                    animateSlideUp();
                }
                return nextIndex;
            });
        }, delay);

        return () => {
            clearInterval(intervalId);
        };
    }, [blurbs.length]);

    const animateSlideUp = () => {
        if (textRef.current) {
            gsap.to(textRef.current, { duration: 0.25, y: "-150%", ease: "power2.inOut" });
        }
    };

    return (
        <div ref={textRef} className={styles.splashScreen}>
            <div className="text-6xl text-white font-normal">
                {blurbs[currentTextIndex]}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute bottom-[-50%] left-0">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L120,133.3C240,139,480,149,720,144C960,139,1200,117,1320,106.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
        </div>
    );
};
