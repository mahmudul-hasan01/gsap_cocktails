import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    // heroSplit.chars.forEach((char) => char.classList.add(''))

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.5,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      ) .to(
        ".left-leaf",
        {
          y: -200,
        },
        0
      );
  }, []);

  return (

    <section
  id="hero"
  style={{
    backgroundImage: `url('/public/images/noise.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
  className="w-full h-screen relative opacity-50"
>
  <h1 className="title text-9xl xl:text-[300px]  text-center">MOJITO</h1>

  <Image
    src="/public/images/hero-left-leaf.png"
    alt="left leaf"
    width={100}
    height={100}
    className="left-leaf absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3"
  />

  <Image
    src="/public/images/hero-right-leaf.png"
    alt="right leaf"
    width={100}
    height={100}
    className="right-leaf absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24"
  />

  <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
    <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
      <div className="space-y-5 hidden md:block">
        <p>Cool. Crisp. Classic.</p>
        <p className="subtitle">
          Sip the Spirit <br /> of Summer
        </p>
      </div>

      <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
        <p className="subtitle">
          Every cocktail on our menu is a blend of premium ingredients, creative flair,
          and timeless recipes — designed to delight your senses.
        </p>
        <a href="#cocktails">View cocktails</a>
      </div>
    </div>
  </div>
</section>


  );
};

export default Hero;
