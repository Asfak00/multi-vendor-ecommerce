import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

import { motion } from "framer-motion";

const AllProducts = () => {
  const dataFromLocalstorage = localStorage.getItem("createProductInfo");
  const productData = JSON.parse(dataFromLocalstorage && dataFromLocalstorage);

  const handleDelete = () => {
    localStorage.removeItem("createProductInfo");
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.8,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.8,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.3,
    },
    {
      field: "Preview",
      flex: 0.5,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            {productData && (
              <Link to={`/product/${params.id}`}>
                <Button>
                  <AiOutlineEye size={20} />
                </Button>
              </Link>
            )}
          </>
        );
      },
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
            {productData && (
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
    id: productData ? productData?.productId : "",
    name: productData?.productName,
    price: "US$ " + productData ? productData?.discountPrize : "",
    Stock: productData?.stock,
    sold: productData?.sold_out,
  });

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

export default AllProducts;
