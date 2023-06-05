import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import styles from "../../Styles/Style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTocart } from "../../Redux/CartAction";
import { addToWishlist, removeFromWishlist } from "../../Redux/WishlistAction";

import { motion } from "framer-motion";

const ProductDetailsCart = ({ data, setOpen }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  console.log(data);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // add to cart handler
  const addToCartHandler = (id) => {
    const isItemExists = cart?.find((item) => item.id === id);
    if (isItemExists) {
      toast.error("Item already in exist");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((item) => item.id === data.id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const handleWishlistRemoveItem = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const handleWishlistAddItem = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#00000030] flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500 }}
            className="w-[90%] 800px:w-[60%] h-[90vh] 800px:h-[75vh] rounded-md p-4 relative shadow-sm overflow-y-scroll bg-white">
            <RxCross1
              size={40}
              color="#333"
              className="absolute top-1 right-1 cursor-pointer p-2 hover:bg-gray-200 hover:text-gray-50 rounded-full"
              onClick={() => setOpen(false)}
            />

            <div className="block w-full 800px:flex">
              <div className="800px:w-[50%] w-full">
                <img src={data.image_Url[0].url} alt="product/image" />
                <div className="flex items-center mt-5">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt="shopAvatar/image"
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h3 className="text-[15px]">({data.rating}) ratings</h3>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-black !h-11 mt-6 !rounded-[4px]`}>
                  <span className="text-white flex items-center">
                    Send message <AiOutlineMessage className="ml-2" />
                  </span>
                </div>
                <h5 className="mt-5 text-[16px] text-red-500">
                  ({data.total_sell}) Sold Out
                </h5>
              </div>

              <div className="w-full 800px:w-[50%] pt-8 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.name}
                </h1>
                <p className="mt-3">{data.description}</p>

                <div className="flex mt-5">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}
                  </h4>

                  <h3 className={`${styles.price}`}>
                    {data.price ? "$" + data.price : null}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <button
                      className="bg-gradient-to-b from-emerald-600 to-emerald-400 text-white px-5 py-2 mt-8 text-[1rem] "
                      onClick={decrementCount}>
                      -
                    </button>

                    <span className="px-5 py-2 bg-gray-200 text-gray-800">
                      {count}
                    </span>

                    <button
                      className="bg-gradient-to-b from-emerald-600 to-emerald-400 text-white px-5 py-2 mt-8 text-[1rem] "
                      onClick={incrementCount}>
                      +
                    </button>
                  </div>

                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        color={click ? "red" : "#333"}
                        onClick={() => handleWishlistRemoveItem(data)}
                        className="cursor-pointer"
                        title="Remove to wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        color="#333"
                        onClick={() => handleWishlistAddItem(data)}
                        className=" cursor-pointer"
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>

                <div className="mt-6 select-none">
                  <button
                    className={`${styles.button} text-white !h-11 !rounded-[4px]`}
                    onClick={() => addToCartHandler(data.id)}>
                    Add to cart <AiOutlineShoppingCart className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
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
      ) : null}
    </div>
  );
};

export default ProductDetailsCart;
