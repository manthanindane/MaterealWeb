import React from 'react';
import { motion } from 'framer-motion';

const RealisticPhoneFrame = () => {
  return (
    <motion.div 
      className="w-[320px] h-[700px] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[22px] shadow-xl relative overflow-hidden"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Screen content */}
      <div className="absolute inset-[5px] bg-black rounded-[20px] overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/assets/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bezel gradient overlay */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black via-transparent to-transparent opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black via-transparent to-transparent opacity-50" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black via-transparent to-transparent opacity-50" />
      </div>

      {/* Camera cutout */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full overflow-hidden">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-800 rounded-full" />
      </div>

      {/* Volume buttons */}
      <div className="absolute left-[-2px] top-24 w-1 h-16 bg-gray-700 rounded-r-md" />
      <div className="absolute left-[-2px] top-44 w-1 h-16 bg-gray-700 rounded-r-md" />

      {/* Power button */}
      <div className="absolute right-[-2px] top-32 w-1 h-20 bg-gray-700 rounded-l-md" />

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full opacity-80" />
    </motion.div>
  );
};

export default RealisticPhoneFrame;