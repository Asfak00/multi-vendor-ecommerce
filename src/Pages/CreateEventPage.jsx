import React from "react";

import CreateEvent from "../Components/Layout/Dashboard/DashboardContent/CreateEvent";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const CreateEventPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={6} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <CreateEvent />
        </div>
      </div>
    </>
  );
};

export default CreateEventPage;
