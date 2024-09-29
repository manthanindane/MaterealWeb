import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Matereal made it so easy to create a character based on my favorite TV show! I love chatting with them.",
    author: "Abhishek G.",
  },
  {
    quote: "I use Matereal to have fun, casual conversations whenever I need a break.",
    author: "Sudarshan B.",
  },
  {
    quote: "It's amazing how personal my character feels. It's like chatting with an old friend.",
    author: "Sujit S.",
  },
  {
    quote: "The AI-generated responses are incredibly creative and engaging. It's a fantastic writing tool!",
    author: "Priya M.",
  },
  {
    quote: "I've learned so much about different topics through my conversations on Matereal.",
    author: "Rahul K.",
  },
  {
    quote: "The character customization options are impressive. I created a virtual mentor for myself!",
    author: "Anita R.",
  },
  {
    quote: "Matereal has become my go-to platform for brainstorming ideas. It's like having a creative partner.",
    author: "Vikram S.",
  },
  {
    quote: "The emotional depth of the AI characters is remarkable. It's a truly immersive experience.",
    author: "Neha P.",
  },
];

const Testimonials = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop(); // Stop movement when hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      x: ['100%', '-100%'],
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: 'linear',
      },
    });
  };

  useEffect(() => {
    controls.start({
      x: ['100%', '-100%'],
      transition: {
        repeat: Infinity,
        duration: 40, // Slow down speed
        ease: 'linear',
      },
    });
  }, [controls]);

  return (
    <motion.section
      ref={containerRef}
      className="py-12 sm:py-16 md:py-20 overflow-hidden relative"
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 px-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        What Users Are Saying
      </motion.h2>
      <motion.div
        className="flex overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex space-x-6"
          animate={controls}
        >
          {/* Render testimonials twice to create continuous effect */}
          {testimonials.concat(testimonials).map((testimonial, i) => (
            <motion.div
              key={i}
              className="w-80 sm:w-96 flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <Quote className="w-8 h-8 text-purple-400 mb-4" />
                    <p className="text-gray-300 mb-4 text-base sm:text-lg">
                      {testimonial.quote}
                    </p>
                  </div>
                  <p className="text-right font-bold text-base sm:text-lg bg-gradient-to-r from-indigo-500 via-violet-600 to-pink-400 bg-clip-text text-transparent mt-auto">
                    - {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
