import Link from "next/link";
import React from "react";
import CardComponent from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import Lottie from "react-lottie";
import * as animatedArrowData from "../assets/arrow-lottie.json";
import * as downArrowData from "../assets/down-lottie.json";

const data = [
  {
    title: "Celo Development 101",
    subtitle: "Learn smart contract development and build a Dapp on Celo",
    prize: "100",
    variant: "journey-purple",
    to: "https://dacade.org/communities/celo/courses/celo-development-101",
  },
  {
    title: "Celo Development 201",
    subtitle: "Build an NFT Minter with Hardhat and React",
    prize: "150",
    variant: "journey-green",
    to: "https://dacade.org/communities/celo/courses/celo-201",
  },
];

export default function GetStarted() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedArrowData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mobileOptions = {
    loop: true,
    autoplay: true,
    animationData: downArrowData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      id="getStarted"
      className="lg:h-max  p-3 md:py-5 py-12 md:p-5"
      style={{ background: "#1B1B18" }}
    >
      <div className="w-full md:w-2/3 flex flex-col justify-between relative h-1/2 md:mb-0 mb-64">
        <div className="absolute md:block hidden" style={{ zIndex: 1 }}>
          <Lottie options={defaultOptions} />
        </div>
        <div className="absolute md:hidden block left-16" style={{ zIndex: 1 }}>
          <Lottie options={mobileOptions} />
        </div>
        <span style={{ zIndex: 2 }}>
          <SectionHeader
            title="Start your learning journey now!"
            isWhite={true}
          />
        </span>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between items-end">
        <div className="h-full w-full md:w-1/2 mt-7">
          <p className="text-white mb-10 md:text-base text-sm">
            Voluptatem quos et dolorem nihil alias. Quaerat velit assumenda
            animi ut et voluptatem sequi omnis. Provident exercitationem
            expedita quisquam officia ut expedita et.{" "}
          </p>
          <Link href="https://dacade.org/" passHref>
            <a className="text-white text-sm">dacade.org</a>
          </Link>
        </div>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-5">
          {data.map((item, index) => (
            <CardComponent
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              prize={item.prize}
              variant={item.variant}
              to={item.to}
              type="journey"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
