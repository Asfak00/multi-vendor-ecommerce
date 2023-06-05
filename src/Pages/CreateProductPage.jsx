import React from "react";

import CreateProduct from "../Components/Layout/Dashboard/DashboardContent/CreateProduct";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const CreateProductPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={4} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <CreateProduct />
        </div>
      </div>
    </>
  );
};

export default CreateProductPage;
