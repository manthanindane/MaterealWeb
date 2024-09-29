import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const HeroSection = () => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    const createLight = () => {
      const newLight = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        size: Math.random() * 200 + 100,
        duration: Math.random() * 4000 + 3000,
        delay: Math.random() * 1000,
      };
      setLights(prevLights => [...prevLights, newLight]);
      setTimeout(() => {
        setLights(prevLights => prevLights.filter(light => light.id !== newLight.id));
      }, newLight.duration + newLight.delay);
    };

    const intervalId = setInterval(createLight, 800);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      className="flex flex-col lg:flex-row items-center justify-between py-10 sm:py-16 lg:py-20 min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8"
      {...fadeIn}
    >
      <div className="w-full lg:w-1/2 z-10 mb-10 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 animated-gradient-text leading-tight">
          Create your own AI and chat
        </h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300">
          Matereal lets you build characters you can talk to. <br className="hidden sm:inline"/>Fun, simple,
          and personal.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            size="lg"
            variant="gradient"
            className="button-gradient text-white text-md px-6 sm:px-8 py-3 w-full sm:w-auto"
          >
            <a href="https://drive.google.com/file/d/1uxmmgEJYbvgELU3eTLWUMwPs1GWa0ZvP/view?usp=sharing" className="w-full text-center">
              Download APK
            </a>
          </Button>
          <Image
            src="/assets/indusbadge.jpeg"
            alt="AI Icon"
            width={100}
            height={200}
            className="rounded-lg object-cover object-center h-11 w-auto mx-auto sm:mx-0"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative z-10">
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500 to-pink-500 opacity-30 animate-pulse"></div>
          <Image
            src="/assets/hero.png"
            alt="Matereal App"
            width={400}
            height={800}
            className="relative w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {lights.map(light => (
          <div
            key={light.id}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${light.x}%`,
              top: `${light.y}%`,
              width: `${light.size}px`,
              height: `${light.size}px`,
              background: 'radial-gradient(circle, rgba(0,0,255,0.4) 0%, rgba(255,0,128,0.4) 100%)',
              animation: `glowEaseIn ${light.duration}ms ease-in ${light.delay}ms`,
            }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient-text {
          background: linear-gradient(to right, #5100FFFF, #EE33FFFF, #5100FFFF, #FC466B);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s ease infinite;
        }
        @keyframes glowEaseIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 0.6; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;