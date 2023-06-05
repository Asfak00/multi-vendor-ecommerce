import React from "react";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";
import AllEvents from "../Components/Layout/Dashboard/DashboardContent/AllEvents";

const AllEventsPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={5} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <AllEvents />
        </div>
      </div>
    </>
  );
};

export default AllEventsPage;
