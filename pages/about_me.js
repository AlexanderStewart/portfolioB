import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const AboutMe = () => {

  // States

  // Springs
  const startAnimation = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: 100 }, config: config.molasses, delay: 200 });

  const leftRightAnimation = useSpring({ to: { x: -10 }, from: { x: 10 }, config: config.molasses, loop: { reverse: true } });
  const rightLeftAnimation = useSpring({ to: { x: 10 }, from: { x: -10 }, config: config.molasses, loop: { reverse: true } });

  const leftRightAnimationTwo = useSpring({ to: { x: 10, color: '#facc15' }, from: { x: -10, color: '#22d3ee' }, config: config.molasses, loop: { reverse: true } });
  const rightLeftAnimationTwo = useSpring({ to: { x: -10, color: '#22d3ee' }, from: { x: 10, color: '#facc15' }, config: config.molasses, loop: { reverse: true } });

  const bounce = useSpring({ to: { rotateZ: 1 }, from: { rotateZ: -1 }, config: config.bounce, delay: 200, loop: { reverse: true } });

  return (
    <>
      <animated.div style={startAnimation}>
        <div className="mt-44" />
        <div className="flex flex-1 flex-col items-center">
          <div className="max-w-[500px] mx-4" >
            <animated.h3 className="text-gray-800 text-lg font-serif">Hey there! My name is</animated.h3>
            <div className="mt-2" />
            <animated.div className="flex flex-1 w-full p-10 bg-gray-800 flex-col rounded-md border-2 border-gray-800" >
              <animated.h1 style={leftRightAnimation} className="text-white text-4xl text-center font-bold leading-8">Alexander</animated.h1>
              <animated.h1 style={rightLeftAnimation} className="text-white text-4xl text-center font-bold leading-8">Stewart</animated.h1>
            </animated.div>

            <div className="mt-8" />
            <div className="w-10 h-1 bg-gray-800" />
            <div className="mt-6" />
            <h3 className="text-gray-800 text-lg font-serif">I'm a</h3>
            <div className="mt-2" />
            <animated.div style={bounce} className="flex flex-1 w-full p-10 bg-gray-800 flex-col rounded-md border-4 border-yellow-400" >
              <animated.h1 style={leftRightAnimationTwo} className="text-gray-800 text-4xl text-center font-bold leading-8">Full Stack</animated.h1>
              <animated.h1 style={rightLeftAnimationTwo} className="text-gray-800 text-4xl text-center font-bold leading-8">Developer</animated.h1>
            </animated.div>
            <div className="mt-8" />
            <p className="text-gray-800 text-lg font-serif">
              I specialize in all things React and React Native. This pretty nifty site
              (if I do say so myself) was written in Next.js. You can view the source code <a href="https://github.com/AlexanderStewart/portfolioB" className="text-blue-500">here</a>.
            </p>
            <div className="mt-8" />
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default AboutMe;
