import React, { useEffect, useState } from "react";
import styles from "../Styles/Style";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import ProductDetails from "../Components/Layout/ProductDetails";
import SuggestedProduct from "../Components/Layout/SuggestedProduct";
import { productData } from "../Static/data";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = productData.find((item) => item.name === productName);
    setData(data && data);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
