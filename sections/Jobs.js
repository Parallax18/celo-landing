import React from "react";
import CardComponent from "../components/Card";
import Image from "next/image";
import MobileJobCard from "../components/MobileJobCard";

const Celo = require("../assets/celo-logo.svg");
const Dacade = require("../assets/dacade-logo.svg");

const data = [
  {
    title: "Clabs",
    subtitle: "Open roles",
    to: "/",
  },
  {
    title: "Valora",
    subtitle: "Open roles",
    to: "/",
  },
  {
    title: "Celo foundation",
    subtitle: "Open roles",
    to: "/",
  },
];

export default function Jobs() {
  return (
    <section id="jobs" className="px-5 md:py-0 py-16 md:mt-0 mt-10">
      <h3 className="font-semibold text-lg mb-3">Jobs</h3>

      <div className="md:flex hidden">
        {data.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            variant="job"
            type="job"
            to="/"
          />
        ))}
      </div>
      <div className="md:hidden flex flex-col">
        {data.map((item, index) => (
          <MobileJobCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            variant="job"
            type="job"
            to="/"
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-16 md:mt-72">
        <div className="mr-5 md:mr-0 w-32 md:w-52">
          <Image src={Celo} />
        </div>
        <div className="w-32 md:w-52">
          <Image src={Dacade} />
        </div>
      </div>
    </section>
  );
}
