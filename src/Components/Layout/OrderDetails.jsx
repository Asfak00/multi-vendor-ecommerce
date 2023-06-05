import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../Styles/Style";
import { BsFillBagFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const OrderDetails = ({ isAuthor }) => {
  const [click, setClick] = useState(false);
  const [fillFirstStar, setFillFirstStar] = useState(true);
  const [fillSecondStar, setFillSecondStar] = useState(true);
  const [fillThardStar, setFillThardStar] = useState(true);
  const [fillFourthStar, setFillFourthStar] = useState(true);
  const [fillFifthStar, setFillFifthStar] = useState(true);
  const [reviewComment, setReviewComment] = useState("");
  const orderInfo = JSON.parse(localStorage.getItem("latestOrder"));
  const getOrderInfo = orderInfo?.cart;

  const { id } = useParams();

  let row = [];

  getOrderInfo?.map((item) => {
    const data = {
      id: item ? item.id : "",
      status: item ? "processing" : "",
      item_qty: item ? item.qty : "",
      total: item ? item.discount_price : "",
    };
    row.push(data);
  });

  return (
    <>
      <div className={`min-h-screen ${styles.section} py-8`}>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <BsFillBagFill size={30} color="crimson" />
            <h1 className="text-[25px] font-[600] pl-2 text-[#333]">
              Order Details
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6">
          <h1 className="font-[600] text-[#333333ba]">
            Order ID: <span>#19</span>
          </h1>

          <h1 className="font-[600] text-[#333333ba]">Placed on: 2023-05-29</h1>
        </div>

        <div className="flex mt-10 py-3 border-b justify-between">
          <div className="flex ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42FePhUrLX424aLie09J4Pfkn03T8h3D7PQ&usqp=CAU"
              alt="product/image"
              className="w-[70px] h-[70px] object-cover"
            />

            <div className="ml-5">
              <h5 className="font-[700] text-[25px] text-[#2a2a2a]">
                OPPO F17 ProUltra Function, Ultimate Fun
              </h5>
              <span className="flex items-center text-[#333] font-[600]">
                $1500 <RxCross1 size={10} className="mx-2" /> 1
              </span>
            </div>
          </div>

          {!isAuthor && (
            <div>
              <button
                className={`${styles.button} !h-11 !rounded-[4px] text-white`}
                onClick={() => setClick(true)}>
                Write a review
              </button>
            </div>
          )}

          {/* review window for post review */}
          {click && (
            <>
              <div className="w-full h-screen bg-[#00000060] fixed top-0 left-0 z-50 flex items-center justify-center ">
                <div className="sm:w-[95%] md:w-[80%] 800px:w-[50%] h-[70vh] overflow-y-scroll bg-white rounded-md">
                  <div className="w-full flex items-end justify-end p-2">
                    <RxCross1
                      size={40}
                      className="cursor-pointer p-2 hover:bg-[#0000001b] transition rounded-full"
                      onClick={() => setClick(false)}
                    />
                  </div>

                  <h5 className="text-[30px] font-Poppins text-center">
                    Give a review
                  </h5>

                  <div className="flex mt-5 pl-3">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42FePhUrLX424aLie09J4Pfkn03T8h3D7PQ&usqp=CAU"
                      alt="product/image"
                      className="w-[50px] h-[50px] object-cover"
                    />

                    <div className="ml-5">
                      <h5 className="font-[600] text-[20px] text-[#2a2a2a]">
                        OPPO F17 ProUltra Function, Ultimate Fun
                      </h5>
                      <span className="flex items-center text-[#333] font-[600]">
                        $1500 <RxCross1 size={10} className="mx-2" /> 1
                      </span>
                    </div>
                  </div>

                  <div className="px-5 mt-10">
                    <h1 className="font-[600] text-[18px]">
                      Rating <span className="text-red-500">*</span>
                    </h1>

                    <div className="flex items-center mt-1">
                      {fillFirstStar ? (
                        <AiOutlineStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillFirstStar(!fillFirstStar)}
                        />
                      ) : (
                        <AiFillStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillFirstStar(!fillFirstStar)}
                        />
                      )}

                      {fillSecondStar ? (
                        <AiOutlineStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillSecondStar(!fillSecondStar)}
                        />
                      ) : (
                        <AiFillStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillSecondStar(!fillSecondStar)}
                        />
                      )}

                      {fillThardStar ? (
                        <AiOutlineStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillThardStar(!fillThardStar)}
                        />
                      ) : (
                        <AiFillStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillThardStar(!fillFirstStar)}
                        />
                      )}

                      {fillFourthStar ? (
                        <AiOutlineStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillFourthStar(!fillFourthStar)}
                        />
                      ) : (
                        <AiFillStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillFourthStar(!fillFourthStar)}
                        />
                      )}

                      {fillFifthStar ? (
                        <AiOutlineStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillFifthStar(!fillFifthStar)}
                        />
                      ) : (
                        <AiFillStar
                          size={25}
                          color="#f6Ba00"
                          className="mr-2 cursor-pointer"
                          onClick={() => setFillFifthStar(!fillFifthStar)}
                        />
                      )}
                    </div>
                  </div>

                  <div className="mt-10 px-5">
                    <form>
                      <label
                        htmlFor="comment"
                        className="font-[600] text-[18px]">
                        Write a comment
                        <span className="text-gray-400"> (optional)</span>
                      </label>

                      <textarea
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        placeholder="Enter your product description.."
                        className="appearance-none mt-2 block w-full h-[100px] px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>

                      <input
                        type="submit"
                        value="Submit"
                        className={`${styles.button} mt-4 text-white`}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="w-full flex justify-end mt-2">
          <h1 className="font-[600] text-[#333]">
            Total Price: <span className="font-[700] text-black">$1500.00</span>
          </h1>
        </div>

        <div className="flex w-full 800px:w-[80%] items-center justify-between mt-12">
          <div>
            <h1 className="font-[700] text-[20px] text-[#333]">
              Shipping Address:
            </h1>
            <div className="mt-2">
              <p className="font-[600]">1132 Goodwin Avenue 3230</p>
              <p className="font-[600]">US</p>
              <p className="font-[600]">WA</p>
              <p className="font-[600]">01305282768</p>
            </div>
          </div>
          <div>
            <h1 className="font-[700] text-[20] text-[#333]">Payment Info:</h1>
            <p className="font-[600] text-[#333333ca]">Status: processing</p>
          </div>
        </div>

        {isAuthor && (
          <>
            <div className="mt-12">
              <h1 className="font-[700] text-[20px] text-[#333]">
                Order Status:
              </h1>

              <select
                name="orderStatus"
                id="OrderStatus"
                className="bg-transparent focus:border-blue-500 cursor-pointer border py-1 px-2 !rounded-md border-gray-300">
                <option value="select order status">Select order status</option>
                <option value="processing">Processing</option>
                <option value="transferred to delivery partner">
                  Transferred to delivery partner
                </option>
                <option value="received">Received</option>
                <option value="on the way">On the way</option>
                <option value="delivered">Delivered</option>
              </select>

              <button
                className={`${styles.button} !bg-[#ff648b30] !h-11 !rounded-[4px] mt-5 text-[#f9224d] font-[700]`}>
                Update status
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
