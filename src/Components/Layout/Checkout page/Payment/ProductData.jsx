import React from "react";

import { motion } from "framer-motion";

const ProductData = ({ orderData }) => {
  const shipping = orderData?.shipping?.toFixed(2);

  console.log(orderData);

  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">$2000</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
        <h5 className="text-[18px] font-[600]">$10</h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">-</h5>
      </div>
      <h5 className="text-[18px] font-[600] text-end pt-3">$2010</h5>
      <br />
    </motion.div>
  );
};

export default ProductData;
