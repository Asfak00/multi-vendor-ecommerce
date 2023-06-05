import React, { useState } from "react";
import Header from "../Components/Layout/Header";
import ProfileSideBar from "../Components/Layout/ProfileSideBar";
import ProfileContent from "../Components/Layout/ProfileContent";
import styles from "../Styles/Style";
import ViewProfile from "../Components/Layout/ProfileContent/ViewProfile";

import { motion } from "framer-motion";

const ProfilePage = () => {
  const [active, setActive] = useState(1);
  const [viewProfile, setViewProfile] = useState(false);

  return (
    <>
      {viewProfile && <ViewProfile setViewProfile={setViewProfile} />}
      <Header />
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.5 }}
        className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] flex items-center justify-center">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} setViewProfile={setViewProfile} />
      </motion.div>
    </>
  );
};

export default ProfilePage;
