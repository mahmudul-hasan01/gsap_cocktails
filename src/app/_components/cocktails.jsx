import React from "react";
import { cocktailLists, mockTailLists } from ".";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/public/images/cocktail-left-leaf.png"
        alt="cocktail-left"
        id="c-left-leaf"
      />
      <img
        src="/public/images/cocktail-right-leaf.png"
        alt="cocktail-right"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map((list) => (
              <li key={list.name}>
                <div className="=me-28">
                  <h3>{list.name}</h3>
                  <p>
                    {list.country} | {list.detail}
                  </p>
                </div>
                <span>- {list.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="popular">
          <h2>Most popular mocktails:</h2>
          <ul>
            {mockTailLists.map((list) => (
              <li key={list.name}>
                <div className="=me-28">
                  <h3>{list.name}</h3>
                  <p>
                    {list.country} | {list.detail}
                  </p>
                </div>
                <span>- {list.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
