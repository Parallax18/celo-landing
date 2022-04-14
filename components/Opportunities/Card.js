import React from "react";
import SectionHeader from "../SectionHeader";

export default function OpportunityComponent({ numberOf, text }) {
  return (
    <div className="mt-8 w-full">
      <SectionHeader title={numberOf} />
      <p className="text-2xl mt-2">{text}</p>
    </div>
  );
}
