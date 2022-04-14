import React from "react";
import OpportunityCard from "./Card";
import opportunities from "./data";

export default function Opportunities() {
  return (
    <main className="w-full md:w-1/2">
      <p className="font-bold mb-5">Opportunities</p>
      {opportunities.map((item, index) => (
        <OpportunityCard
          key={index}
          numberOf={item.numberOf}
          text={item.text}
        />
      ))}
    </main>
  );
}
