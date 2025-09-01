import React from 'react';
import { heroLogos } from "../constant/data.js";
import { RiPlayFill } from '@remixicon/react';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <section className="relative ">
      <div className="container">
        
        {/* Content */}
        <div className="mt-16 md:mt-24 text-center">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Unlock
            </span>{" "}
            Your Creative Potential
          </h1>

          <p className="text-xl md:text-2xl font-medium mt-6 text-gray-700">
            with Online Design and Development Courses.
          </p>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Learn from Industry Experts and Enhance Your Skills.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <button className="primary-btn px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
              Explore Courses
            </button>
            <button className="secondary-btn px-8 py-3 text-lg rounded-full hover:scale-105 transition-transform">
              View Pricing
            </button>
          </div>

          {/* Clients Logo */}
          <div className="mt-12 lg:mt-20 relative overflow-hidden">
            <Marquee pauseOnHover={true} gradient={false} speed={40}>
              {heroLogos.map((logo) => (
                <div className="px-12 py-5" key={logo.id}>
                  <img src={logo.img} alt="logo" width={logo.width} height={28} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Banner */}
        <figure className="relative rounded-xl overflow-hidden mt-14 max-w-[920px] w-full h-[500px] mx-auto shadow-lg">
          <img
            src="/images/hero-banner.png"
            alt="hero-banner"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <span className="flex bg-white w-20 h-20 items-center justify-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform">
              <RiPlayFill size={36} className="text-orange-500" />
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
