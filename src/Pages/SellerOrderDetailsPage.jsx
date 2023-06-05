import React from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import OrderDetails from "../Components/Layout/OrderDetails";

const SellerOrderDetailsPage = () => {
  return (
    <>
      <Header />
      <OrderDetails isAuthor={true} />
      <Footer />
    </>
  );
};

export default SellerOrderDetailsPage;
