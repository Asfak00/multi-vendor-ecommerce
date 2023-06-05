import React, { useEffect, useState } from "react";

import { categoriesData } from "../../../../Static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../../../../Styles/Style";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [originalPrize, setOriginalPrize] = useState();
  const [discountPrize, setDiscountPrize] = useState();
  const [tags, setTags] = useState("");
  const [Category, setCategory] = useState("");
  const [stock, setStock] = useState();
  const [productId, setProductId] = useState("");
  const [images, setImages] = useState([]);

  // upload image handler
  const handleImageChange = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);

    setImages((prevImages) => [...prevImages, ...files]);
  };

  // product id
  useEffect(() => {
    const id = v4();
    setProductId(id);
  }, []);

  const createProductInfo = {
    productName,
    productDescription,
    tags,
    originalPrize,
    discountPrize,
    stock,
    Category,
    productId,
  };

  const productCreateSuccessful = () => {
    toast.success("Product Successfully Created");
  };

  // handle on submit event
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // localStorage
    localStorage.setItem(
      "createProductInfo",
      JSON.stringify(createProductInfo)
    );

    productCreateSuccessful();
    window.location.reload(true);
    navigate("/dashboard-create-product");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        className=" w-full h-[80vh] shadow overflow-y-scroll bg-white py-3 px-5"
        style={{ scrollbarWidth: "none" }}>
        <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
        <br />

        {/* create product form */}
        <form
          className="800px:flex w-full justify-between flex-wrap"
          onSubmit={handleOnSubmit}>
          {/* product name option */}
          <div className="w-full 800px:w-[47%]">
            <label className="pb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={productName}
              required
              onChange={(e) => setProductName(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product name.."
            />
          </div>

          {/* choose category option */}
          <div className="w-full 800px:w-[47%]">
            <label className="pb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-3 py-2 block rounded-[5px] border mt-2"
              value={Category}
              required
              onChange={(e) => setCategory(e.target.value)}>
              <option value="Choose a category">Choose a category </option>
              {categoriesData?.map((category, index) => (
                <option
                  value={category.title}
                  key={index}
                  className="flex flex-col">
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          {/* product description option */}
          <div className="w-full 800px:w-[100%] mt-5">
            <label className="pb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={productDescription}
              required
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter your product description.."
              className="appearance-none mt-2 block w-full h-[150px] px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>

          {/* product tags */}
          <div className="w-full 800px:w-[100%] mt-5">
            <label className="pb-2">Tags</label>
            <textarea
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Enter your tags related to product.."
              className="appearance-none mt-2 block w-full h-[100px] px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>

          {/* product original prize */}
          <div className="w-full 800px:w-[47%] mt-5">
            <label className="pb-2">
              Product Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              value={originalPrize}
              onChange={(e) => setOriginalPrize(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product prize.."
            />
          </div>

          {/* product discount prize */}
          <div className="w-full 800px:w-[47%] mt-5">
            <label className="pb-2">Discount Price</label>
            <input
              type="number"
              value={discountPrize}
              onChange={(e) => setDiscountPrize(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product discount prize.."
            />
          </div>

          {/* product stock */}
          <div className="w-full 800px:w-[100%] mt-5">
            <label className="pb-2">
              Product Stock <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product stock.."
            />
          </div>

          {/* product images */}
          <div className="w-full 800px:w-[100%] mt-5">
            <label className="pb-2">
              Upload Images <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="uploadImage"
              name="uploadImage"
              onChange={handleImageChange}
              className="hidden"
              multiple
              required
            />
            <div className="flex items-center flex-wrap">
              <label
                htmlFor="uploadImage"
                className={`${styles.button} !bg-gradient-to-r from-[#8100f9]  to-[#0381fef7] text-white mr-3 !rounded-[4px] !h-11`}>
                Upload
                <AiOutlinePlusCircle
                  size={30}
                  className="ml-1 cursor-pointer "
                  color="#eeeeee"
                />
              </label>

              {images?.map((image) => (
                <img
                  src={URL.createObjectURL(image)}
                  alt="product/image"
                  className="w-[20%] h-[120px] mt-2 mr-3 object-cover"
                />
              ))}
            </div>
          </div>

          <div className="w-full mt-6 flex items-center justify-center">
            <input
              type="submit"
              value="Create Product"
              className={`${styles.button} !w-full font-semibold 800px:!w-[50%] !rounded-[4px] !-h-11 hover:!text-white text-black transition-colors !bg-transparent border border-blue-400 hover:!bg-[#025cb6]`}
            />
          </div>
        </form>
        {/* toast message */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </motion.div>
    </>
  );
};

export default CreateProduct;
