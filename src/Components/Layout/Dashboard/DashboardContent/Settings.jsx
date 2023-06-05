import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../../../Styles/Style";
import { AiOutlineCamera } from "react-icons/ai";

import { motion } from "framer-motion";

import avatar from "../../../../Assets/avatar.jpg";

const Settings = () => {
  // getting seller old info form local storage
  const oldInfo = JSON.parse(localStorage.getItem("sellerInfo"));

  // all uses states
  const [shopAddress, setShopAddress] = useState(
    oldInfo ? oldInfo.address : ""
  );
  const [shopDescription, setShopDescription] = useState(
    oldInfo ? oldInfo.shopDescription : ""
  );
  const [shopZipCode, setShopZipCode] = useState(
    oldInfo ? oldInfo.zipCode : null
  );
  const [name, setName] = useState(oldInfo ? oldInfo.name : "");
  const [number, setNumber] = useState(oldInfo ? oldInfo.phoneNumber : null);
  const [photoUrl, setPhotoUrl] = useState();

  // photo url
  const shopLogo = oldInfo?.photoUrl;

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  };

  const updatedData = {
    name,
    phoneNumber: number,
    zipCode: shopZipCode,
    shopDescription,
    address: shopAddress,
    photoUrl,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Your account information updated!");
    localStorage.setItem("sellerInfo", JSON.stringify(updatedData));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      className=" w-full h-[80vh] shadow overflow-y-scroll bg-white py-3 px-5"
      style={{ scrollbarWidth: "none" }}>
      <div className="flex justify-center w-full">
        <div className="relative h-[150px]">
          <img
            src={photoUrl ? photoUrl : shopLogo ? shopLogo : avatar}
            alt="profile/image"
            className="w-[150px] h-[150px] object-cover rounded-full border-[3px] border-[#3957db]"
          />

          <div className="absolute w-[30px] h-[30px] bg-[#e3e9ee] bottom-[5px] rounded-full flex items-center justify-center right-[5px] cursor-pointer">
            <input
              type="file"
              id="profile/image"
              className="hidden"
              onChange={handleImageChange}
            />

            <label htmlFor="profile/image">
              <AiOutlineCamera className="cursor-pointer" />
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full px-5">
        <form onSubmit={handleSubmit} aria-required>
          <div className="flex w-full flex-wrap pb-3">
            {/* shop name */}
            <div className="w-full 800px:w-[50%] pb-4">
              <label htmlFor="name" className="block pb-2">
                Shop Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${styles.input} py-2 !w-[95%] focus:border-[#3957db]`}
              />
            </div>

            {/* shop phone number */}
            <div className="w-full 800px:w-[50%] 800px:pb-4 pb-6">
              <label htmlFor="phoneNumber" className="block pb-2">
                Shop Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                id="number"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className={`${styles.input} py-2 !w-[95%] focus:border-[#3957db]`}
              />
            </div>

            {/* shop description */}
            <div className="w-full  800px:pb-4 pb-6">
              <label htmlFor="email" className="block pb-2">
                Shop description
              </label>
              <textarea
                name="description"
                maxLength={150}
                required
                value={shopDescription}
                onChange={(e) => setShopDescription(e.target.value)}
                className="appearance-none block w-full h-[150px] px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            </div>

            {/* shop address */}
            <div className="w-full 800px:w-[50%] 800px:pb-4 pb-6">
              <label htmlFor="email" className="block pb-2">
                Shop Address
              </label>
              <input
                type="text"
                name="shopAddress"
                id="shopAddress"
                required
                value={shopAddress}
                onChange={(e) => setShopAddress(e.target.value)}
                className={`${styles.input} py-2 !w-[95%] focus:border-[#3957db]`}
              />
            </div>

            {/* Shop zip code */}
            <div className="w-full 800px:w-[50%] 800px:pb-4 pb-6">
              <label htmlFor="password" className="block pb-2">
                zip code
              </label>
              <input
                type="number"
                name="zipCode"
                id="zipCode"
                required
                value={shopZipCode}
                onChange={(e) => setShopZipCode(e.target.value)}
                className={`${styles.input} py-2 !w-[95%] focus:border-[#3957db]`}
              />
            </div>

            {/* button */}
            <div
              className={`${styles.button} hover:text-white mx-auto !rounded-[5px] w-[80%] 800px:w-[50%] transition !h-11 border bg-transparent border-[#3957db] hover:bg-[#3957db]`}>
              <button type="submit">Update Shop</button>
            </div>
          </div>
          {/* toast message */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Settings;
