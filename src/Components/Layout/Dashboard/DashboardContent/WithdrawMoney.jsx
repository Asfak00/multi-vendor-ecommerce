import React from "react";

import Styles from "../../../../Styles/Style";

import { motion } from "framer-motion";

const WithdrawMoney = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      className="w-full 800px:w-[70%] mx-auto bg-white h-[80vh] shadow-md">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <h5 className="font-[600] text-[20px]">Current Balance: ${500}</h5>
        <button className={`${Styles.button} !h-11 !rounded-[4px] text-white`}>
          Withdraw Now
        </button>
      </div>
    </motion.div>
  );
};

export default WithdrawMoney;
