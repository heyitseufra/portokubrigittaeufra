"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-10 lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-3xl sm:text-5xl lg:text-6xl block mb-6">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span className="text-4xl sm:text-4xl lg:text-4xl">
              <TypeAnimation
                sequence={[
                  "Brigitta Eufra",
                  1000,
                  "Informatics Engineering Student",
                  1000,
                  "Data Scientist",
                  1000,
                  "Front-End Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text justify-center italic">
            Designing solutions, crafting experiences, and uncovering insights –
            I turn data into stories, interfaces into opportunities, and ideas
            into impactful messages through the power of communication.
          </p>

          <div className="mx-auto px-4 my-6 max-w-screen-lg">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-3 place-items-center">
              {[
                "Putri Brawijaya Berbakat 2023",
                "Azure AI Engineer – Digital Talent Scholarship Awardee",
                "Front-End Developer Mentee – Digistar Class 2024",
                "UI/UX Designer – Raion Community",
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="relative group p-3 rounded-lg border-2 border-gray-700 shadow-md bg-black w-full h-16 flex items-center justify-center text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600"
                >
                  <p className="text-white font-medium text-[10px] sm:text-xs leading-tight group-hover:scale-110 transition-transform duration-300 ease-in-out">
                    {achievement}
                  </p>
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-2xl font-bold text justify-center mb-8">
            Let&apos;s connect and build solutions that matter!
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href=""
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="rounded-full bg-[#181818] 
                      w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] 
                      md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform 
                        -translate-x-1/2 -translate-y-[70%] 
                        top-1/2 left-1/2"
              width={443}
              height={443}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
