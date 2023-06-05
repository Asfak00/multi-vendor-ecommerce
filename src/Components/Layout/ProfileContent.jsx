import React from "react";

import Profile from "./ProfileContent/Profile";
import Order from "./ProfileContent/Order";
import Refund from "./ProfileContent/Refund";
import TrackOrder from "./ProfileContent/TrackOrder";
import ChangePassword from "./ProfileContent/ChangePassword";
import Address from "./ProfileContent/Address";

const ProfileContent = ({ active, setViewProfile }) => {
  // get the address data from local storage
  const addresses = JSON.parse(localStorage.getItem("newAddressCreate"));

  return (
    <div className="w-full">
      {active === 1 && <Profile setViewProfile={setViewProfile} />}
      {active === 2 && <Order />}
      {active === 3 && <Refund />}
      {active === 5 && <TrackOrder />}
      {active === 6 && <ChangePassword />}
      {active === 7 && <Address addresses={addresses} />}
    </div>
  );
};

export default ProfileContent;
