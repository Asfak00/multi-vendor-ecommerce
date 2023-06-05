import React, { useEffect, useState } from "react";
import { productData } from "../../Static/data";
import styles from "../../Styles/Style";

import Product from "./Product";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);

    const firstFive = d.slice(0, 5);

    setData(firstFive);
  }, []);

  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Best Deals</h1>
      </div>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {productData &&
          data.map((data, index) => <Product data={data} key={index} />)}
      </div>
    </div>
  );
};

export default BestDeals;
