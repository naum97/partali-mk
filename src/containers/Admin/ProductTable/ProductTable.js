import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import image from "../../../assets/images/bg_img.webp";

import ProductTableToolbar from "./ProductTableToolbar";
const columns = [
  {
    field: "image",
    headerName: "Image",
    width: 130,
    renderCell: (params) => (
      <img alt="product" src={image} width="110" height="80" />
    ),
    headerAlign: "left",
    sortable: false,
    disableClickEventBubbling: true,
  },
  { field: "id", headerName: "ID", flex: 0.23 },
  { field: "name", headerName: "Name", flex: 0.45 },
  {
    field: "price",
    headerName: "Price",
    flex: 0.3,
    headerAlign: "left",
    valueFormatter: ({ value }) => `${value} МКД`,
  },
  {
    field: "amountInStock",
    headerName: "Total Amount",
    flex: 0.3,
    headerAlign: "left",
  },
  {
    field: "amountInStock2",
    headerName: "Inventory",
    flex: 0.3,
    headerAlign: "left",
  },
];

const ProductTable = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleInitialResponse = (data) => {
    setInitialRows(data);
    setRows(data);
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8080/api/v1/products/")
      .then((response) => {
        handleInitialResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const rowSearch = (value) => {
    if (!value || value.length == 0) {
      setRows(initialRows);
      return;
    }
    setIsLoading(true);
    const newRows = initialRows.filter((row) =>
      row.name.toLowerCase().includes(value.toLowerCase())
    );
    setRows(newRows);
    setIsLoading(false);
  };

  return (
    <div
      style={{
        width: "90%",
        height: "800px",
        margin: "auto",
        marginBottom: "100px",
      }}
    >
      <ProductTableToolbar
        initialRows={initialRows}
        rowSearch={rowSearch}
        selectedRows={selectedRows}
        handleSelectedRows={setSelectedRows}
      />

      <DataGrid
        rowHeight={100}
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        loading={isLoading}
        onSelectionModelChange={(event) =>
          setSelectedRows(event.selectionModel)
        } //this return the id as an array
      />
    </div>
  );
};

export default ProductTable;
