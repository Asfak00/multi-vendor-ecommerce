import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineTrackChanges } from "react-icons/md";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

import { motion } from "framer-motion";

const Order = () => {
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
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "item_qty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
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
            <Link to={`/order/track/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges
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
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </motion.div>
  );
};

export default Order;
