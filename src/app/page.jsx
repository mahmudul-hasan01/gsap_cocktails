"use client";
import React from "react";

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./_components/hero";
import Cocktails from "./_components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Pome = () => {
  return (
    <div>
      <div className="flex-center h-[100vh]">
        <Hero />
      </div>
      {/* <div className="h-dvh bg-black"></div> */}
      <Cocktails />
    </div>
  );
};

export default Pome;
