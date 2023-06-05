import { React, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../../Styles/Style";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion";

const SignupNewSeller = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState();
  const [shopDescription, setShopDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState(null);
  const [sellerId, setSellerId] = useState("");

  // seller id
  useEffect(() => {
    const id = v4();
    setSellerId(id);
  }, []);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setUrl(url);
    setAvatar(file);
  };

  // get the user email from local storage
  const getSellerAuth = JSON.parse(localStorage.getItem("sellerAuth"));
  const userEmailFromLocalstorage = getSellerAuth?.email;

  // get current date when creating seller account
  const fullDate = new Date();
  const date = String(fullDate.getDate()).padStart(2, "0");
  const month = String(fullDate.getMonth() + 1).padStart(2, "0");
  const year = fullDate.getFullYear();

  const todayDate = `${date}-${month}-${year}`;

  const sellerAuth = {
    email,
    password,
  };

  const sellerInfo = {
    name,
    phoneNumber,
    address,
    shopDescription,
    zipCode,
    photoUrl: url,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email === userEmailFromLocalstorage) {
      toast.error(
        `The "${email}" already registered, Please try to different email!`
      );
    } else {
      toast.success("Your account successfully created, Now login!");

      // local storage
      localStorage.setItem("sellerAuth", JSON.stringify(sellerAuth));
      localStorage.setItem("sellerInfo", JSON.stringify(sellerInfo));
      localStorage.setItem("seller_id", JSON.stringify(sellerId));
      localStorage.setItem("sellerJoinDate", JSON.stringify(todayDate));
      localStorage.setItem("isSeller", true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a new seller
        </motion.h2>
      </div>
      <div className="mt-8 mx-auto w-[95%] 800px:w-[60%]">
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 500 }}
          transition={{ duration: 0.6 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6 800px:flex flex-wrap items-center justify-between "
            onSubmit={handleFormSubmit}>
            <div className="800px:w-[47%] mb-6 800px:mb-0">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Shop Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="800px:w-[47%]" style={{ marginTop: 0 }}>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="800px:w-[100%]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="800px:w-[100%]">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="800px:w-[47%]">
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="zipCode"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="800px:w-[47%]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div className="800px:w-[100%]  800px:mb-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700">
                Shop Description
              </label>
              <div className="mt-1 w-full h-full">
                <textarea
                  name="description"
                  maxLength={300}
                  value={shopDescription}
                  onChange={(e) => setShopDescription(e.target.value)}
                  className="appearance-none block w-full h-[100px] px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <span className="inline-block h-10 w-10 rounded-full overflow-hidden">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <RxAvatar className="w-10 h-10" />
                )}
              </span>

              <label
                htmlFor="file-input"
                className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <span>Upload file</span>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileInputChange}
                  className="sr-only"
                />
              </label>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Submit
              </button>

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
            </div>
            <div className={`${styles.noramlFlex} w-full justify-center`}>
              <h4>Already have an account?</h4>
              <Link to="/login-seller" className="text-blue-600 pl-2">
                Sign in
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupNewSeller;
