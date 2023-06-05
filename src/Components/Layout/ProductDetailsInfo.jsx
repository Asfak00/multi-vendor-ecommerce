import React, { useState } from "react";
import styles from "../../Styles/Style";
import { Link } from "react-router-dom";
import ProductReview from "./ProductReview";

import { motion } from "framer-motion";

// images
import reviewImage1 from "../../Assets/reviewImage1.jpg";
import reviewImage2 from "../../Assets/reviewImage2.jpg";
import reviewImage3 from "../../Assets/reviewImage3.jpg";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 py-2 800px:px-10 rounded mt-10">
      <div className="flex items-center justify-between w-full border-b pt-10 pb-2 ">
        <div className="relative">
          <h5
            className="text-[18px] px-1 leading-5 text-[#000] font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}>
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>

        <div className="relative">
          <h5
            className="text-[18px] px-1 leading-5 text-[#000] font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}>
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>

        <div className="relative">
          <h5
            className="text-[18px] px-1 leading-5 text-[#000] font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}>
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>

      {active === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="mt-5">
          <p className="text-[18px] pb-5 py-2 whitespace-pre-line leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            nesciunt laboriosam porro sit quis vitae autem doloribus ad id,
            temporibus, corrupti recusandae cupiditate repellendus ratione, rem
            quae provident accusantium? Ipsam deleniti corporis laudantium aut?
            Maiores consequatur modi vel excepturi ab!
          </p>

          <p className="text-[18px] pb-5 py-2 whitespace-pre-line leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            consectetur enim modi magnam cumque. Nesciunt fugit similique
            itaque, ducimus voluptatum voluptatem, minus omnis obcaecati maiores
            laborum vel minima dolorem. Totam laborum debitis magni aliquam,
            laboriosam dolorum aut expedita quia quam minus autem sint deleniti
            repudiandae, exercitationem excepturi eum, facere accusamus?
          </p>

          <p className="text-[18px] pb-5 py-2 whitespace-pre-line leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi,
            laborum deserunt, magnam amet eligendi facilis mollitia totam quam
            fugit officia libero sint ipsam, perspiciatis dolores consequuntur
            itaque consectetur atque veniam nulla quibusdam sequi ad. Ipsam
            laboriosam error dignissimos porro corrupti dolorem rem dicta, illo
            sit necessitatibus provident labore exercitationem omnis aliquid,
            dolorum, asperiores fuga atque totam odio ex cum accusamus odit.
            Eveniet distinctio dicta sapiente aperiam voluptatem, voluptates
            reprehenderit enim doloremque fugit ipsa magni hic aut at laboriosam
            temporibus placeat fugiat ipsam? Beatae quaerat provident modi
            ratione, non sed possimus iure dolorum, nostrum ad dolorem, libero
            velit autem. Pariatur?
          </p>
        </motion.div>
      ) : null}

      {active === 2 ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}>
            <ProductReview
              authorName="Rahi Ahmed"
              reviewImage={reviewImage1}
              comment="This product is nice. Thank you E-shop."
              thardStar={
                <AiFillStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              fourthStar={
                <AiOutlineStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              fifthStar={
                <AiOutlineStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              publishDate="1 day ago"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.6 }}>
            <ProductReview
              authorName="Naim Mia"
              reviewImage={reviewImage2}
              comment="Wow! this product is awesome. Spacially thanks to E-shop for this product."
              thardStar={
                <AiFillStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              fourthStar={
                <AiFillStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              fifthStar={
                <AiFillStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              publishDate="3 day ago"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
            transition={{ duration: 0.6 }}>
            {" "}
            <ProductReview
              authorName="Alamin Ahmed"
              reviewImage={reviewImage3}
              comment="nice product!"
              thardStar={
                <AiOutlineStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              fourthStar={
                <AiOutlineStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              fifthStar={
                <AiOutlineStar
                  size={20}
                  color="#f6Ba00"
                  className="mr-2 cursor-pointer"
                />
              }
              publishDate="1 week ago"
            />
          </motion.div>
        </>
      ) : null}

      {active === 3 ? (
        <div className="w-full block 800px:flex pt-5 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                alt="avatar/image"
                className="w-[50px] h-[50px] rounded-full"
              />

              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="text-[15px] pb-2">{data.shop.ratings}</h5>
              </div>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              voluptas perferendis non fugit saepe sed assumenda aliquam ullam
              esse quis voluptatem explicabo molestias, architecto corporis
              tenetur ipsa accusantium optio totam. Unde harum, beatae
              temporibus sint molestias qui nam. Eum, blanditiis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex items-end  flex-col">
            <div className="text-left">
              <h5 className="font-[700]">
                Joined on: <span className="font-[500]">21 May,2023</span>
              </h5>

              <h5 className="font-[700] pt-3">
                Total Products: <span className="font-[500]">200</span>
              </h5>

              <h5 className="font-[700] pt-3">
                Total Reviews: <span className="font-[500]">486</span>
              </h5>

              <Link to="/shop/:id">
                <button
                  className={`${styles.button} !h-11 !rounded text-white !mt-3`}>
                  Visit Shop
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsInfo;
