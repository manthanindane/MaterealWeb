"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import logo from "../../public/assets/logo.png";
import { MessageSquare, Users, Zap, BarChart } from "lucide-react";
import PricingSection from "./components/Pricing.jsx";
import AboutUsSection from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials"
import Working from "./components/Working"
import Footer from './components/Footer'; 

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  // const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src={logo} alt="Matereal Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold bg-clip-text">
              Mate<span className="gradient-text font-black">real</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 relative">
            {[
              { name: "About", ref: aboutRef },
              { name: "Features", ref: featuresRef },
              { name: "How It Works", ref: howItWorksRef },
              { name: "Pricing", ref: pricingRef },
              { name: "Contact", ref: contactRef },
            ].map((item) => (
              <div key={item.name} className="relative">
                <motion.button
                  onClick={() => scrollToSection(item.ref)}
                  className="text-gray-200 relative transition-colors text-xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }} // Scale up on hover
                  whileTap={{ scale: 0.95 }} // Scale down on click
                >
                  {item.name}
                </motion.button>
                <motion.span
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 bottom-0 scale-x-0 origin-left transition-transform duration-300 ease-in-out"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }} // Scale to full width on hover
                />
              </div>
            ))}
          </div>
          <Button variant="gradient" className="button-gradient  text-white">
            Get Started
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* About Us Section */}
        <div ref={aboutRef}>
          <AboutUsSection />
        </div>
        {/* Features Section */}
        <motion.section
          ref={featuresRef}
          className="py-20 bg-transparent h-screen mt-20"
          {...fadeIn}
        >
          <h2 className="text-8xl font-extrabold mb-12 text-center bg-clip-text text-transparent gradient-text to-purple-600">
            What Can You Do with Matereal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Create Unique Characters",
                desc: "Bring your favorite characters to life based on your favorite shows, books, or even your imagination.",
                icon: (
                  <Users className="w-10 h-10 text-blue-400 transition-transform transform hover:scale-110" />
                ),
              },
              {
                title: "Chat Anytime",
                desc: "Enjoy conversations with your AI characters 24/7 they're always available for you.",
                icon: (
                  <MessageSquare className="w-10 h-10 text-purple-400 transition-transform transform hover:scale-110" />
                ),
              },
              {
                title: "Custom Conversations",
                desc: "Engage in chats about topics you love, from advice to fun facts; the choice is yours.",
                icon: (
                  <Zap className="w-10 h-10 text-pink-400 transition-transform transform hover:scale-110" />
                ),
              },
              {
                title: "Flexible Plans",
                desc: "Explore Matereal's free plan and various subscription options tailored to your needs.",
                icon: (
                  <BarChart className="w-10 h-10 text-green-400 transition-transform transform hover:scale-110" />
                ),
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="bg-gradient-to-r border border-gray-600 hover:border-purple-500 transition-all duration-300 rounded-lg shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="text-xl font-semibold text-gray-100">
                      {feature.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* How It Works Section */}
        <div ref={howItWorksRef}>
          <Working/>
        </div>

          {/* Testimonials Section */}
         <Testimonials/>

        {/* Pricing Section */}
        <div ref={pricingRef}>
          <PricingSection />
        </div>

        {/* Contact Us Section */}
        <motion.section ref={contactRef} className="py-20" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            Get in Touch
          </h2>
          <p className="text-xl mb-8 text-gray-300 text-center">
            Reach out if you have any questions or need help with your account.
          </p>
          <p className="text-2xl font-normal text-center">
            <a
              href="mailto:matereal.manthan@gmail.com"
              className="gradient-text"
            >
              matereal.manthan@gmail.com
            </a>
          </p>
        </motion.section>
      </main>

      <Footer 
  scrollToSection={scrollToSection}
  aboutRef={aboutRef}
  featuresRef={featuresRef}
  howItWorksRef={howItWorksRef}
  pricingRef={pricingRef}
  contactRef={contactRef}
/>
    </div>
  );
}
