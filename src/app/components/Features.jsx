import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-darkGray text-white">
      <h2 className="text-5xl font-bold text-center mb-10">App Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-darkBg p-6 rounded-lg shadow-custom hover:shadow-lg transition">
          <h3 className="text-2xl mb-4">Create AI Characters</h3>
          <p className="text-grayText">Design AI characters personalized to your unique needs.</p>
        </div>
        <div className="bg-darkBg p-6 rounded-lg shadow-custom hover:shadow-lg transition">
          <h3 className="text-2xl mb-4">Personalized Conversations</h3>
          <p className="text-grayText">Experience responses that feel natural and tailored to your preferences.</p>
        </div>
        <div className="bg-darkBg p-6 rounded-lg shadow-custom hover:shadow-lg transition">
          <h3 className="text-2xl mb-4">Real-Time Interaction</h3>
          <p className="text-grayText">Get real-time responses from AI models with zero latency.</p>
        </div>
        <div className="bg-darkBg p-6 rounded-lg shadow-custom hover:shadow-lg transition">
          <h3 className="text-2xl mb-4">Cross-Platform Support</h3>
          <p className="text-grayText">Enjoy seamless access via mobile apps and web platforms.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
