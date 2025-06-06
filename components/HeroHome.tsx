import React from 'react';
import Image from 'next/image';
import { oswald } from '@/constants';

const HeroHome = () => {
  return (
    <div
      className={`bg-[#4eceff] min-h-screen w-full ${oswald.className} flex flex-col justify-center items-center relative overflow-x-hidden`}
    >
      {/* Logo Image */}
      <Image
        src="/goSaiyan.webp"
        width={1100}
        height={500}
        alt="logo"
        className="relative w-3/4 max-w-[64%] mt-40 max-sm:w-[90%] max-sm:mt-10"
        priority
      />

      {/* Text */}
      <p
        className="text-white w-1/3 text-center mt-3 max-sm:w-[90%] max-sm:mt-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam beatae sit doloribus atque
      </p>

      {/* Button */}
      <button
        className="bg-[#fff500] text-[#4eceff] py-3 px-6 rounded-md font-bold text-xl mt-6 hover:bg-[#e0d000]"
      >
        SHOP NOW
      </button>

      {/* Main Can Image */}
      <Image
        src="/mainCan.webp"
        alt="main can"
        width={2300}
        height={0}
        className="relative w-3/4 max-w-[80%] mt-16 max-sm:w-[90%]"
        priority
      />

      {/* Decorative Images */}
      <Image
        src="/redOrange.webp"
        alt="red peach"
        height={200}
        width={200}
        className="absolute top-[15%] left-[5%] w-[15%] max-sm:w-[20%]"
      />
      <Image
        src="/mainPeach.webp"
        alt="main peach"
        height={200}
        width={150}
        className="absolute top-[10%] right-[5%] w-[10%] max-sm:w-[15%]"
      />
      <Image
        src="/mainLime.webp"
        alt="main lime"
        height={200}
        width={150}
        className="absolute top-[60%] right-[5%] w-[12%] max-sm:w-[18%]"
      />
      <Image
        src="/leftLeaf.webp"
        alt="main leaf"
        height={200}
        width={250}
        className="absolute top-[70%] -left-[2%] w-[15%] rotate-45 max-sm:w-[20%]"
      />
      <Image
        src="/rightLeafe.webp"
        alt="main leaf"
        height={200}
        width={220}
        className="absolute top-[80%] -right-[2%] w-[15%] -rotate-12 max-sm:hidden"
      />
    </div>
  );
};

export default HeroHome;