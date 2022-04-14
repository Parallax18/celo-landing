import React, { useState, useEffect } from "react";
import EventComponent from "../components/Event";

const data = [
  {
    date: "2 May",
    title: "Intro to  Blockchain Development",
    text: "This workshop will introduce you to blockchain technology and show you how to build your first blockchain application.",
    startTime: "7:00",
    endTime: "8:30",
    eventLocation: "Online event",
  },
  {
    date: "17 May",
    title: "Intro to Celo Development",
    text: "This workshop will introduce you to blockchain technology and show you how to build your first decentralised application on NEAR blockchain",
    startTime: "7:00",
    endTime: "8:30",
    eventLocation: "Online event",
  },
];

export default function Agenda() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://celo-landing-backend.herokuapp.com/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data.data))
      .then(() => console.log(events));
  }, []);

  return (
    <section
      id="agenda"
      className="px-5 py-16 md:py-5 md:border-none border-b border-b-black"
    >
      <div className="mb-5 md:mb-0">
        <h3 className="font-semibold text-lg">Agenda</h3>
        <h3 className="font-semibold text-lg text-[#97928E]">
          Upcoming opportunities
        </h3>
      </div>
      {events &&
        events.map(({ attributes }, index) => (
          <EventComponent
            key={index}
            date={attributes.date}
            title={attributes.title}
            text={attributes.about}
            startTime={attributes.startTime}
            endTime={attributes.endTime}
            eventLocation={attributes.location}
          />
        ))}
    </section>
  );
}
