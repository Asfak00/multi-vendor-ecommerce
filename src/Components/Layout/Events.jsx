import React from "react";
import styles from "../../Styles/Style";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>

      <div className="grid w-full">
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
