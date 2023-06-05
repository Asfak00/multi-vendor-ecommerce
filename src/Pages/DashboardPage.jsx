import React, { useState } from "react";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";
import DashboardContent from "../Components/Layout/Dashboard/DashboardContent/DashboardContent";

const DashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[70px] 800px:w-[335px]">
          <DashboardSidebar active={active} setActive={setActive} />
        </div>

        <DashboardContent active={active} />
      </div>
    </>
  );
};

export default DashboardPage;
