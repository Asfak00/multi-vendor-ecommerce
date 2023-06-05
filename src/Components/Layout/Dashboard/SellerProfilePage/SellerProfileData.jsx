import React, { useState } from "react";

// react libraries
import { Link } from "react-router-dom";

// manually imported components
import { productData } from "../../../../Static/data";
import Product from "../../Product";
import styles from "../../../../Styles/Style";
import ProductReview from "../../ProductReview";
import EventCard from "../../EventCard";

// react icons
import { RxDashboard } from "react-icons/rx";
import { AiFillStar, AiOutlineArrowDown, AiOutlineStar } from "react-icons/ai";

// images
import reviewImage1 from "../../../../Assets/reviewImage1.jpg";
import reviewImage2 from "../../../../Assets/reviewImage2.jpg";
import reviewImage3 from "../../../../Assets/reviewImage3.jpg";

const SellerProfileData = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="w-full">
        <div className="w-full items-center flex justify-between">
          <div className=" flex items-center flex-wrap">
            <div
              className=" flex items-center mr-5"
              onClick={() => setActive(1)}>
              <h5
                className={`font-[600] text-[20px] ${
                  active === 1 ? " text-[#3957db]" : "text-[#333}"
                } cursor-pointer`}>
                Shop Products
              </h5>
            </div>

            <div
              className=" flex items-center mr-5"
              onClick={() => setActive(2)}>
              <h5
                className={`font-[600] text-[20px] ${
                  active === 2 ? "text-[#3957db]" : "text-[#333}"
                } cursor-pointer`}>
                Running Events
              </h5>
            </div>

            <div className="flex items-center " onClick={() => setActive(3)}>
              <h5
                className={`font-[600] text-[20px] ${
                  active === 3 ? " text-[#3957db]" : "text-[#333}"
                } cursor-pointer`}>
                Shop Reviews
              </h5>
            </div>
          </div>

          <Link to="/dashboard">
            <button
              className={`${styles.button} !h-11 !rounded-[4px] text-white`}>
              <RxDashboard className="cursor-pointer mr-2" />
              Go Dashboard
            </button>
          </Link>
        </div>

        {active === 1 && (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12 border-0 mt-12">
            {productData?.map((product, index) => (
              <Product data={product} key={index} />
            ))}
          </div>
        )}
      </div>

      {active === 2 && (
        <div className="mt-10">
          <EventCard />
        </div>
      )}

      {active === 3 && (
        <>
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
          <div className="mt-10">
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
          </div>

          <div className="mt-16">
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
          </div>
        </>
      )}
    </>
  );
};

export default SellerProfileData;
