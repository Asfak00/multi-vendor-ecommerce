import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verified, setVerified] = useState(true);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  // get the user email fro localstorage
  const userEmailFromLocalstorage = JSON.parse(localStorage.getItem("email"));

  // handle the email input
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === userEmailFromLocalstorage) {
      setEmail(inputValue);
      setVerified(false);
    } else {
      setVerified(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      toast.success("Password update successful!");

      // set the reset data in local storage
      localStorage.setItem("password", JSON.stringify(newPassword));
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.error("Please enter same password!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Forget your password
        </h2>
      </div>
      <div className="mt-8 mx-auto w-[90%] 800px:w-[45%]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex items-center justify-center">
            <img
              src="https://duzycfafl38re.cloudfront.net/Website/Images/password15112022125910.gif"
              alt="gif/image"
              className="w-[100px] h-[100px]"
            />
          </div>

          <form className="space-y-6 mt-5" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="text"
                  autoComplete="email"
                  required
                  onChange={handleEmailChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* new password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  disabled={verified ? true : false}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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

            {/* confirm password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible2 ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  disabled={verified ? true : false}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible2 ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible2(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible2(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={verified ? true : false}
                className={`group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                  verified ? "bg-gray-500" : "bg-blue-600"
                } `}>
                Change Password
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
