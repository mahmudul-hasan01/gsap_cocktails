"use client";
import React from "react";

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./_components/hero";
import Cocktails from "./_components/cocktails";
import About from "./_components/about";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Pome = () => {
  return (
    <div>
      <div className="flex-center h-[100vh]">
        <Hero />
      </div>
      <Cocktails />
      <About />
    </div>
  );
};

export default Pome;
