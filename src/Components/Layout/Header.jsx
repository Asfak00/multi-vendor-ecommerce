import React, { useState } from "react";
import styles from "../../Styles/Style";
import Logo from "../../Assets/logo.png";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../Static/data";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import Cart from "../../Components/Cart";
import Wishlist from "../../Components/Wishlist";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
import avatar from "../../Assets/avatar.jpg";
import { useSelector } from "react-redux";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [serachData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [click, setClick] = useState(false);

  // local storage
  const photoUrl = JSON.parse(localStorage.getItem("PhotoUrl"));
  const isUser = JSON.parse(localStorage.getItem("email"));

  // use selector
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filterProduct =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filterProduct);

    if (term.length === 0) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  // scroll menu bar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  // localStorage user data
  const isSeller = localStorage.getItem("isSeller");

  return (
    <>
      {/* top header */}
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:pt-12 800px:pb-12 800px:flex items-center justify-between">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-[150px] h-[120px]" />
          </Link>

          <div className={`${styles.section} relative w-[50%]`}>
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

          <div className={`${styles.button}`}>
            <Link to={isSeller ? "/shop/:id" : "/signup-seller"}>
              <h1 className=" text-white flex items-center justify-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/* responsive header */}
      <ResponsiveHeader
        active={active}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        setOpenCart={setOpenCart}
        setOpenWishlist={setOpenWishlist}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        serachData={serachData}
        activeHeading={activeHeading}
        cart={cart}
        click={click}
      />

      {/* header bottom */}
      <div
        className={`${
          active === true ? "fixed top-0 left-0 shadow-sm z-10" : null
        } 800px:flex hidden w-full bg-[#3957db] items-center justify-between transition p-5 1040px:p-0`}>
        <div
          className={`${styles.section} ${styles.noramlFlex} relative justify-between`}>
          {/* categories bar */}
          <div
            className="relative mt-[10px] w-[270px] h-[60px] hidden items-center  1000px:flex justify-between "
            onClick={() => setDropDown(!dropDown)}>
            <BiMenuAltLeft
              size={30}
              className="absolute top-3 flex items-center left-2"
            />
            <button className="w-full h-[100%] flex items-center justify-between font-sans pl-10 bg-white text-lg font-[500] rounded-t-md select-none">
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 flex items-center cursor-pointer"
            />
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
                dropDown={dropDown}
              />
            ) : null}
          </div>

          {/* navbar section */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}>
                <AiOutlineHeart size={30} color="rgb(255 255 255/83%)" />
                <span className="absolute top-0 right-0 rounded-full w-4 h-4 top right m-0 p-0 font-mono text-white leading-tight text-[12px] bg-[#3bc177] text-center">
                  {wishlist ? wishlist.length : "0"}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}>
                <AiOutlineShoppingCart size={30} color="rgb(255 255 255/83%)" />
                <span className="absolute top-0 right-0 rounded-full w-4 h-4 top right m-0 p-0 font-mono text-white leading-tight text-[12px] bg-[#3bc177] text-center">
                  {cart ? cart.length : "0"}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link to={isUser ? "/profile" : "/sign-up"}>
                  {isUser ? (
                    <img
                      src={photoUrl ? photoUrl : avatar}
                      alt="avatar"
                      className="w-[33px] h-[33px] rounded-full object-cover"
                    />
                  ) : (
                    <CgProfile size={30} color="rgb(255 255 255/83%)" />
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
        {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
      </div>
    </>
  );
};

export default Header;
