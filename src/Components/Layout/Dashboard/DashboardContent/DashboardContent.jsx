import React from "react";
import MainDashboard from "./MainDashboard";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";
import CreateProduct from "./CreateProduct";
import AllEvents from "./AllEvents";
import CreateEvent from "./CreateEvent";
import WithdrawMoney from "./WithdrawMoney";
import ShopInbox from "./ShopInbox";
import DiscuntCodes from "./DiscuntCodes";
import Settings from "./Settings";

const DashboardContent = ({ active }) => {
  return (
    <div className="w-full p-8">
      {active === 1 && <MainDashboard />}
      {active === 2 && <AllOrders />}
      {active === 3 && <AllProducts />}
      {active === 4 && <CreateProduct />}

      {active === 6 && <CreateEvent />}
      {active === 7 && <WithdrawMoney />}
      {active === 8 && <ShopInbox />}
      {active === 9 && <DiscuntCodes />}
      {active === 10 && <Settings />}
    </div>
  );
};

export default DashboardContent;
