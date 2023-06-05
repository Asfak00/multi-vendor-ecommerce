import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../Styles/Style";
import CartSingle from "./Layout/CartSingle";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTocart } from "../Redux/CartAction";

import { motion } from "framer-motion";

const Cart = ({ setOpenCart, openCart }) => {
  const dispatch = useDispatch();
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const { cart } = useSelector((state) => state.cart);

  const totalPrize = cart.reduce(
    (acc, item) => acc + item.qty * item.discount_price,
    0
  );

  const quantityChangeHanlder = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className={`w-full fixed h-screen left-0 top-0 z-50 bg-[#0000006b]`}>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 h-full  w-[80%] sm:w-[60%] 800px:w-[30%] flex flex-col justify-between shadow-sm bg-white overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}>
        {cart && cart.length === 0 ? (
          <div className="flex w-full h-screen justify-center items-center">
            <div className="flex fixed top-3 right-3 pr-3 pt-3 justify-end w-full">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5>Cart items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full p-4 cursor-pointer justify-end items-center">
                <RxCross1 size={20} onClick={() => setOpenCart(false)} />
              </div>

              {/* items length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-3 font-[500] text-[17px]">{cart.length}</h5>
              </div>

              {/* single cart item */}
              <br />
              <div className="w-full border-t">
                {cart?.map((item, index) => (
                  <CartSingle
                    data={item}
                    key={index}
                    quantityChangeHanlder={quantityChangeHanlder}
                  />
                ))}
              </div>
            </div>

            {/* checkout button */}
            <div className="px-3 mb-3 mt-7">
              <Link to={isAuthenticated ? "/checkout" : "/sign-up"}>
                <button className="rounded-[5px] flex items-center justify-center w-[100%] bg-[#e44343] h-[45px] text-white">
                  Checkout Now (USD${totalPrize})
                </button>
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
