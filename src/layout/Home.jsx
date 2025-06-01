import React from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
    const {t}=useTranslation(['home', 'navbar']);
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#FAF3E0]/90 backdrop-blur-sm"></div>

      <div className="relative max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#800000] mb-6 drop-shadow-lg">
          {/* Welcome to <span className="text-[#E34234]">MithilaVibes</span> */}
           <Typewriter
        words={[
          t("welcome_to")
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={120}
        deleteSpeed={120}
        delaySpeed={3000}
      />
          
        </h1>
        <p className="text-lg md:text-xl text-[#2E2E2E] mb-8 drop-shadow">
          <Typewriter
        words={[
         t("discover_culture")
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={140}
        deleteSpeed={120}
        delaySpeed={3000}
      />
        
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#FFD700] hover:bg-[#E34234] text-[#2E2E2E] font-semibold py-3 px-6 rounded-2xl transition-all shadow-md drop-shadow-md">
            {t("explore_now")}
          </button>
          <button className="border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white font-semibold py-3 px-6 rounded-2xl transition-all shadow-md drop-shadow-md">
            {t("learn_more")}
          </button>
        </div>
      </div>
    </section>
  );
}
