import React, { useState } from "react";
import styles from "../../../Styles/Style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion";

const ChangePassword = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // getting the old email & password from local storage
  const oldPasswordFromLocalstorage = JSON.parse(
    localStorage.getItem("password")
  );

  // handle submit form
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (oldPassword === oldPasswordFromLocalstorage) {
      if (newPassword === confirmPassword) {
        localStorage.setItem("password", JSON.stringify(newPassword));
        toast.success("Your password updated");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error("Please inter the correct confirm password!");
      }
    } else {
      toast.error("Please inter correct password!");
    }
  };

  return (
    <div className="w-full px-5">
      <h1 className="text-[18px] text-center 800px:text-[25px] font-[600] pb-2 text-[#000000ba]">
        Change Password
      </h1>

      {/* create new address form */}
      <form
        className="px-4 py-4 w-full flex items-center flex-col gap-4"
        onSubmit={handleOnSubmit}
        aria-required>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full 800px:w-[60%]">
          <label className="pb-2">Old Password</label>
          <div className="mt-1 relative">
            <input
              type={oldPasswordVisible ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {oldPasswordVisible ? (
              <AiOutlineEye
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                color="#333"
                onClick={() => setOldPasswordVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                color="#333"
                onClick={() => setOldPasswordVisible(true)}
              />
            )}
          </div>
        </motion.div>

        {/* new password  */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
          className="w-full 800px:w-[60%]">
          <label className="pb-2">New Password</label>
          <div className="mt-1 relative">
            <input
              type={newPasswordVisible ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {newPasswordVisible ? (
              <AiOutlineEye
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                color="#333"
                onClick={() => setNewPasswordVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                color="#333"
                onClick={() => setNewPasswordVisible(true)}
              />
            )}
          </div>
        </motion.div>

        {/* confirm password  */}
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -250 }}
          transition={{ duration: 0.5 }}
          className="w-full 800px:w-[60%]">
          <label className="pb-2">Confirm Password</label>
          <div className="mt-1 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {confirmPasswordVisible ? (
              <AiOutlineEye
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                color="#333"
                onClick={() => setConfirmPasswordVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                color="#333"
                onClick={() => setConfirmPasswordVisible(true)}
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -350 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -350 }}
          transition={{ duration: 0.5 }}
          className="w-full 800px:w-[60%] mt-6 flex items-center justify-center">
          <input
            type="submit"
            value="Submit"
            className={`${styles.button} !w-full font-semibold !rounded-[4px] !-h-9 !text-white border border-blue-400 !bg-[#025cb6] active:scale-95 transition duration-300`}
          />
        </motion.div>
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
  );
};

export default ChangePassword;
