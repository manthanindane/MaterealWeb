import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MessageCircle, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import RealisticPhoneFrame from "./Phoneframe";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const AboutUsSection = () => {
  return (
    <motion.section className="py-12 sm:py-16 md:py-20 bg-gray-950 rounded-xl" {...fadeIn}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover Matereal
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            className="relative flex justify-center items-center order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20"></div>
            <RealisticPhoneFrame />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed">
              With Matereal, you can easily create and chat with AI characters that match your personality and interests. Whether you want to have fun, learn something new, or just enjoy a good conversation, Matereal lets you build characters that feel right for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />, text: 'Thousands of users(Hoping)' },
                { icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />, text: 'Millions of conversations (Hoping that too)' },
                { icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />, text: 'Highly rated characters' },
                { icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />, text: '24/7 availability' },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  {item.icon}
                  <span className="text-sm sm:text-base text-gray-300 font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <Button variant="gradient" size="lg" className="group w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-t border border-gray-300 rounded-xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="mb-6 md:mb-0 md:mr-8">
            <Image
              src="/assets/founderavatar.png"
              alt="Manthan Indane"
              width={120}
              height={120}
              className="rounded-full border-4 border-purple-600 sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Manthan Indane</h3>
            <p className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2">Founder & CEO</p>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              I created Matereal because, well, let&rsquo;s be honest—humans are overrated. Why deal with their drama when you can have an AI that&rsquo;s fun, reliable, and won&rsquo;t accidentally like your ex&rsquo;s Instagram post from 2016? Our mission? To make AI so personal and entertaining that you&rsquo;ll forget it&rsquo;s not human… which is honestly for the best, because it won&rsquo;t ask you to split the bill. We&rsquo;re here to revolutionize AI, one awkward conversation at a time. So go ahead, chat with an AI that&rsquo;s programmed to never ghost you—because, spoiler alert, it has no life either!
            </p>
            <Button variant="outline" size="lg" className="text-gray-900 font-bold text-sm sm:text-base w-full sm:w-auto">
              Read Manthan&rsquo;s Story
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;