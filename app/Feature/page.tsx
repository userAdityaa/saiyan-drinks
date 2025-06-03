'use client'
import { Comparison, Footer, Hero, Menu, Navbar, Press, Questions, Review, Serving, Shaking } from '@/components'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useGlobalContext } from '@/context/themeContext'


const FeatureContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams!.get('search');
  const { theme, setTheme } = useGlobalContext();

  if (search === 'peach') setTheme('peach');
  else setTheme(search!);

  return (
    <>
      <Navbar />
      <Hero />
      <Serving />
      <Shaking />
      <Comparison />
      <Review />
      <Press />
      <Menu />
      <Questions />
      <Footer />
    </>
  );
};

const Feature = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeatureContent />
    </Suspense>
  );
};

export default Feature;