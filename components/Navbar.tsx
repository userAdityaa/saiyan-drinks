'use client'
import React, { Suspense, useState, useRef } from 'react';
import Image from 'next/image';
import { useGlobalContext } from '@/context/themeContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { navbarCan, navbarCanName, navbarCanBackground, oswald } from '@/constants';
import gsap from 'gsap';

const Container = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {theme, setTheme} = useGlobalContext();
    const router = useRouter();
    const navRef = useRef(null)

    let mainthemeStyles;
    let svgFillColor;
    let svgBack;

    const searchParams = useSearchParams();
    const search = searchParams?.get('search');

    const canRef = useRef(null);


    if(!search){ 
        mainthemeStyles = 'text-[#4eceff]'
        svgFillColor = '#4eceff'
        svgBack = '/blue.webp'
    }
    else if(theme === 'peach') { 
        mainthemeStyles = 'text-[#ff8c00]' 
        svgFillColor = '#ff8c00'
        svgBack = '/peach.svg'
    }
    else if(theme === 'lime') { 
        mainthemeStyles = 'text-[#69ac0b]'
        svgFillColor = '#69ac0b'
        svgBack = '/lime.svg'
    }
    else if(theme === 'dragonfruit') { 
        mainthemeStyles = 'text-[#ff21ce]'
        svgFillColor = '#ff21ce'
        svgBack = '/dragonfruit.svg'
    }

    const handleProductClick = () => {
        if (navRef.current) {
            if (isVisible) {
                // Hide the navbar
                gsap.to(navRef.current, {
                    duration: 0.5,
                    height: '50px',
                    visibility: 'hidden',
                    ease: 'power2.inOut',
                });
                
                // Hide canRef immediately
                gsap.to(canRef.current, {
                    duration: 0.5,
                    opacity: 0,
                    visibility: 'hidden',
                    ease: 'power2.inOut',
                });
            } else {
                // Show the navbar
                gsap.fromTo(navRef.current,
                    { height: '50px', visibility: 'hidden' },
                    { height: '85vh', visibility: 'visible', duration: 0.5, ease: 'power2.inOut' }
                );
                
                // Delay before showing canRef
                setTimeout(() => {
                    gsap.fromTo(canRef.current,
                        { opacity: 0, visibility: 'hidden' },
                        { opacity: 1, visibility: 'visible', duration: 0.5, ease: 'power2.inOut' }
                    );
                }, 500); // Delay in milliseconds (500ms in this example)
            }
            setIsVisible(!isVisible); // Toggle visibility state
        }
    };


  return (
    
    <nav className={`fixed border rounded-full  w-[80vw] h-[9vh] top-5 left-[10vw] flex items-center ${oswald.className} text-[20px] font-semibold ${mainthemeStyles} bg-white z-50 max-pad:h-[5vh] max-pad:w-[95vw] max-pad:left-[2.2vw] max-mini:h-[8vh] max-mini:w-[95vw]`}>

       <div className={`fixed rounded-3xl  w-[80vw] h-[85vh] top-5 left-[10vw] flex items-center ${oswald.className} text-[20px] font-semibold ${mainthemeStyles} bg-white -z-40 invisible flex items-center`} ref={navRef}>
            <div className='flex flex-wrap items-center invisible px-[1rem]  h-[80%] absolute top-[3.5rem] ' ref={canRef}>
                {navbarCan.map((container, index) => (
                <div
                    key={index}
                    className={`w-[15rem] h-[17rem] mt-[2rem] ml-8 rounded-xl overflow-hidden ${navbarCanBackground[index]}`}
                    >
                    <p className='text-center uppercase mt-[2rem] text-white text-[24px] font-semibold'>{navbarCanName[index]}</p>
                    <Image
                    src={`/${navbarCan[index]}.webp`}
                    alt='can'
                    height={0}
                    width={400}
                    className='mt-[1rem]'
                    />
                </div>
                ))}
            </div>
       </div>

        <div className='flex items-center mr-[12vw] max-mini:hidden max-air:hidden'>
            <div className='flex items-center mr-4 ml-[35px]' onClick={handleProductClick}>
                <p className='mr-[0.5px]'>PRODUCTS</p>
                <svg width="34" height="34" viewBox="0 0 24 24" fill={`${svgFillColor}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"/>
                </svg>
            </div>
            <p className='mr-4'>SHOP ALL</p>
            <p onClick={() => router.push('/Contact')}>CONTACT</p>
        </div>  


    
        <Image src={`${svgBack}`} alt='logo' width={100} height={100} className='mr-[27vw] max-mini:ml-[2rem] max-air:ml-[2rem]'></Image>

        <Image src = '/burger.png' height={0} width={40} alt='ham burger' className='max-sm:ml-[0rem] max-sm:w-[3rem] hidden max-mini:block max-mini:ml-[15rem] max-air:block max-air:ml-[18rem]'></Image>
  
        <div onClick={() => router.push('/Cart')}>
            <svg className='ml-[50px] max-mini:ml-[2rem] max-air:ml-[2rem] max-sm:ml-[1rem]' height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526 495" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M487.39 313.506C484.32 325.322 476.656 332.768 464.847 335.286C459.104 336.513 453.147 334.91 447.361 333.834C440.48 332.564 433.931 330.401 427.931 326.732C417.357 320.307 413.321 310.633 413.922 298.646C414.512 286.798 419.397 277.414 430.443 272.325C443.979 266.083 458.063 264.953 472.383 269.742C482.753 273.196 487.154 281.105 488.206 291.371C488.507 294.298 488.571 297.247 488.711 299.711C488.356 304.639 488.517 309.159 487.39 313.506ZM475.475 385.776C475.485 391.081 475.099 396.365 473.328 401.412C469.828 411.441 460.339 417.317 449.894 415.767C439.997 414.303 430.421 411.71 422.95 404.554C411.378 393.449 415.071 371.54 429.809 365.223C441.328 360.284 453.211 360.456 464.901 365.126C471.6 367.816 474.809 373.143 475.453 380.127C475.625 381.999 475.475 383.893 475.475 385.776ZM415.21 347.22C398.647 357.798 392.893 373.563 393.827 392.33C394.406 404.027 399.355 413.852 408.018 421.75C409.113 422.751 409.274 423.687 409.306 425.086C409.467 431.327 407.213 436.299 402.908 440.915C397.97 446.209 392.195 450.955 389.168 457.82C388.653 459.004 387.665 458.757 386.785 458.843C334.936 463.954 283.624 460.618 232.881 448.76C230.692 448.243 229.554 447.382 228.91 445.123C227.621 440.635 224.186 437.321 221.814 433.393C220.866 431.765 219.796 430.211 218.615 428.745C214.557 423.934 213.57 418.5 214.042 412.28C216.468 380.6 218.669 348.899 220.912 317.208C222.909 288.799 224.852 260.369 226.849 231.961C228.459 209.191 230.144 186.421 231.679 163.629C231.808 161.832 232.71 160.939 233.891 159.938C250.132 146.196 265.429 131.529 278.611 114.796C283.779 108.372 288.397 101.521 292.416 94.3182C293.35 92.5965 294.348 91.8432 296.431 91.8217C332.553 91.359 368.246 95.0177 403.563 102.561C406.3 103.153 407.535 104.046 407.76 107.188C408.458 116.389 412.333 124.599 416.606 132.648C420.191 139.385 424.281 145.884 426.117 153.438C426.61 155.515 426.342 156.559 424.302 157.549C388.438 175.068 391.218 221.566 409.231 239.977C411.206 241.99 413.289 243.927 415.5 245.681C417.711 247.413 420.148 248.877 422.767 250.641C383.189 267.17 380.398 325.666 415.897 346.133C415.929 346.671 415.65 346.951 415.21 347.22ZM198.284 166.577C198.96 171.043 201.493 174.132 205.798 175.531C207.58 176.101 208.009 176.843 207.87 178.759C205.433 212.096 203.093 245.444 200.763 278.781C198.777 307.19 196.824 335.598 194.848 364.018C193.904 377.641 192.895 391.254 192.025 404.877C191.918 406.62 191.284 407.427 189.664 407.739C171.393 411.237 153.284 411.818 135.818 404.188C118.707 396.731 109.98 382.602 105.697 365.191C104.366 359.81 103.765 354.322 103.185 348.813C102.401 341.377 97.3559 337.213 90.3032 337.912C84.0342 338.525 80.1697 343.981 80.685 351.18C81.5437 363.092 84.002 374.639 88.9185 386.799C81.4471 386.799 74.5447 386.648 67.6638 386.831C66.5259 386.863 65.388 386.896 26.9793 386.939V216.454L106.384 216.443C113.898 216.443 118.568 211.666 118.385 204.305C116.732 138.642 146.113 90.4336 201.805 57.2363C216.329 48.5738 231.819 42.0096 248.661 39.1688C258.001 37.5977 266.674 38.3402 273.856 45.6683C279.502 51.4469 281.102 58.1402 279.545 65.7912C277.463 76.0355 272.246 84.8487 266.234 93.1776C248.865 117.174 227.267 136.974 203.801 154.816C199.808 157.85 197.5 161.455 198.284 166.556M437.291 176.542C446.77 172.679 456.55 171.215 466.705 173.26C475.002 174.928 480.284 179.792 482.71 187.895C484.352 193.372 484.803 198.978 485.082 204.284C485.061 208.62 485.211 212.612 484.191 216.551C480.917 229.098 471.739 236.254 458.868 236.114C452.609 236.105 446.387 235.143 440.415 233.263C424.979 228.259 417.829 217.035 419.236 200.872C420.266 188.928 426.385 180.976 437.291 176.542ZM497.416 341.721C506.434 331.725 510.781 319.952 510.899 306.619C511.007 296.623 511.425 286.626 508.237 276.866C504.78 266.32 498.587 258.099 488.958 252.568C486.854 251.362 486.456 250.9 488.657 249.178C501.324 239.203 507.443 225.956 507.754 209.955C508.003 201.593 507.221 193.233 505.425 185.065C500.905 165.405 488.464 154.256 468.841 150.565C462.861 149.446 456.861 149.661 450.849 150.038C449.561 150.124 448.67 150.199 448.295 148.564C446.03 138.449 440.812 129.592 435.95 120.596C435.273 119.359 434.726 118.057 434.05 116.83C432.396 113.817 431.838 111.493 434.339 108.028C440.512 99.4512 434.983 87.0439 424.056 84.1815C413.101 81.3552 402.039 78.9644 390.896 77.0148C362.453 71.8219 333.597 69.2358 304.686 69.2885C302.432 69.2885 302.109 68.815 302.389 66.5444C305.405 42.3109 289.453 21.069 265.161 16.7539C264.871 16.7001 264.624 16.3988 264.356 16.2051H248.769C247.137 17.4103 245.162 16.9153 243.359 17.2274C227.546 20.0359 212.786 25.7715 198.595 33.1319C159.928 53.1902 130.193 82.0078 111.751 121.801C101.72 143.42 96.1828 166.86 95.4774 190.693C95.3808 193.501 94.4146 193.878 91.9671 193.867C83.4008 193.824 74.8131 193.802 26.9685 193.802H4.29688V409.084H19.1859V409.396C76.2408 409.063 88.4247 408.729 100.619 408.385C101.95 408.353 103.067 408.439 104.13 409.493C120.919 426.259 141.894 432.21 164.92 432.715C173.325 432.898 181.666 432.21 189.921 430.649C192.229 430.219 193.625 430.456 194.752 432.995C197.511 439.269 202.105 444.466 205.766 450.223C206.592 451.547 207.258 452.838 207.569 454.377C209.179 462.329 214.064 467.43 221.825 469.335C258.838 478.374 296.366 483.539 334.539 483.679C354.269 483.754 373.935 483.055 393.548 480.87C401.77 479.956 407.234 475.597 410.111 468C410.63 466.575 411.413 465.26 412.419 464.126C416.058 460.102 419.719 456.099 423.261 451.988C426.997 447.63 429.584 442.615 430.776 436.987C431.183 435.018 431.806 434.878 433.577 435.416C438.193 436.815 442.916 437.891 447.736 438.419C469.721 440.84 489.73 427.701 495.506 406.265C499.478 391.48 500.326 376.533 493.423 362.102C491.523 358.099 488.668 354.839 485.394 351.578C489.645 348.468 493.938 345.585 497.416 341.721Z" fill={`${svgFillColor}`}/></svg>
        </div>

    </nav>
  )
}


export default function Navbar() { 
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Container/>
        </Suspense>
    )
}