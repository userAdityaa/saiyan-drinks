'use client'

import React from 'react'
import { useGlobalContext } from '@/context/themeContext'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

const Shaking = () => {
    const {theme, setTheme} = useGlobalContext();

    gsap.registerPlugin(ScrollTrigger);

    let background, leftFruit, rightFruit, leftHand, rightHand;

    const leftRef = React.useRef(null);
    const rightRef = React.useRef(null);
    const leftHandRef = React.useRef(null);
    const rightHandRef = React.useRef(null);

    useEffect(() => { 
        gsap.to(leftRef.current, {y: 120, duration: 2, repeat: -1, yoyo: true});

        gsap.to(rightRef.current, {y: 100, duration: 2, repeat: -1, yoyo: true});
        
        
        gsap.fromTo(leftHandRef.current, 
            {x: -300}, 
            {
                x: 0, 
                duration: 1,  
                ease: 'power2.in',
                scrollTrigger: {
                    trigger: leftHandRef.current,
                    start: "top center", // When the top of the trigger hits the center of the viewport
                    toggleActions: "play none none none"
                }
            });

        gsap.fromTo(rightHandRef.current, 
            {x: 300}, 
            {
                x: 0, 
                duration: 1,  
                ease: 'power2.in',
                scrollTrigger: {
                    trigger: rightHandRef.current,
                    start: "top center", // Adjust as needed
                    toggleActions: "play none none none"
                }
            });
    })

    if(theme === 'peach') { 
        background ='bg-[#ffc98d]';   
        leftFruit = '/leftPeach.webp'; 
        rightFruit = '/rightPeach.png';
        leftHand = '/leftPeachHand.png';
        rightHand = '/rightPeachHand.png';
    }
    else if(theme === 'lime') { 
        background = 'bg-[#cdfe8c]';
        leftFruit = '/leftLime.webp';
        rightFruit = '/rightLime.webp';
        leftHand = '/leftLimeHand.png';
        rightHand = '/rightLimeHand.png';
    }
    else if(theme === 'dragonfruit') { 
        background = 'bg-[#ffb5ef]';
        leftFruit = '/leftDragon.webp';
        rightFruit = '/rightDragon.png';
        leftHand = '/leftDragonHand.png';
        rightHand = '/rightDragonHand.png';
    }



  return (
    <div className={`${background} w-[100vw] h-[120vh]`}>
        <Image src={`${leftFruit}`} alt='left fruit' height={0} width={170} className='absolute left-[6rem] top-[100rem]' ref={leftRef}></Image>

        <Image src={`${rightFruit}`} alt='right fruit' height={0} width={170} className='absolute right-[6rem] top-[105rem]' ref={rightRef}></Image>

        <Image src={`${leftHand}`} alt='left hand' height={0} width={800} className='absolute left-[0rem] top-[115rem] z-10' ref={leftHandRef}></Image>

        <Image src={`${rightHand}`} alt='right hand' height={0} width={800} className='absolute right-[0rem] top-[115rem] z-0' ref={rightHandRef}></Image>
    </div>
  )
}

export default Shaking