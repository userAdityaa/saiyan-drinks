import { Oswald } from "next/font/google"

export const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']});
export const mainthemeStyles = 'text-[#68d9ff]';
export const svgFillColor = 'fill-[#68d9ff]';
export const navbarCan = ['peachCan1', 'limeCan1', 'dragonCan1', 'lemonCan2', 'strawCan2', 'grapeCan1', 'berryCan1'];
export const navbarCanName = ['Peach', 'lime', 'dragonfruit', 'lemon', 'strawberry', 'grape', 'blueberry'];
export const navbarCanBackground = ['#ff9014', '#76c015', '#ff0ea6', '#d6c200', '#f13e37', '#812181', '#1280e4'];

export const defaultTheme = {
  themeName: 'default',
  mainthemeStyle: 'text-[#4eceff]',
  svgFillColor: '#4eceff',
  svgBack: '/blue.webp',
};

export const themeConfigs = [
  {
    themeName: 'peach',
    mainthemeStyle: 'text-[#ff8c00]',
    svgFillColor: '#ff8c00',
    svgBack: '/peach.svg',
  },
  {
    themeName: 'lime',
    mainthemeStyle: 'text-[#69ac0b]',
    svgFillColor: '#69ac0b',
    svgBack: '/lime.svg',
  },
  {
    themeName: 'dragonfruit',
    mainthemeStyle: 'text-[#ff21ce]',
    svgFillColor: '#ff21ce',
    svgBack: '/dragonfruit.svg',
  },
];