import React, { useEffect } from "react";
import Header from "../Components/Layout/Header";

import EventCard from "../Components/Layout/EventCard";
import Footer from "../Components/Layout/Footer";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header activeHeading={4} />

      <EventCard active={true} />

      <Footer />
    </>
  );
};

export default EventsPage;
