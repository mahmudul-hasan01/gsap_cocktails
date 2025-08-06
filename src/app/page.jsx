"use client"
import React from 'react';

import {ScrollTrigger, SplitText} from "gsap/all"
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText)

const Pome = () => {
  return (
    <div>
      <h1 className='text-3xl text-indigo-300 text-center'>Hello, GSAP</h1>
    </div>
  );
};

export default Pome;


















// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   // useGSAP(() => {
//   //   gsap.fromTo('#blue-box',
//   //     {
//   //       x: 0,
//   //       rotation: 0,
//   //       borderRadius: '0%',
//   //     },
//   //     {
//   //     x:550,
//   //     repeat: -1,
//   //     yoyo: true,
//   //      borderRadius: '100%',
//   //     rotation: 360,
//   //     duration: 1,
//   //     ease: 'bounce'
//   //   })
//   // },[])

//   // const GsapTimeline = () => {
//   //   const timeline = gsap.timeline({
//   //     repeat: -1,
//   //     repeatDelay: 1,
//   //     yoyo: true,
//   //   });
//   //   useGSAP(() => {
//   //     timeline.to("#blue-box", {
//   //       x: 150,
//   //       rotation: 360,
//   //       borderRadius: "100%",
//   //       duration: 2,
//   //       ease: "back.inOut",
//   //     });
//   //     timeline.to("#blue-box", {
//   //       y: 250,
//   //       scale: 2,
//   //       rotation: 360,
//   //       borderRadius: '100%',
//   //       duration: 2,
//   //       ease: "back.inOut"
//   //     })
//   //     timeline.to("#blue-box", {
//   //       x: 500,
//   //       scale: 3,
//   //       rotation: 360,
//   //       borderRadius: '8px',
//   //       duration: 2,
//   //       ease: 'back.inOut'
//   //     })
//   //   }, []);
//   // };

//   // GsapTimeline()

//   // const GsapStagger = () => {
//   //   useGSAP(() => [
//   //     gsap.to('.stagger-box', {
//   //       x: 250,
//   //       rotation: 360,
//   //       borderRadius: '100%',
//   //       repeat: -1,
//   //       yoyo: true,
//   //       // stagger: 0.5
//   //       stagger: {
//   //         amount: 1,
//   //         grid: [2,1],
//   //         axis: "y",
//   //       }
//   //     })
//   //   ])
//   // }
//   // GsapStagger()

//   // const scrollRef = useRef(null);
//   // useGSAP(() => {
//   //   const boxes = gsap.utils.toArray(scrollRef.current.children);

//   //   boxes.forEach((box) => {
//   //     gsap.to(box, {
//   //       x: 150,
//   //       rotation: 360,
//   //       borderRadius: "100%",
//   //       scale: 1.5,
//   //       scrollTrigger: {
//   //         trigger: box,
//   //         start: "bottom  bottom",
//   //         end: "top 20%",
//   //         scrub: true,
//   //       },
//   //       ease: "power1.inOut",
//   //     });
//   //   });
//   // }, []);

//   const scrollRef = useRef(null); // Make sure scrollRef is correctly assigned

//   useGSAP(() => {
//     const boxes = gsap.utils.toArray(scrollRef.current.children); // Get all child elements in the scroll container

//     boxes.forEach((box) => {
//       gsap.to(box, {
//         x: 150, // Move box 150px to the right
//         rotation: 360, // Rotate box
//         borderRadius: "100%", // Round the corners
//         scale: 1.5, // Scale up the box
//         scrollTrigger: {
//           trigger: box, // This is the element that will trigger the animation
//           start: "bottom bottom", // When the top of the box is at 80% of the viewport height
//           end: "top 20%", // When the top of the box is at 20% of the viewport height
//           scrub: true, // This makes the animation scrub along with the scroll
//         },
//         ease: "power1.inOut", // Ease type
//       });
//     });
//   }, []);

//   return (
//     <div className="p-10 w-full">
//       {/* <button onClick={() => {
//         if(timeline.paused()){
//           timeline.play()
//         }else{
//           timeline.pause()
//         }
//       }}>button</button> */}

//       {/* <div id="blue-box" className="w-[100px] h-[100px] bg-blue-400"></div> */}

//       {/* <div id="blue-box" className="stagger-box w-[100px] h-[100px] bg-gray-400"></div>
//       <div id="blue-box" className="stagger-box w-[100px] h-[100px] bg-blue-400"></div> */}
//       {/* <div id="blue-box" className="stagger-box w-[100px] h-[100px] bg-red-400"></div>
//       <div id="blue-box" className="stagger-box w-[100px] h-[100px] bg-greenf-400"></div> */}

//       <div className="p-10 w-full mt-250">
//         <div
//           ref={scrollRef}
//           className="flex flex-col gap-4 mt-10"
//           style={{ height: "200vh" }} // Making the container large enough to allow scrolling
//         >
//           {/* Boxes to animate */}
//           <div
//             id="blue-box"
//             className="stagger-box w-[100px] h-[100px] bg-red-400"
//           ></div>
//           <div
//             id="green-box"
//             className="stagger-box w-[100px] h-[100px] bg-green-400"
//           ></div>
//           <div
//             id="yellow-box"
//             className="stagger-box w-[100px] h-[100px] bg-yellow-400"
//           ></div>
//           <div
//             id="blue-box-2"
//             className="stagger-box w-[100px] h-[100px] bg-blue-400"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }
