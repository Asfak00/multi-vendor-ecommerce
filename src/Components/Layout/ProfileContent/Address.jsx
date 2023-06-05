import React, { useState } from "react";
import styles from "../../../Styles/Style";
import { AiOutlineDelete } from "react-icons/ai";

import { motion } from "framer-motion";

import AddNewAddress from "./AddNewAddress";

const Address = ({ addresses }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      className="w-full px-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] 800px:text-[25px] font-[600] pb-2 text-[#000000ba]">
          Address
        </h1>

        <div
          className={`${styles.button} 800px:w-[20%] w-[40%] text-white hover:!text-black !rounded-[5px] transition !h-10 800px:!h-11 border  hover:!bg-transparent border-[#3957db] !bg-[#3957db]`}
          onClick={() => setOpen(true)}>
          <button>Add New</button>
        </div>
      </div>
      <br />
      {addresses &&
        addresses.map((address) => (
          <div className="flex h-auto 800px:h-[70px] bg-white rounded-[4px] items-center justify-between w-full shadow-sm pr-10 px-3 mt-3">
            <div className="flex items-center">
              <div className="pl-5 font-[600] text-[12px] 800px:text-base">
                {address?.addressType}
              </div>
            </div>
            <div className="flex items-center pl-8">
              <h6 className="text-[10px] 800px:text-base">
                {address?.address1} {address?.address2}
              </h6>
            </div>{" "}
            <div className="flex items-center pl-8">
              <h6 className="text-[12px] 800px:text-base">{address?.number}</h6>
            </div>
            <div className="min-w-[10%] pl-8 flex items-center justify-between ">
              <AiOutlineDelete
                size={20}
                className="cursor-pointer  hover:text-[#3957db] transition-colors"
              />
            </div>
          </div>
        ))}
      {open && <AddNewAddress setOpen={setOpen} open={open} />}
    </motion.div>
  );
};

export default Address;
