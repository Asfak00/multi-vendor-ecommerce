import React from "react";

import ShopInbox from "../Components/Layout/Dashboard/DashboardContent/ShopInbox";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const SellerMessagePage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={8} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <ShopInbox />
        </div>
      </div>
    </>
  );
};

export default SellerMessagePage;
