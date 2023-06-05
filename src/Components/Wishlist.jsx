import React from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "../Styles/Style";
import WishlistSingle from "./Layout/WishlistSingle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <div className="w-full fixed h-screen top-0 left-0 z-50 bg-[#0000006b]">
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 h-full  w-[80%] sm:w-[60%] 800px:w-[30%]  flex flex-col justify-between shadow-sm bg-white overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}>
        {wishlist && wishlist.length === 0 ? (
          <div className="flex w-full h-screen justify-center items-center">
            <div className="flex fixed top-3 right-3 pr-3 pt-3 justify-end w-full">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Wishlist items is empty!</h5>
          </div>
        ) : (
          <div>
            <div className="flex w-full p-4 cursor-pointer justify-end items-center">
              <RxCross1 size={25} onClick={() => setOpenWishlist(false)} />
            </div>

            {/* items length */}
            <div className={`${styles.noramlFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-3 font-[500] text-[17px]">
                {wishlist?.length} items
              </h5>
            </div>

            {/* single cart item */}
            <br />
            <div className="w-full border-t">
              {wishlist?.map((item, index) => (
                <WishlistSingle
                  data={item}
                  key={index}
                  setOpenWishlist={setOpenWishlist}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Wishlist;
