import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { productData } from "../../../../Static/data";
import styles from "../../../../Styles/Style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const AddNewCuponCode = ({ setOpenCuponCodeWindow }) => {
  const [name, setName] = useState("");
  const [discountParcentenge, setDiscountParcentenge] = useState();
  const [minAmount, setMinAmount] = useState();
  const [maxAmount, setMaxAmount] = useState();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [couponCodeId, setCouponCodeId] = useState("");

  const navigate = useNavigate();

  const couponCreateSuccesful = () => {
    toast.success("Coupon Successfully Created");
  };

  // coup0n code id
  useEffect(() => {
    const id = v4();
    setCouponCodeId(id);
  }, []);

  const createNewCouponCode = {
    name,
    discountParcentenge,
    minAmount,
    maxAmount,
    selectedProduct,
    couponCodeId,
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // set the data to local storage
    localStorage.setItem(
      "createNewCouponCode",
      JSON.stringify(createNewCouponCode)
    );

    couponCreateSuccesful();
    window.location.reload(true);
    navigate("/dashboard-coupons");
  };

  return (
    <>
      <div className="w-full h-screen bg-[#00000060] fixed top-0 left-0 z-50 flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          className="sm:w-[95%] md:w-[90%] 800px:w-[50%] h-[90vh] overflow-y-scroll bg-white rounded-md ">
          <div className="flex items-center justify-end p-2">
            <RxCross1
              size={40}
              className="cursor-pointer p-2 hover:bg-[#0000001b] transition rounded-full"
              onClick={() => setOpenCuponCodeWindow(false)}
            />
          </div>

          <h5 className="text-[30px] font-Poppins text-center">
            Create Coupon Code
          </h5>

          {/* create coupon code form */}
          <form className="px-4 py-4 w-full" onSubmit={handleOnSubmit}>
            {/* product name option */}
            <div className="w-full">
              <label className="pb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your coupon code name.."
              />
            </div>

            {/* coupon code percentage  */}
            <div className="w-full mt-5">
              <label className="pb-2">Discount Percentage</label>
              <span className="text-red-500">*</span>
              <input
                type="number"
                value={discountParcentenge}
                required
                onChange={(e) => setDiscountParcentenge(e.target.value)}
                placeholder="Enter your discount percentage.."
                className="appearance-none mt-2 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* minimum discount */}
            <div className="w-full mt-5">
              <label className="pb-2">Min Amount</label>
              <input
                type="number"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your minimum amount.."
              />
            </div>

            {/* Maximum amount */}
            <div className="w-full mt-5">
              <label className="pb-2">Max Amount</label>
              <input
                type="number"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your maximum amount.."
              />
            </div>

            {/* choose product option */}
            <div className="w-full">
              <label className="pb-2">
                Selected Product <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 block rounded-[5px] border mt-2"
                value={selectedProduct}
                required
                onChange={(e) => setSelectedProduct(e.target.value)}>
                <option
                  value="Choose a category"
                  className="w-full overflow-hidden">
                  Choose selected product
                </option>
                {productData?.map((product, index) => (
                  <option
                    value={product.name}
                    key={index}
                    className="w-full overflow-hidden">
                    {product.name.slice(0, 50) + "..."}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full mt-6 flex items-center justify-center">
              <input
                type="submit"
                value="Create Coupon"
                className={`${styles.button} !w-full font-semibold !rounded-[4px] !-h-11 !text-white border border-blue-400 !bg-[#025cb6] active:scale-95 transition duration-300`}
              />
            </div>
          </form>
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
      </div>
    </>
  );
};

export default AddNewCuponCode;
