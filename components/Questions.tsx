'use client'

import React, { useRef, useState } from 'react';
import { useGlobalContext } from '@/context/themeContext';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const Questions = () => {

const { theme } = useGlobalContext();

gsap.registerPlugin(ScrollTrigger);

let background, textColor, questionColor;

if (theme === 'peach') {
    background = 'bg-[#ffc98d]';
    textColor = 'text-[#ff8c00]';
    questionColor = 'bg-[#ff8c00]';
} else if(theme === 'lime') {
    background = 'bg-[#cdfe8c]'
    textColor = 'text-[#69ac0b]'
    questionColor = 'bg-[#69ac0b]'
} else if(theme === 'dragonfruit') { 
    background = 'bg-[#ffb5ef]'
    textColor = 'text-[#ff21ce]'
    questionColor = 'bg-[#ff21ce]';
}

const arrow = [0, 1, 2, 3];
const content = [0, 1, 2, 3];

const arrowRef = arrow.map(() => useRef(null));
const contentRef = content.map(() => useRef(null));

const handleClick = (index: number) => {
    const currentRotation = gsap.getProperty(arrowRef[index].current, "rotate");
    const currentContent = gsap.getProperty(contentRef[index].current, "display")
    if(currentContent === 'none') {
        gsap.to(contentRef[index].current, { display: 'block', duration: 1, ease: 'power2.inOut'})
    }
    else { 
        gsap.to(contentRef[index].current, { display: 'none',  ease: 'power2.inOut'})
    }
    const newRotation = currentRotation === 180 ? 0 : 180;
    gsap.to(arrowRef[index].current, { rotate: newRotation });
}

  return (
    <div className={`${background} ${oswald.className} ${textColor} h-[130vh]`}>
        <h1 className={`text-center pt-[8rem] text-[80px]  font-bold tracking-tighter`}>FREQUENTLY ASKED QUESTIONS</h1>

        <p className="text-center w-[30%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>

        
        <div className={`w-[50%] h-[5rem] rounded-xl mx-auto mt-[2.5rem] flex items-center ${questionColor} text-white`}>
            <button className='border border-white rounded-full p-[0.6rem] ml-[2rem]'  ref={arrowRef[0]} onClick={() => handleClick(0)}> <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z" /></svg></button>

            <p className='ml-[1rem] text-[22px]'>IS SOME TEXT INSIDE THIS DIV BLOCK?</p>
        </div>

        <p className='w-[50%] mx-auto mt-[1rem] hidden' ref={contentRef[0]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

        <div className={`w-[50%] h-[5rem] rounded-xl mx-auto mt-[2.5rem] flex items-center ${questionColor} text-white`} >
            <button className='border border-white rounded-full p-[0.6rem] ml-[2rem]' ref={arrowRef[1]} onClick={() => handleClick(1)}> <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"/></svg></button>

            <p className='ml-[1rem] text-[22px]'>IS SOME TEXT INSIDE THIS DIV BLOCK?</p>
        </div>

        <p className='w-[50%] mx-auto mt-[1rem] hidden' ref={contentRef[1]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

        <div className={`w-[50%] h-[5rem] rounded-xl mx-auto mt-[2.5rem] flex items-center ${questionColor} text-white`} >
            <button className='border border-white rounded-full p-[0.6rem] ml-[2rem]' ref={arrowRef[2]} onClick={() => handleClick(2)}> <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"/></svg></button>

            <p className='ml-[1rem] text-[22px]'>IS SOME TEXT INSIDE THIS DIV BLOCK?</p>
        </div>

        <p className='w-[50%] mx-auto mt-[1rem] hidden' ref={
            contentRef[2]
        }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

        <div className={`w-[50%] h-[5rem] rounded-xl mx-auto mt-[2.5rem] flex items-center ${questionColor} text-white`}>
            <button className='border border-white rounded-full p-[0.6rem] ml-[2rem]'  ref={arrowRef[3]} onClick={() => handleClick(3)}> <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"/></svg></button>

            <p className='ml-[1rem] text-[22px]'>IS SOME TEXT INSIDE THIS DIV BLOCK?</p>
        </div>

        <p className='w-[50%] mx-auto mt-[1rem] hidden' ref={contentRef[3]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

    </div>
  )
}

export default Questions