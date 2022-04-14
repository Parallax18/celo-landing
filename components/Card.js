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
      className="p-4 rounded-xl md:w-64 md:mr-5 flex flex-col justify-between"
      style={styles[variant]}
    >
      <div>
        <p style={styles[variant].title} className="font-semibold">
          {title}
        </p>
        <p style={styles[variant].subtitle} className="font-semibold">
          {subtitle}
        </p>
      </div>
      <div>
        {prize && (
          <div>
            <h2 className="text-6xl text-[#FDFDFC]">${prize}</h2>
            <p className="text-base text-[#FDFDFC] my-3 font-semibold">
              Reward
            </p>
          </div>
        )}
        <LinkButton linkTo={to} type={type} />
      </div>
    </div>
  );
}

const styles = {
  "journey-purple": {
    background: "#924EFF",
    height: "20rem",
    title: {
      color: "#FDFDFC",
    },
    subtitle: {
      color: "#b78aff",
    },
  },
  "journey-green": {
    background: "#0CDA6E",
    height: "20rem",
    title: {
      color: "#FDFDFC",
    },
    subtitle: {
      color: "#b1ffd7",
    },
  },
  job: {
    background: "#EFEFEE",
    height: "14rem",
    title: {
      color: "#1B1B18",
    },
    subtitle: {
      color: "#97928E",
    },
  },
};
