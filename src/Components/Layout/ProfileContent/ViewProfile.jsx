import React from "react";

import { motion } from "framer-motion";

const ViewProfile = ({ setViewProfile }) => {
  const photoUrl = JSON.parse(localStorage.getItem("PhotoUrl"));

  return (
    <div
      className="w-screen h-screen bg-[#00000080] fixed z-50 flex items-center justify-center"
      onClick={() => setViewProfile(false)}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bg-white w-[80%] h-[80%] shadow-sm flex items-center justify-center  ">
        <img
          src={photoUrl}
          alt="profile/image"
          className="object-contain w-[90%] h-[90%]"
        />
      </motion.div>
    </div>
  );
};

export default ViewProfile;
