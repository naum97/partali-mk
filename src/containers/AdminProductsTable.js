import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import image from "./../assets/images/bg_img.webp";
import image_2 from "../assets/images/boximage1.webp";

const columns = [
  {
    field: "image",
    headerName: "Image",
    width: 130,
    renderCell: (params) => (
      <img src={params.getValue("image")} width="110" height="80" />
    ),
  },
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 300 },
  { field: "category", headerName: "Category", width: 130 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 130,
    valueFormatter: ({ value }) => `${value} МКД`,
  },
  {
    field: "inventory",
    headerName: "Inventory",
    sortable: false,
    width: 160,
    type: "number",
  },
];

const rows = [
  { id: 1, name: "Snow", category: "Jon", price: 35, image: image },
  {
    id: 2,
    name: "Lannister",
    category: "Cersei",
    price: 42,
    image: image_2,
  },
  { id: 3, name: "Lannister", category: "Jaime", price: 45, inventory: 100 },
  { id: 4, name: "Stark", category: "Arya", price: 16 },
  { id: 5, name: "Targaryen", category: "Daenerys", price: 100 },
  { id: 6, name: "Melisandre", category: "Nina", price: 150 },
  { id: 7, name: "Clifford", category: "Ferrara", price: 44 },
  { id: 8, name: "Frances", category: "Rossini", price: 36 },
  { id: 9, name: "Roxie", category: "Harvey", price: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        rowHeight={100}
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
