import React, { useEffect, useState } from "react";
import { productData } from "../../Static/data";
import styles from "../../Styles/Style";
import Product from "../Layout/Product";

const SuggestedProduct = ({ data }) => {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    const items = productData?.filter((d) => d.category === data.category);
    setproducts(items);
  }, []);

  return (
    <div>
      {data ? (
        <div className={`${styles.section} p-4`}>
          <h2
            className={`${styles.heading} text-[25px] border-b mb-5 font-[500]`}>
            Related Products
          </h2>

          <div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0 mt-12">
            {products?.map((product, index) => (
              <Product data={product} key={index} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
