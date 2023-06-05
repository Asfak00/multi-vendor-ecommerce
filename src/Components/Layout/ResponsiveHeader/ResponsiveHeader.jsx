import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "../../../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../Styles/Style";
import Navbar from "../Navbar";
import { IoIosArrowForward } from "react-icons/io";
import avatar from "../../../Assets/avatar.jpg";
import Cart from "../../Cart";
import Wishlist from "../../Wishlist";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const ResponsiveHeader = ({
  active,
  openMenu,
  setOpenMenu,
  handleSearch,
  searchTerm,
  serachData,
  activeHeading,
  cart,
  click,
}) => {
  const { wishlist } = useSelector((state) => state.wishlist);

  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const userName = JSON.parse(localStorage.getItem("userName"));
  const photoUrl = JSON.parse(localStorage.getItem("PhotoUrl"));
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const isSeller = JSON.parse(localStorage.getItem("isSeller"));

  return (
    <>
      <div
        className={` ${
          active === true ? "fixed top-0 left-0 shadow-sm z-10" : null
        } w-[100vw] h-[60px] bg-white top-0 left-0 z-50  800px:hidden flex items-center justify-between shadow-md px-3`}>
        <div className="flex items-center justify-between w-full">
          <div>
            <BiMenuAltLeft
              size={40}
              className="cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          </div>

          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-[150px] h-[120px]" />
          </Link>

          <div
            className="relative cursor-pointer mr-[15px]"
            onClick={() => setOpenCart(true)}>
            <AiOutlineShoppingCart size={35} />
            <span className="absolute top-0 right-0 rounded-full w-4 h-4 top right m-0 p-0 font-mono text-white leading-tight text-[12px] bg-[#3bc177] text-center">
              {cart ? cart.length : "0"}
            </span>
          </div>
        </div>

        {/* responsive menu sidebar */}
        {openMenu && (
          <div className="w-full z-50 fixed top-0 left-0 bg-[#0000005e] h-full">
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 1 }}
              exit={{ opacity: 0, x: -400 }}
              transition={{ duration: 0.4 }}
              className="fixed w-[80%] sm:w-[60%] overflow-y-scroll h-screen top-0 left-0 bg-white shadow-md  z-50 pb-10">
              <div className="w-full flex items-center justify-between px-3 pt-5 mb-2">
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenWishlist(true) || setOpenMenu(false)}>
                  <AiOutlineHeart size={30} />
                  <span className="absolute top-0 right-0 rounded-full w-4 h-4 top right m-0 p-0 font-mono text-white leading-tight text-[12px] bg-[#3bc177] text-center">
                    {wishlist ? wishlist.length : "0"}
                  </span>
                </div>
                <RxCross1
                  size={30}
                  onClick={() => setOpenMenu(false)}
                  className="cursor-pointer"
                />
              </div>

              <div className={`${styles.section} relative w-[90%] mt-5`}>
                <input
                  type="text"
                  className=" w-full py-2 rounded border border-[#3957db] focus:outline-none pl-2"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search product..."
                />
                <AiOutlineSearch
                  size={30}
                  color="#333"
                  className="absolute top-1.5 right-2 cursor-pointer"
                />

                {click &&
                  (serachData && serachData.length !== 0 ? (
                    <div className="absolute min-h-[30vh] shadow-sm-2 bg-slate-50 z-[9] p-4">
                      {serachData &&
                        serachData.map((product, i) => {
                          const data = product.name;

                          const product_name = data.replace(/\s+/g, "-");

                          return (
                            <Link to={`/product/${product_name}`}>
                              <div
                                className="w-full flex items-center py-3"
                                key={i}>
                                <img
                                  src={product.image_Url[0].url}
                                  alt="product/image"
                                  className="w-[40px] h-[40px] mr-[10px]"
                                />
                                <h1>{product.name}</h1>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  ) : null)}
              </div>

              <div className="mt-8">
                <Navbar active={activeHeading} />
              </div>

              <div className={`${styles.button} !h-11 !rounded-[4px] ml-6`}>
                <Link to={isSeller ? "/shop/:id" : "/signup-seller"}>
                  <h1 className=" text-white flex items-center justify-center">
                    {isSeller ? "Go Dashboard" : "Become Seller"}
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />
              <div className="flex items-center justify-center w-full">
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    className="flex items-center justify-center">
                    <img
                      src={photoUrl ? photoUrl : avatar}
                      alt="user"
                      className="w-[45px] h-[45px] rounded-full border-[2px]
                     border-[#0b71e7] object-contain"
                    />
                    <h1 className="font-[600] text-[17px] ml-3 text-[#0b71e7]">
                      {userName}
                    </h1>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[#333] font-[600] text-[18px] ">
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[#333] font-[600] text-[18px] pl-1">
                      SignUp
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {openCart && <Cart setOpenCart={setOpenCart} />}
        {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
      </div>
    </>
  );
};

export default ResponsiveHeader;
