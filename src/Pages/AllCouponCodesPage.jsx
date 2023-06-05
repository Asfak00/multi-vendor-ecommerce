import React from "react";

import DiscuntCodes from "../Components/Layout/Dashboard/DashboardContent/DiscuntCodes";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const AllCouponCodesPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={9} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <DiscuntCodes />
        </div>
      </div>
    </>
  );
};

export default AllCouponCodesPage;
