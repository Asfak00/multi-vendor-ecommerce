import React, { useEffect, useState } from "react";

// react libraries
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react icons
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

// manually imported components
import ProductDetailsCart from "./ProductDetailsCart";
import styles from "../../Styles/Style";
import { removeFromWishlist, addToWishlist } from "../../Redux/WishlistAction";
import { addTocart } from "../../Redux/CartAction";

const Product = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

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

  // handle add to cart item
  const handleAddToCart = (id) => {
    const isItemExists = cart.find((item) => item.id === id);
    if (isItemExists) {
      toast.error("Item already in exist");
    } else {
      dispatch(addTocart(data));
      toast.success("Item added to cart");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm w-full h-[330px] relative p-3 cursor-pointer">
      <div className="flex justify-end"></div>

      <Link to={`/product/${product_name}`}>
        <img
          src={data.image_Url[0].url}
          alt="product/image"
          className="w-full object-contain select-none h-[130px]"
        />
      </Link>

      <Link to={`/`}>
        <h5 className={`${styles.shop_name} select-none py-3`}>
          {data.shop.name}
        </h5>
      </Link>

      <Link to={`/product/${product_name}`}>
        <h4 className="pb-3 font-[500]">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>

        <div className="flex select-none">
          <AiFillStar
            size={20}
            color="#f6Ba00"
            className="mr-2 cursor-pointer"
          />
          <AiFillStar
            size={20}
            color="#f6Ba00"
            className="mr-2 cursor-pointer"
          />
          <AiFillStar
            size={20}
            color="#f6Ba00"
            className="mr-2 cursor-pointer"
          />
          <AiFillStar
            size={20}
            color="#f6Ba00"
            className="mr-2 cursor-pointer"
          />
          <AiOutlineStar
            size={20}
            color="#f6Ba00"
            className="mr-2 cursor-pointer"
          />
        </div>
      </Link>

      <div className="py-2 flex items-center select-none justify-between">
        <div className="flex">
          <h5 className={`${styles.productDiscountPrice}`}>
            ${data.price === 0 ? data.price : data.discount_price}
          </h5>

          <h4 className={`${styles.price}`}>
            {data.price ? "$" + data.price : null}
          </h4>
        </div>
        <span className="font-[400] text-[17px] text-[#68d384]">
          {data.total_sell} sold
        </span>
      </div>

      {/* side panel */}
      <div>
        {click ? (
          <AiFillHeart
            size={22}
            color={click ? "red" : "#333"}
            onClick={() => handleWishlistRemoveItem(data)}
            className="absolute cursor-pointer top-8 right-3"
            title="Remove to wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            color="#333"
            onClick={() => handleWishlistAddItem(data)}
            className="absolute top-8 right-3"
            title="Add to wishlist"
          />
        )}

        <AiOutlineEye
          size={22}
          color="#333"
          className="absolute top-16 right-3 cursor-pointer"
          onClick={() => setOpen(!open)}
          title="Quick view"
        />

        <Link>
          <AiOutlineShoppingCart
            size={25}
            color="#333"
            className="absolute top-24 right-3 cursor-pointer"
            title="Add to cart"
            onClick={() => handleAddToCart(data?.id)}
          />
        </Link>

        {open ? <ProductDetailsCart setOpen={setOpen} data={data} /> : null}
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

export default Product;
