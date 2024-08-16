import React from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image';


const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const FooterMain = () => {
  return (
    <div className={`relative bg-gradient-to-t from-[#ff9162] to-[#ff7caa]  h-[40vh] flex items-center ${oswald.className} max-mini:h-[10vh] max-air:h-[10vh] max-pad:h-[10vh]`}>
        <Image src = '/footer.webp' alt = 'footer' height={0} width={1000} className='absolute max-mini:w-[70%] max-air:w-[80%] top-[1rem] left-[13rem] max-mini:-top-[20rem] max-mini:left-[6rem] max-air:left-[6rem] max-air:-top-[24rem] max-pad:w-[80%]  max-pad:-top-[28rem] max-pad:left-[8rem] max-sm:-top-[0.2rem] max-sm:left-[4rem]'></Image>
    </div>
  )
}

export default FooterMain