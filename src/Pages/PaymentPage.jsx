import React from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Payment from "../Components/Layout/Checkout page/Payment/Payment";
import CheckoutSteps from "../Components/Layout/Checkout page/CheckoutSteps";

const PaymentPage = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <CheckoutSteps active={2} />

      <Payment />

      <Footer />
    </>
  );
};

export default PaymentPage;
