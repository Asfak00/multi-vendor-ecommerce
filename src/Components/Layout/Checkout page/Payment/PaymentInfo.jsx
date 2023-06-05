import { useState } from "react";
import styles from "../../../../Styles/Style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentInfo = ({ setOpen }) => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(1);

  // cash on delivery
  const cashOnDeliveryHandler = (e) => {
    e.preventDefault();
    navigate("/order/success");
    localStorage.setItem("cartItems", JSON.stringify([]));
    window.location.reload(true);
  };

  // pay with debit or credit card
  const paymentHandler = (e) => {
    e.preventDefault();
    navigate("/order/success");
    localStorage.setItem("cartItems", JSON.stringify([]));
    window.location.reload(true);
  };

  // Pay with paypal
  const handlePayNow = (e) => {
    e.preventDefault();
    navigate("/order/success");
    localStorage.setItem("cartItems", JSON.stringify([]));
    window.location.reload(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.6 }}
      className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
      {/* select buttons */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(1)}>
            {select === 1 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Pay with Debit/credit card
          </h4>
        </div>

        {/* pay with card */}
        {select === 1 ? (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full flex border-b">
            <form className="w-full" onSubmit={paymentHandler}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Name On Card</label>
                  <input
                    required
                    placeholder="Enter name"
                    className={`${styles.input}  pl-2 !w-[95%] text-[#444]  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Exp Date</label>
                  <input
                    required
                    placeholder="Enter card expire date"
                    className={`${styles.input}  pl-2 !w-[95%] text-[#444]  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Card Number</label>
                  <input
                    required
                    placeholder="Enter card number"
                    className={`${styles.input}  pl-2 !w-[95%] text-[#444]  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">CVV</label>
                  <input
                    required
                    placeholder="Enter card verification value"
                    className={`${styles.input} pl-2 !w-[95%] text-[#444]  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className={`${styles.button} !bg-[#f63b60] text-[#fff] !h-[45px] !rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              />
            </form>
          </motion.div>
        ) : null}
      </div>

      <br />
      {/* paypal payment */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(2)}>
            {select === 2 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Pay with Paypal
          </h4>
        </div>

        {/* pay with payement */}
        {select === 2 ? (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full flex border-b"
            onClick={handlePayNow}>
            <div
              className={`${styles.button} !bg-[#f63b60] text-white !h-[45px] !rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              onClick={() => setOpen(true)}>
              Pay Now
            </div>
          </motion.div>
        ) : null}
      </div>

      <br />
      {/* cash on delivery */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(3)}>
            {select === 3 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Cash on Delivery
          </h4>
        </div>

        {/* cash on delivery */}
        {select === 3 ? (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full flex">
            <form className="w-full" onSubmit={cashOnDeliveryHandler}>
              <input
                type="submit"
                value="Confirm"
                className={`${styles.button} !bg-[#f63b60] text-[#fff] !h-[45px] !rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              />
            </form>
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default PaymentInfo;
