import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import Image from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';

const Portfolio = () => {

  // States
  const [onSeenA, setOnSeenA] = useState(false);
  const [onSeenB, setOnSeenB] = useState(false);
  const [onSeenC, setOnSeenC] = useState(false);
  const [onSeenD, setOnSeenD] = useState(false);
  const [onSeenE, setOnSeenE] = useState(false);
  const [onSeenF, setOnSeenF] = useState(false);

  // Springs
  const fromLeftA = useSpring({ opacity: onSeenA ? 1 : 0, y: onSeenA ? 0 : 100, config: config.molasses, delay: 0 });
  const fromRightA = useSpring({ opacity: onSeenB ? 1 : 0, y: onSeenB ? 0 : 100, config: config.molasses, delay: 0 });
  const fromLeftB = useSpring({ opacity: onSeenC ? 1 : 0, y: onSeenC ? 0 : 100, config: config.molasses, delay: 0 });
  const fromRightB = useSpring({ opacity: onSeenD ? 1 : 0, y: onSeenD ? 0 : 100, config: config.molasses, delay: 0 });
  const fromLeftC = useSpring({ opacity: onSeenE ? 1 : 0, y: onSeenE ? 0 : 100, config: config.molasses, delay: 0 });
  const fromRightC = useSpring({ opacity: onSeenF ? 1 : 0, y: onSeenF ? 0 : 100, config: config.molasses, delay: 0 });

  return (
    <>
      <div>
        <div className="mt-44" />
        <div className="flex flex-1 justify-center">
          <div className="max-w-[600px] mx-4 flex flex-1 flex-col" >

            <div className="bg-gray-800 rounded-md p-8">
              <h2 className="text-white text-4xl font-bold leading-8">Portfolio</h2>
              <div className="mt-4" />
              <p className="text-white text-lg font-serif">
                Here are some of the projects I've been working on.
              </p>
            </div>

            <div className="mt-4" />

            <animated.div className="bg-amber-400 rounded-md p-8" style={fromLeftA}>
              <VisibilitySensor
                onChange={(e) => {
                  if (e === false) return;
                  setOnSeenA(true);
                }}>

                <h2 className="text-gray-800 text-4xl font-bold leading-8">Stoic Nature</h2>
              </VisibilitySensor>
              <div className="mt-4" />
              <p className="text-gray-800 text-lg font-serif">
                Stoic Nature is a journaling app with prompts inspired by the Stoic philosophy. It is a MERN stack app which I am currently working on with two others as a full stack developer.
              </p>
              <div className="flex flex-1 justify-center">
                <Image
                  src="/images/stoicnature.png"
                  height={300}
                  width={300}
                  alt="Your Name"
                />
              </div>
            </animated.div>

            <div className="mt-4" />

            <animated.div className="bg-green-400 rounded-md p-8" style={fromRightA}>
              <VisibilitySensor
                onChange={(e) => {
                  if (e === false) return;
                  setOnSeenB(true);
                }}>
                <h2 className="text-gray-800 text-4xl font-bold leading-8">CigQuit</h2>
              </VisibilitySensor>
              <div className="mt-4" />
              <p className="text-gray-800 text-lg font-serif">
                CigQuit is a MERN stack app that allows users to track a handful of smoking metrics based on user-entered stats about their smoking habits prior to quitting. CigQuit provides the following metrics: a quit date (so you don???t forget), how many days that have gone by without smoking, how many cigarettes you have avoided smoking by quitting, and how much money you have saved by quitting.
                <br />
                <br />
                CigQuit also incorporates a social aspect to the user's quitting journey, allowing them to share their own quit stats and view the quit stats of friends.
                <br />
                <br />
                You can view CigQuit on the App Store here.
              </p>
              <div className="flex flex-1 justify-center">
                <Image
                  src="/images/cigquit.png"
                  height={300}
                  width={300}
                  alt="Your Name"
                />
              </div>
            </animated.div>

            <div className="mt-4" />

            <animated.div className="bg-indigo-400 rounded-md p-8" style={fromLeftB}>
              <VisibilitySensor
                onChange={(e) => {
                  if (e === false) return;
                  setOnSeenC(true);
                }}>

                <h2 className="text-white text-4xl font-bold leading-8">Golden Sum</h2>
              </VisibilitySensor>
              <div className="mt-4" />
              <p className="text-white text-lg font-serif">
                Golden Sum is a math based puzzle game played on a 5x5 grid. The purpose of the game is to add the yellow circles to fill in the gray numbered circle by matching its value with the value of a new circle.
                <br />
                <br />
                Golden Sum was made with React Native. It features both an app version and a web version, this was done very easily with expo.
                <br />
                <br />
                View Golden Sum online here. View the code for Golden Sum here.


              </p>
              <div className="flex flex-1 justify-center">
                <Image
                  src="/images/goldensum.png"
                  height={300}
                  width={300}
                  alt="Your Name"
                />
              </div>
            </animated.div>

            <div className="mt-4" />

            <animated.div className="bg-emerald-400 rounded-md p-8" style={fromRightB}>
              <VisibilitySensor
                onChange={(e) => {
                  if (e === false) return;
                  setOnSeenD(true);
                }}>

                <h2 className="text-gray-800 text-4xl font-bold leading-8">CigQuit</h2>
              </VisibilitySensor>
              <div className="mt-4" />
              <p className="text-gray-800 text-lg font-serif">
                Circles is a game made exclusively for the web. It is the cousin website to my app Golden Sum. The main difference (other than the platform it is presented on) is that the grid of circles is slightly different. This leads to simpler game play and makes circles an easier game.
                <br />
                <br />
                Circles was developed using React. Each individual circle in the game is simply a div. The game is open source and is licensed under the MIT license, meaning anyone can use the code however they please.
                <br />
                <br />
                Feel free to play circles now or view the code.
              </p>
              <div className="flex flex-1 justify-center">
                <Image
                  src="/images/circles.png"
                  height={300}
                  width={300}
                  alt="Your Name"
                />
              </div>
            </animated.div>

            <div className="mt-4" />

            <animated.div className="bg-teal-400 rounded-md p-8" style={fromLeftC}>
              <VisibilitySensor
                onChange={(e) => {
                  if (e === false) return;
                  setOnSeenE(true);
                }}>

                <h2 className="text-gray-800 text-4xl font-bold leading-8">Group Six Solitaire</h2>
              </VisibilitySensor>
              <div className="mt-4" />
              <p className="text-gray-800 text-lg font-serif">
                Group Six Solitaire was a group project I did while I was in school. I enjoy working in groups while coding because it allows everyone's strengths to shine. The game is fully functional, it includes auto stack, drag to stack, vegas mode, a scoring system, and more.
                <br />
                <br />
                It is a fully front end React application.
                <br />
                <br />
                View Group Six Solitaire here.
              </p>
              <div className="flex flex-1 justify-center">
                <Image
                  src="/images/groupsixsolitaire.png"
                  height={400}
                  width={400}
                  alt="Your Name"
                />
              </div>
            </animated.div>

            <div className="mt-4" />

            <animated.div className="bg-sky-400 rounded-md p-8" style={fromRightC}>
              <VisibilitySensor
                onChange={(e) => {
                  if (e === false) return;
                  setOnSeenF(true);
                }}>
                <h2 className="text-gray-800 text-4xl font-bold leading-8">Comp Sci Calculator</h2>
              </VisibilitySensor>
              <div className="mt-4" />
              <p className="text-gray-800 text-lg font-serif">
                CompSciCalculator is a simple tool that allows you to convert from different number systems. I had used such tools early in my studies at Algonquin College and wanted to see if I could make one myself! Turns out it was really easy, as JavaScript has a built in function that allows for number system conversion.
                <br />
                <br />
                CompSciCalc is available to view here. It is also open source, and you can view the code here.
              </p>
              <div className="flex flex-1 justify-center">
                <Image
                  src="/images/compscicalc.png"
                  height={300}
                  width={300}
                  alt="Your Name"
                />
              </div>
            </animated.div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Portfolio;
