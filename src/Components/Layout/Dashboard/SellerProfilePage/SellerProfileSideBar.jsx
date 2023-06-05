import React from "react";

import avatar from "../../../../Assets/avatar.jpg";
import styles from "../../../../Styles/Style";
import { Link } from "react-router-dom";

import { productData } from "../../../../Static/data";

const SellerProfileSideBar = ({ isOwner }) => {
  const sellerInfo = JSON.parse(localStorage.getItem("sellerInfo"));
  const sellerJoinDate = JSON.parse(localStorage.getItem("sellerJoinDate"));
  const photoUrl = sellerInfo?.photoUrl;

  return (
    <>
      <div className="w-full py-5">
        <div className="flex items-center justify-center w-full">
          <img
            src={photoUrl ? photoUrl : avatar}
            alt="seller/image"
            title="Profile"
            className="800px:w-[150px] 800px:h-[150px] w-[120px] h-[120px] object-cover cursor-pointer border border-[#3957db] rounded-full"
          />
        </div>
        <h3 className="py-2 text-center font-[600] text-[20px]">
          {sellerInfo?.name}
        </h3>
        <p className="text-[#000000a6] text-justify text-[16px] flex items-center px-[10px]">
          {sellerInfo.shopDescription}
        </p>
      </div>

      <div className="p-3 h-max w-max">
        <h3 className="font-[600]">Address</h3>
        <p className="text-[#000000a6]">{sellerInfo.address}</p>
      </div>

      <div className="p-2">
        <h3 className="font-[600]">Phone Number</h3>
        <p className="text-[#000000a6]">{sellerInfo.phoneNumber}</p>
      </div>

      <div className="p-2">
        <h3 className="font-[600]">Total Products</h3>
        <p className="text-[#000000a6]">{productData.length || 0}</p>
      </div>

      <div className="p-2">
        <h3 className="font-[600]">Shop Ratings</h3>
        <p className="text-[#000000a6]">4.2</p>
      </div>

      <div className="p-2">
        <h3 className="font-[600]">Joined On</h3>
        <p className="text-[#000000a6]">{sellerJoinDate}</p>
      </div>

      {isOwner && (
        <div className="py-3 px-4">
          <Link to="/dashboard-settings">
            <button
              className={`${styles.button} !h-11 !rounded-[4px] text-white !w-full`}>
              Edit Shop
            </button>
          </Link>

          <Link to="/login-seller">
            <button
              className={`${styles.button} !bg-red-600 !h-11 !rounded-[4px] text-white !w-full`}>
              Log Out
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SellerProfileSideBar;
