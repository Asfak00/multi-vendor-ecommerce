import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/logo.png";
import avatar from "../../../Assets/avatar.jpg";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const sellerInfo = JSON.parse(localStorage.getItem("sellerInfo"));
  const photoUrl = sellerInfo?.photoUrl;
  const seller_id = JSON.parse(localStorage.getItem("seller_id"));

  return (
    <>
      <div className="w-full h-[80px] bg-white shadow-md sticky top-0 left-0 flex items-center justify-between px-4 z-50">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-[150px] h-[120px]" />
        </Link>

        <div className="flex items-center">
          <div className="800px:flex hidden items-center mr-4 ">
            <Link to="/dashboard-cupons">
              <AiOutlineGift
                size={30}
                title="Cupon"
                className="mx-2 cursor-pointer"
                color="#4c4c4c"
              />
            </Link>
          </div>

          <div className="800px:flex hidden  items-center mr-4">
            <Link to="/dashboard-events">
              <MdOutlineLocalOffer
                size={30}
                title="Event"
                className="mx-2 cursor-pointer"
                color="#4c4c4c"
              />
            </Link>
          </div>

          <div className="800px:flex hidden  items-center mr-4">
            <Link to="/dashboard-products">
              <FiShoppingBag
                size={30}
                title="Product"
                className="mx-2 cursor-pointer"
                color="#4c4c4c"
              />
            </Link>
          </div>

          <div className="800px:flex hidden  items-center mr-4">
            <Link to="/dashboard-orders">
              <FiPackage
                size={30}
                title="Order"
                className="mx-2 cursor-pointer"
                color="#4c4c4c"
              />
            </Link>
          </div>

          <div className="800px:flex hidden  items-center mr-4">
            <Link to="/dashboard-messages">
              <BiMessageSquareDetail
                size={30}
                title="Message"
                className="mx-2 cursor-pointer"
                color="#4c4c4c"
              />
            </Link>
          </div>

          <Link to={`/shop/${seller_id}`}>
            <img
              src={photoUrl ? photoUrl : avatar}
              alt="seller/image"
              title="Profile"
              className="w-[50px] h-[50px] object-cover cursor-pointer border border-[#3957db] rounded-full mr-3"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
