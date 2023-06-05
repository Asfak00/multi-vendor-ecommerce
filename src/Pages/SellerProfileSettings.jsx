import React from "react";

import Settings from "../Components/Layout/Dashboard/DashboardContent/Settings";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const SellerProfileSettings = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={10} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <Settings />
        </div>
      </div>
    </>
  );
};

export default SellerProfileSettings;
