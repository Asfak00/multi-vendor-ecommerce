import React, { useEffect, useState } from "react";
import Header from "../Components/Layout/Header";
import { productData } from "../Static/data";
import Product from "../Components/Layout/Product";
import Footer from "../Components/Layout/Footer";
import styles from "../Styles/Style";

import { motion } from "framer-motion";

const BestSellingPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const d = productData?.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <>
      <Header activeHeading={2} />

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.5 }}
        className={styles.section}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0 mt-12">
          {data?.map((item, index) => (
            <Product data={item} key={index} />
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default BestSellingPage;
