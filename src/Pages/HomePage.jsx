import React from "react";
import Header from "../Components/Layout/Header";
import Hero from "../Components/Layout/Hero";
import Categories from "../Components/Layout/Categories";
import BestDeals from "../Components/Layout/BestDeals";
import FeaturedProduct from "../Components/Layout/FeaturedProduct";
import Events from "../Components/Layout/Events";
import Sponsored from "../Components/Layout/Sponsored";
import Footer from "../Components/Layout/Footer";

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.5 }}>
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;
