import React, { useState } from "react";
import styles from "../../Styles/Style";
import { HiMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../../Redux/CartAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSingle = ({ data, quantityChangeHanlder }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(data.qty || 1);

  const totalPrice = data.discount_price * value;

  // increment function for increment button
  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateData = { ...data, qty: value + 1 };
      quantityChangeHanlder(updateData);
    }
  };

  // decrement function for decrement button
  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHanlder(updateData);
  };

  // cross icon handler
  const handleCrossIcon = (data) => {
    dispatch(removeFromCart(data));
  };

  return (
    <div className="border-b p-4">
      <div className="w-full items-center flex">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] cursor-pointer ${styles.noramlFlex} justify-center mb-1`}
            onClick={() => increment(data)}>
            <HiPlus size={18} color="#fff" />
          </div>

          <span className="pl-[10px] select-none">{data.qty}</span>

          <div
            className="bg-[#a7abb148] rounded-full w-[25px] h-[25px] flex items-center cursor-pointer justify-center mt-1"
            onClick={() => decrement(data)}>
            <HiMinus size={18} color="#7d879c" />
          </div>
        </div>

        <div className="select-none">
          <img
            src={data.image_Url[0].url}
            alt="product/image"
            className="w-[80px] h-[80px] ml-4 object-contain"
          />
        </div>
        <div className="pl-5 select-none">
          <h1>{data.name}</h1>
          <h4 className="text-[#00000082] font-[400] text-[15px]">
            {data.discount_price} * {value}
          </h4>

          <h4 className="font-[600] font-Roboto text-[16px] pt-1 text-[#d02222]">
            US${totalPrice}
          </h4>
        </div>

        <RxCross1
          onClick={() => handleCrossIcon(data)}
          size={25}
          className="cursor-pointer"
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
    </div>
  );
};

export default CartSingle;
