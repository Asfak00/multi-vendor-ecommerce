import React, { useState } from "react";

import { BsCartPlus } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeFromWishlist } from "../../Redux/WishlistAction";
import { addTocart } from "../../Redux/CartAction";
import { useDispatch, useSelector } from "react-redux";

const WishlistSingle = ({ data, setOpenWishlist }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [value, setValue] = useState(1);

  const totalPrice = data.discount_price * value;

  // cross icon handler
  const handleCrossIcon = (data) => {
    dispatch(removeFromWishlist(data));
  };

  // handle add to cart
  const handleAddToCart = (id) => {
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

  return (
    <div className="border-b p-4">
      <div className="w-full items-center flex">
        <RxCross1
          className="cursor-pointer"
          size={30}
          onClick={() => handleCrossIcon(data)}
        />
        <img
          src={data.image_Url[0].url}
          alt="product/image"
          className="w-[80px] h-[80px] ml-4 object-contain"
        />

        <div className="pl-2">
          <h1>{data.name}</h1>

          <h4 className="font-[600] font-Roboto text-[16px] pt-1 text-[#d02222]">
            US${totalPrice}
          </h4>
        </div>

        <div className="ml-10">
          <BsCartPlus
            size={20}
            title="Add to cart"
            className="cursor-pointer"
            onClick={() => handleAddToCart(data.id)}
          />
        </div>
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

export default WishlistSingle;
