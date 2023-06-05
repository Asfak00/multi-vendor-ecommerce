import React from "react";

import WithdrawMoney from "../Components/Layout/Dashboard/DashboardContent/WithdrawMoney";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const WithdrawMoneyPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full">
        <div className="w-[80px] 800px:w-[335px]">
          <DashboardSidebar active={7} />
        </div>

        <div className="w-full mt-10 px-5 ">
          <WithdrawMoney />
        </div>
      </div>
    </>
  );
};

export default WithdrawMoneyPage;
