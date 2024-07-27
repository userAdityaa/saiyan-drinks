import React from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image';


const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const FooterMain = () => {
  return (
    <div className={`relative bg-gradient-to-t from-[#ff9162] to-[#ff7caa]  h-[40vh] flex items-center ${oswald.className} relative`}>
        <Image src = '/footer.webp' alt = 'footer' height={0} width={1000} className='absolute top-[1rem] left-[13rem]'></Image>
    </div>
  )
}

export default FooterMain