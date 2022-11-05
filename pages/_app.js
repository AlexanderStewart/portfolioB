import '../styles/globals.css';

import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import Cube from './../components/Cube';
import Link from 'next/link';

// Assets
import { Bars3Icon } from '@heroicons/react/24/outline';

function MyApp({ Component, pageProps }) {

  // States
  const [viewMenu, setViewMenu] = useState(false);
  const [cubeColor, setCubeColor] = useState('yellow');

  // Springs
  const startAnimation = useSpring({ opacity: viewMenu ? 0 : 1, y: viewMenu ? 100 : 0, config: config.molasses, delay: 0 });
  const fadeInAnimation = useSpring({ visibility: viewMenu ? 'visible' : 'hidden', opacity: viewMenu ? 1 : 0, config: viewMenu ? config.molasses : { duration: 0 }, delay: viewMenu ? 400 : 0 });
  const downUpAnimation = useSpring({ height: viewMenu ? '100vh' : '0vh' });

  const onLinkClick = () => {
    setViewMenu(!viewMenu);
    setCubeColor(viewMenu ? 'yellow' : 'teal');
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 flex flex-1 justify-center z-10">
        <animated.div className="flex flex-1 bg-gray-800 w-full h-0" style={downUpAnimation}>
          <animated.div className="max-w-full flex flex-1 flex-col items-center" style={fadeInAnimation} >
            <div className="mt-52" />
            <div className="text-white text-4xl font-bold leading-8">Menu</div>
            <div className="mt-10" />
            <Link className="text-blue-400 text-2xl font-bold leading-8" href="/" onClick={() => onLinkClick()}>Home</Link>
            <div className="mt-10" />
            <Link className="text-blue-400 text-2xl font-bold leading-8" href="/portfolio" onClick={() => onLinkClick()}>Portfolio</Link>
            <div className="mt-10" />
            <Link className="text-blue-400 text-2xl font-bold leading-8" href="about_me" onClick={() => onLinkClick()}>About Me</Link>
            <div className="mt-10" />
            <Link className="text-blue-400 text-2xl font-bold leading-8" href="contact" onClick={() => onLinkClick()}>Contact</Link>
          </animated.div>
        </animated.div>
      </div>

      <div className="absolute top-0 left-0 right-0 flex flex-1 justify-center z-10 mt-4">
        <animated.div className="max-w-[500px] flex flex-1"
          onClick={() => {
            setViewMenu(!viewMenu);
            setCubeColor(viewMenu ? 'yellow' : 'teal');
          }}>
          <div className="mt-4" />
          <Bars3Icon className={viewMenu ? "text-white h-9 w-9 ml-4" : "text-gray-800 h-9 w-9 ml-4"} />
        </animated.div>
      </div>

      <div className="absolute top-0 left-0 right-0 flex flex-1 justify-center mt-10 z-50">
        <Cube height={100} width={100} color={cubeColor} />
      </div>

      <animated.div style={startAnimation}>
        <Component {...pageProps} />
      </animated.div>

      <div className="mt-12" />
    </>);
}

export default MyApp;
