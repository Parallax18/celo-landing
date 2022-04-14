import React from "react";

export default function SectionHeader({ title, isStroked, isWhite }) {
  return (
    <h4
      className={`text-3xl md:text-8xl font-bold ${isWhite && "text-white"}`}
      style={isStroked && { ...styles.stroked }}
    >
      {title}
    </h4>
  );
}

const styles = {
  stroked: {
    color: "white",
    "-webkit-text-fill-color":
      "white" /* Will override color (regardless of order) */,
    "-webkit-text-stroke-width": "1px",
    "-webkit-text-stroke-color": "black",
  },
};
