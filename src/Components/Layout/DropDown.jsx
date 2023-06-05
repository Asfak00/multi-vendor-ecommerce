import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../Styles/Style";

import { motion } from "framer-motion";

const DropDown = ({ setDropDown, categoriesData, DropDown }) => {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    navigate(`/products?category=${data.title}`);
    window.location.reload();
    setDropDown(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.4 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: -80 }}
      className=" absolute top-14 bg-white pb-4 w-[270px] rounded-b-md z-30 shadow-sm">
      {categoriesData &&
        categoriesData.map((data, index) => (
          <div
            className={`${styles.noramlFlex} hover:bg-gray-200 transition ease-linear cursor-pointer`}
            key={index}
            onClick={() => handleSubmit(data)}>
            <img
              src={data.image_Url}
              alt="product/image"
              className="w-[25px] h-[25px] object-contain ml-[10px] select-none"
            />
            <h3 className="m-3 cursor-pointer select-none">{data.title}</h3>
          </div>
        ))}
    </motion.div>
  );
};

export default DropDown;
