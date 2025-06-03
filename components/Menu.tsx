'use client'

import React, { useRef } from 'react';
import { useGlobalContext } from '@/context/themeContext';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const Menu = () => {
    const { theme, setTheme } = useGlobalContext();
    const router = useRouter();
    gsap.registerPlugin(ScrollTrigger);
    let background, textColor, svgColor;

    const leafContainer = ['/leaf0.webp', '/leaf1.webp', '/leaf2.webp', '/leaf3.webp', '/leaf4.webp', '/leaf5.webp'];
    const listCan = ['STRAWBERRY', 'PEACH', 'DRAGONFRUIT', 'LIME', 'BLUEBERRY', 'LEMON'];
    const canContainer = ['/strawCan1.webp', '/peachCan5.webp', '/dragonCan5.webp', '/limeCan5.webp', '/blueberryCan1.webp', '/lemonCan1.webp'];
    const leftFruit = ['/strawR.webp', '/peachR.webp', '/dragonL.webp', '/limeL.webp', '/blueL.webp', '/lemonL.webp'];
    const rightFruit = ['/strawL.webp', '/peachL.webp', '/dragonR.webp', '/limeR.webp', '/blueR.webp', '/lemonR.webp'];

    const containers = canContainer.map(() => useRef(null));
    const leafRefs = leafContainer.map(() => useRef(null));
    const leftFruitRefs = leftFruit.map(() => useRef(null));
    const rightFruitRefs = rightFruit.map(() => useRef(null));

    const listColor = [
        'bg-gradient-to-t from-[#b7110b] to-[#f13e36]',
        'bg-gradient-to-t from-[#dfc129] to-[#ffa131]',
        'bg-gradient-to-t from-[#ff21ce] to-[#ff0ea6]',
        'bg-gradient-to-t from-[#76c015] to-[#69ac0b]',
        'bg-gradient-to-t from-[#3b89ff] to-[#2e4ad7]',
        'bg-gradient-to-t from-[#d6c200] to-[#d5c201]'
    ];

    if (theme === 'peach') {
        background = 'bg-[#ffc98d]';
        textColor = 'text-[#ff8c00]';
        svgColor = '#ffc98d';
    } else if (theme === 'lime') {
        background = 'bg-[#cdfe8c]';
        textColor = 'text-[#69ac0b]';
        svgColor = '#cdfe8c';
    } else if (theme === 'dragonfruit') {
        background = 'bg-[#ffb5ef]';
        textColor = 'text-[#ff21ce]';
        svgColor = '#ffb5ef';
    }

    const handleHover = (index: number) => {
        gsap.to(containers[index].current, { rotate: -15, scale: 1.3 });
        gsap.to(leafRefs[index].current, { left: 45 });
        gsap.to(leftFruitRefs[index].current, { left: 300 });
        gsap.to(rightFruitRefs[index].current, { left: -10 });
    };

    const handleHoverOut = (index: number) => {
        gsap.to(containers[index].current, { rotate: 0, scale: 1 });
        gsap.to(leafRefs[index].current, { left: 120 });
        gsap.to(leftFruitRefs[index].current, { left: 120 });
        gsap.to(rightFruitRefs[index].current, { left: 120 });
    };

    const buttonColor = [
        'text-[#f13e36]',
        'text-[#ffa131]',
        'text-[#ff0ea6]',
        'text-[#69ac0b]',
        'text-[#2e4ad7]',
        'text-[#d5c201]'
    ];

    return (
        <div className={`${background} ${oswald.className} h-[235vh] w-[100vw] ${textColor} flex flex-col items-center`}>
            <svg className="absolute -mt-10 top-[320rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height="500px" width="2000px">
                <path fill={`${svgColor}`} fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,224C672,235,768,277,864,272C960,267,1056,213,1152,213.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </svg>

            <h1 className={`text-center pt-[8rem] text-[80px] ${textColor} font-bold tracking-tighter`}>EXPLORE FLAVORS</h1>

            <p className="text-center w-[30%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>

            <div className="flex flex-wrap w-[90%] justify-between mt-[8rem]">
                {listCan.map((can, index) => (
                    <div key={index} className="mb-8">
                        <div className={`rounded-lg relative h-[41rem] flex flex-col items-center w-[26rem] ${listColor[index]}`}>
                            <p className="text-white font-bold text-[30px] tracking-tighter text-center pt-[2rem] mb-4">{can}</p>
                            <div className="flex-1 flex justify-center items-center relative">
                                <Image
                                    src={canContainer[index]}
                                    alt="can"
                                    height={300}
                                    width={220}
                                    ref={containers[index]}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHoverOut(index)}
                                    className="z-10"
                                    onClick={() => router.push(`/Feature/?search=${can.toLowerCase()}`)}
                                    style={{ objectFit: 'contain' }}
                                />
                                <Image
                                    src={leafContainer[index]}
                                    alt="leaf"
                                    height={120}
                                    width={120}
                                    className="absolute top-[23rem] left-[8rem]"
                                    ref={leafRefs[index]}
                                    style={{ objectFit: 'contain' }}
                                />
                                <Image
                                    src={leftFruit[index]}
                                    alt="left fruit"
                                    height={120}
                                    width={120}
                                    className="absolute top-[10rem] left-[8rem]"
                                    ref={leftFruitRefs[index]}
                                    style={{ objectFit: 'contain' }}
                                />
                                <Image
                                    src={rightFruit[index]}
                                    alt="right fruit"
                                    height={120}
                                    width={120}
                                    className="absolute top-[10rem] right-[8rem]"
                                    ref={rightFruitRefs[index]}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="w-[85%] flex justify-between mt-auto mb-4">
                                <button className="text-white font-bold text-[20px] bg-black bg-opacity-30 py-[0.9rem] px-[2.4rem] rounded-xl">
                                    BUY NOW
                                </button>
                                <button className={`bg-white py-[0.9rem] px-[1.5rem] rounded-xl text-[20px] font-bold ${buttonColor[index]}`}>
                                    BUY IN STORES
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;