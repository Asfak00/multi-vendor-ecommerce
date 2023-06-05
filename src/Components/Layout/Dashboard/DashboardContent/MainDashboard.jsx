import React from "react";

import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import Styles from "../../../../Styles/Style";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

import { motion } from "framer-motion";

import { productData } from "../../../../Static/data";

const MainDashboard = () => {
  // getting the latest order from localStorage
  const orderInfo = JSON.parse(localStorage.getItem("latestOrder"));
  const getOrderInfo = orderInfo?.cart;

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

  const columns = [
    { field: "id", headerName: "Order Id", minWidth: 150, flex: 0.8 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.8,
    },
    {
      field: "item_qty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.8,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/seller/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight
                  size={20}
                  className="cursor-pointer hover:text-[#3957db] transition-colors"
                />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="w-full">
        <h1 className="text-[22px] font-Poppins pb-2">Overview</h1>
        <div className="800px:flex items-center justify-between block">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{ duration: 0.5 }}
            className="w-full 800px:w-[32%] bg-white hover:shadow-lg transition mb-4 px-3 py-2 min-h-[20vh] cursor-pointer rounded">
            <div className="flex items-center">
              <AiOutlineMoneyCollect
                size={40}
                className="mr-2"
                color="#00000085"
              />

              <h5
                className={`${Styles.productTitle} !text-[18px] !font-[600] !text-[#00000085] leading-5`}>
                Account balance{" "}
                <span className="text-[16px] font-[500] text-[#00000085]">
                  ( with 10% service charge )
                </span>
              </h5>
            </div>

            <h3 className="text-[22px] font-[500] pl-[25px] pt-2">${500}</h3>

            <Link to="/dashboard-withdraw-money">
              <h5 className="text-[#077f9c] pl-2 pt-4 hover:underline">
                withdraw money
              </h5>
            </Link>
          </motion.div>

          {/* order div */}
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -150 }}
            transition={{ duration: 0.5 }}
            className="w-full 800px:w-[32%] bg-white hover:shadow-lg transition mb-4 px-3 py-3 min-h-[20vh] cursor-pointer rounded">
            <div className="flex items-center">
              <MdBorderClear size={25} className="mr-2" color="#00000085" />

              <h3
                className={`${Styles.productTitle} !text-[18px] !font-[600] !text-[#00000085] leading-5`}>
                All Orders
              </h3>
            </div>

            <h3 className="text-[22px] font-[500] pl-[25px] pt-2">
              {getOrderInfo ? getOrderInfo.length : 0}
            </h3>

            <Link to="/dashboard-orders">
              <h5 className="text-[#077f9c] pl-2 pt-4 hover:underline">
                view orders
              </h5>
            </Link>
          </motion.div>

          {/* all product div */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ duration: 0.5 }}
            className="w-full 800px:w-[32%] bg-white hover:shadow-lg transition mb-4 px-3 py-3 min-h-[20vh] cursor-pointer rounded">
            <div className="flex items-center">
              <AiOutlineMoneyCollect
                size={30}
                className="mr-2"
                color="#00000085"
              />

              <h5
                className={`${Styles.productTitle} !text-[18px] !font-[600] !text-[#00000085] leading-5`}>
                All Product
              </h5>
            </div>

            <h3 className="text-[22px] font-[500] pl-[25px] pt-2">
              {productData ? productData.length : 0}
            </h3>

            <Link to="/dashboard-products">
              <h5 className="text-[#077f9c] pl-2 pt-4 hover:underline">
                view products
              </h5>
            </Link>
          </motion.div>
        </div>

        {/* latest order */}
        <div className="w-full px-3 py-4">
          <h2 className="font-[600] text-[22px]">Latest Order</h2>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white mt-3">
            <DataGrid
              rows={row.slice(0, 3)}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              autoHeight
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
