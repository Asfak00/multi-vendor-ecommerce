import React, { useEffect, useState } from "react";
import styles from "../../Styles/Style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetailsInfo from "./ProductDetailsInfo.jsx";
import { addToWishlist, removeFromWishlist } from "../../Redux/WishlistAction";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../Redux/CartAction";
import { toast, ToastContainer } from "react-toastify";

import { motion } from "framer-motion";

// hove to zoom image, react magnifiy library
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = ({ data }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);
  const [click, setClick] = useState(false);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // add to cart handler
  const addToCartHandler = (id) => {
    const isItemExists = cart?.find((item) => item?.id === id);
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
    if (wishlist && wishlist.find((item) => item?.id === data?.id)) {
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
        <div className={` ${styles.section} w-[90%] 800px:w-[80%] `}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                  className="hidden 800px:block">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "product image",
                        isFluidWidth: `800px:${true} ${false}`,
                        src: data?.image_Url[select]?.url,
                      },
                      largeImage: {
                        src: data?.image_Url[select]?.url,
                        width: 450,
                        height: 800,
                      },
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                  className="800px:hidden mx-auto w-full">
                  <img
                    src={data?.image_Url[select]?.url}
                    alt="product/image"
                    className="w-[100%]"
                  />
                </motion.div>
                <div className="w-full flex gap-5 mt-5">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={`${
                      select === 0 ? "border" : null
                    } cursor-pointer`}>
                    <img
                      src={data?.image_Url[0].url}
                      alt="product/image"
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`${
                      select === 1 ? "border" : null
                    } cursor-pointer`}>
                    <img
                      src={data?.image_Url[1].url}
                      alt="product/image"
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full 800px:w-[50%] mt-0 800px:mt-9 ml-0 800px:ml-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p className="mt-2">{data.description}</p>
                <div className="flex mt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    ${data.discount_price}
                  </h4>

                  <h3 className={`${styles.price}`}>
                    {data.price ? "$" + data.price : null}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <button
                      className="bg-gradient-to-b from-emerald-600 to-emerald-400 text-white px-5 py-2 mt-8 text-[1rem] "
                      onClick={decrementCount}
                      title="Decrement">
                      -
                    </button>

                    <span className="px-5 py-2 bg-gray-200 text-gray-800">
                      {count}
                    </span>

                    <button
                      className="bg-gradient-to-b from-emerald-600 to-emerald-400 text-white px-5 py-2 mt-8 text-[1rem] "
                      onClick={incrementCount}
                      title="Increment">
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
                    onClick={() => addToCartHandler(data?.id)}>
                    Add to cart <AiOutlineShoppingCart className="ml-2" />
                  </button>
                </div>

                <div className="flex items-center mt-12">
                  <div className="flex items-center">
                    <img
                      src={data.shop.shop_avatar.url}
                      alt="shopAvatar/image"
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                    <div>
                      <h3 className={`${styles.shop_name}`}>
                        {data.shop.name}
                      </h3>
                      <h3 className="text-[15px]">({data.rating}) ratings</h3>
                    </div>
                  </div>

                  <div>
                    <button
                      className={`${styles.button} bg-[#6443d1] ml-8 !rounded !h-11 text-white`}>
                      Send Message{" "}
                      <AiOutlineMessage className="cursor-pointer ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
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

          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
