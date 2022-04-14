import React from "react";
import { Link as ScrollLink } from "react-scroll";

const navData = [
  {
    path: "opportunities",
    label: "Opportunities",
  },
  {
    path: "getStarted",
    label: "Get Started",
  },
  {
    path: "agenda",
    label: "Agenda",
  },
  {
    path: "jobs",
    label: "Jobs",
  },
];

export default function FloatingNav() {
  return (
    <nav className="flex items-center justify-center w-full sticky bottom-6 mb-5 z-50 md:px-0 px-3">
      <div className="bg-[#EFEFEE] w-full md:w-1/3 flex p-2 rounded-lg justify-between">
        {navData.map((item, index) => (
          <ScrollLink
            activeClass="bg-black text-[#ffff]"
            to={item.path}
            spy={true}
            smooth={true}
            offset={item.path === "jobs" ? -40 : 0}
            duration={500}
            className="text-[#56534F] font-semibold p-2 md:text-base text-xs rounded-lg flex justify-center items-center cursor-pointer"
            key={index}
          >
            {item.label}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
}
