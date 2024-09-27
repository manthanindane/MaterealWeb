import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StepCard = ({ step, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative w-full md:w-1/3 px-4 mb-12 md:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="bg-gray-800 rounded-lg p-6 h-full"
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6"
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl font-bold text-white">{index + 1}</span>
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
        <p className="text-gray-300">{step.desc}</p>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const EnhancedHowItWorksSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    },
  };

  const steps = [
    {
      title: "Sign Up for Free",
      desc: "Create your account and explore our innovative platform.",
    },
    {
      title: "Build Your Character",
      desc: "Craft a unique persona with a tailored description and personality.",
    },
    {
      title: "Start Chatting",
      desc: "Immerse yourself in conversations with your character anytime, anywhere.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-6xl md:text-8xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600"
        >
          Getting Started is Easy
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedHowItWorksSection;