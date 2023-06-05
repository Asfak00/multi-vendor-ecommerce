import React, { useState } from "react";

import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { motion } from "framer-motion";

const AllOrders = () => {
  // const [row, setRow] = useState();
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
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        className="w-full  bg-white">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </motion.div>
    </>
  );
};

export default AllOrders;
