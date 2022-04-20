import React from "react";
import Opportunities from "../components/Opportunities/List";
import SectionHeader from "../components/SectionHeader";
import Lottie from "react-lottie";
import * as animatedStreakData from "../assets/streak-lottie.json";

export default function Hero() {
  // const []
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedStreakData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="opportunities" className="p-3 md:p-5 py-12">
      <div className="mb-16 md:mb-52">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute bottom-6 md:bottom-12 -z-10">
            <Lottie options={defaultOptions} />
          </div>
          <SectionHeader title="The fastest way to become a web3 developer, learn to earn!" />
        </div>
      </div>
      <div className="flex justify-end w-full">
        <Opportunities />
      </div>
    </section>
  );
}
