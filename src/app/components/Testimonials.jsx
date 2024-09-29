import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

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
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      className="py-20 mt-20 min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-6xl md:text-8xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        What Users Are Saying
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <motion.p
                  className="text-gray-300 mb-4 text-lg"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </motion.p>
                <motion.p
                  className="text-right font-bold text-lg bg-gradient-to-r from-indigo-500 via-violet-600 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                >
                  - {testimonial.author}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;

