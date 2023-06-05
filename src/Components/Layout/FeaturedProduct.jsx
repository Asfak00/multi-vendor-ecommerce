import React, { useEffect, useState } from "react";

import styles from "../../Styles/Style";
import { productData } from "../../Static/data";
import Product from "./Product";

const FeaturedProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);

    const firstTeen = d.slice(0, 10);

    setData(firstTeen);
  }, []);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data &&
            data.map((product, index) => (
              <Product data={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
