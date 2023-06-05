import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import { Country, State } from "country-state-city";
import styles from "../../../Styles/Style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

import { motion } from "framer-motion";

const AddNewAddress = ({ setOpen, open }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState();
  const [addressType, setAddressType] = useState("");
  const [addressId, setAddressId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const addressTypeData = [
    {
      type: "Default",
    },
    {
      type: "Home",
    },
    {
      type: "Office",
    },
  ];

  useEffect(() => {
    const id = v4();
    setAddressId(id);
  }, []);

  // handle from submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const addressData = JSON.parse(localStorage.getItem("newAddressCreate"));

    if (addressData?.length >= 3) {
      toast.error("You have already 3 address items!");
    } else {
      let userAddress = JSON.parse(
        localStorage.getItem("newAddressCreate") || "[]"
      );

      let data = {
        id: addressId,
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType,
        phoneNumber,
      };

      userAddress.push(data);

      localStorage.setItem("newAddressCreate", JSON.stringify(userAddress));

      toast.success("Address created successful!");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-[#00000060] fixed top-0 left-0 z-50 flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          className="sm:w-[95%] md:w-[90%] 800px:w-[50%] h-[90vh] overflow-y-scroll bg-white rounded-md ">
          <div className="w-full flex items-end justify-end p-2">
            <RxCross1
              size={40}
              className="cursor-pointer p-2 hover:bg-[#0000001b] transition rounded-full"
              onClick={() => setOpen(false)}
            />
          </div>

          <h5 className="text-[30px] font-Poppins text-center">
            Add New Address
          </h5>

          {/* create new address form */}
          <form
            className="px-4 py-4 w-full"
            onSubmit={handleOnSubmit}
            aria-required>
            {/* choose country */}
            <div className="w-full">
              <label className="pb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 block rounded-[5px] border mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}>
                <option
                  value="Select your country"
                  className="w-full overflow-hidden">
                  Select your country
                </option>
                {Country?.getAllCountries().map((Country) => (
                  <option
                    value={Country.isoCode}
                    key={Country.isoCode}
                    className="w-full overflow-hidden">
                    {Country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* choose city */}
            <div className="w-full mt-5">
              <label className="pb-2">
                Choose your city<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 block rounded-[5px] border mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}>
                <option value="" className="w-full overflow-hidden">
                  Choose your city
                </option>
                {State &&
                  State.getStatesOfCountry(country).map((city) => (
                    <option
                      value={city.isoCode}
                      key={city.isoCode}
                      className="w-full overflow-hidden">
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* address 1  */}
            <div className="w-full mt-5">
              <label className="pb-2">Address 1</label>
              <span className="text-red-500">*</span>
              <input
                type="text"
                value={address1}
                required
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Enter your address.."
                className="appearance-none mt-2 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* address 2  */}
            <div className="w-full mt-5">
              <label className="pb-2">Address 2</label>
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Enter your address.."
                className="appearance-none mt-2 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* zip code  */}
            <div className="w-full mt-5">
              <label className="pb-2">Zip Code</label>
              <span className="text-red-500">*</span>
              <input
                type="number"
                value={zipCode}
                required
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter your zip code.."
                className="appearance-none mt-2 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Phone number  */}
            <div className="w-full mt-5">
              <label className="pb-2">Phone Number</label>
              <span className="text-red-500">*</span>
              <input
                type="number"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number.."
                className="appearance-none mt-2 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* choose address type */}
            <div className="w-full mt-5">
              <label className="pb-2">
                Address Type <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 block rounded-[5px] border mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={addressType}
                required
                onChange={(e) => setAddressType(e.target.value)}>
                <option
                  value="Choose your address type"
                  className="w-full overflow-hidden">
                  Choose your address type
                </option>
                {addressTypeData?.map((address) => (
                  <option
                    value={address.type}
                    key={address.type}
                    className="w-full overflow-hidden">
                    {address.type}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full mt-6 flex items-center justify-center">
              <input
                type="submit"
                value="Submit"
                className={`${styles.button} !w-full font-semibold !rounded-[4px] !-h-11 !text-white border border-blue-400 !bg-[#025cb6] active:scale-95 transition duration-300`}
              />
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
        </motion.div>
      </div>
    </>
  );
};

export default AddNewAddress;
