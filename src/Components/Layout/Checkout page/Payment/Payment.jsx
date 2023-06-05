import React, { useState, useEffect } from "react";

// manually imported components
import PaymentInfo from "./PaymentInfo";
import ProductData from "./ProductData";

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const [open, setOpen] = useState(false);

  // get the local storage data to latest order
  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <PaymentInfo open={open} setOpen={setOpen} />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <ProductData orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
