import React, { useEffect } from "react";
import SellerProfileSideBar from "../Components/Layout/Dashboard/SellerProfilePage/SellerProfileSideBar";
import SellerProfileData from "../Components/Layout/Dashboard/SellerProfilePage/SellerProfileData";
import styles from "../Styles/Style";

const SellerProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${styles.section} bg-[#f5f5f5]`}>
        <div className="flex justify-between flex-wrap py-10">
          <div
            className="800px:sticky top-10 left-0 overflow-y-scroll w-full 800px:w-[25%] h-[90vh] z-10 rounded-[4px] bg-white px-2"
            style={{ scrollbarWidth: "none" }}>
            <SellerProfileSideBar isOwner={true} />
          </div>
          <div className="w-full 800px:w-[72%] rounded-[4px] mt-10 800px:mt-0">
            <SellerProfileData isOwner={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProfilePage;
