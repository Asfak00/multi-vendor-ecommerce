import React from "react";

import { AiFillStar } from "react-icons/ai";

const ProductReview = ({
  comment,
  authorName,
  reviewImage,
  thardStar,
  fourthStar,
  fifthStar,
  publishDate,
}) => {
  return (
    <div className="mt-5 h-[18vh]">
      <div className="w-full flex pt-3">
        <img
          src={reviewImage}
          alt="author/image"
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="flex w-full 800px:w-[40%] ml-2 flex-col">
          {/* author name */}
          <span className="text-[18px] font-[600] ">{authorName}</span>

          {/* review comment */}
          <div className="text-[#242424] ">{comment}</div>

          <div className="flex items-center mt-1">
            {/* review star */}
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
              {thardStar}
              {fourthStar}
              {fifthStar}
            </div>

            {/* publish time */}
            <div className="text-[#33333381] font-[600] ml-5">
              {publishDate}
            </div>
          </div>

          <div className="w-[20%] h-9 border-none text-[#216bff] underline hover:no-underline transition cursor-pointer ">
            reply
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
