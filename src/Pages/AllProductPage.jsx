import React from "react";

import AllProducts from "../Components/Layout/Dashboard/DashboardContent/AllProducts";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const AllProductPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={3} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <AllProducts />
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
