import React from "react";
import LinkButton from "./LinkButton";

export default function CardComponent({
  title,
  subtitle,
  prize,
  variant,
  to,
  type,
}) {
  return (
    <div
      className="p-6 rounded-[28px] md:w-80 md:mr-5 flex flex-col justify-between"
      style={styles[variant].card}
    >
      <div>
        <p style={styles[variant].title} className="font-semibold text-2xl">
          {title}
        </p>
        <p style={styles[variant].subtitle} className="font-semibold text-2xl">
          {subtitle}
        </p>
      </div>
      <div className="pt-14">
        {prize && (
          <div>
            <h2 className="text-8xl text-[#FDFDFC]">${prize}</h2>
            <p className="text-2xl text-[#FDFDFC] my-3 font-semibold">Reward</p>
          </div>
        )}
        <LinkButton linkTo={to} type={type} />
      </div>
    </div>
  );
}

const styles = {
  "journey-purple": {
    card: {
      background: "#924EFF",
    },
    title: {
      color: "#FDFDFC",
    },
    subtitle: {
      color: "#b78aff",
    },
  },
  "journey-green": {
    card: {
      background: "#0CDA6E",
    },
    title: {
      color: "#FDFDFC",
    },
    subtitle: {
      color: "#b1ffd7",
    },
  },
  job: {
    card: {
      background: "#EFEFEE",
      height: "21.4 rem",
    },
    title: {
      color: "#1B1B18",
    },
    subtitle: {
      color: "#97928E",
    },
  },
};
