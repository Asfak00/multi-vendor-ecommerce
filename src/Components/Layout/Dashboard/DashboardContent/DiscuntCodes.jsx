import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import styles from "../../../../Styles/Style";
import AddNewCuponCode from "./AddNewCuponCode";

import { motion } from "framer-motion";

const DiscountCodes = () => {
  const [openCuponCodeWindow, setOpenCuponCodeWindow] = useState(false);

  const data = localStorage.getItem("createNewCouponCode");
  const couponCodeData = JSON.parse(data);

  const handleDelete = () => {
    localStorage.removeItem("createNewCouponCode");
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Coupon Code",
      minWidth: 180,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Discount Percentage",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "Delete",
      flex: 1,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            {couponCodeData && (
              <Button>
                <AiOutlineDelete size={20} onClick={handleDelete} />
              </Button>
            )}
          </>
        );
      },
    },
  ];

  const row = [];

  row.push({
    id: couponCodeData ? couponCodeData?.couponCodeId : "",
    name: couponCodeData?.name,
    price: couponCodeData ? couponCodeData?.discountParcentenge + "%" : "",
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        className="w-full  bg-white">
        <div className="flex items-center justify-end ">
          <button
            className={`${styles.button} text-white !h-11 !rounded-[4px] mr-3`}
            onClick={() => setOpenCuponCodeWindow(true)}>
            Add New Cupon
          </button>
        </div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </motion.div>

      {openCuponCodeWindow && (
        <AddNewCuponCode setOpenCuponCodeWindow={setOpenCuponCodeWindow} />
      )}
    </>
  );
};

export default DiscountCodes;
