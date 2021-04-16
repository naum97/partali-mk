import React, { useContext, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import AdminProductContext from "../../../../context/AdminProductContext";
import { DataGrid } from "@material-ui/data-grid";
import Modal from "../../../../components/Modal/Modal";
import TextField from "@material-ui/core/TextField";
import AddButton from "../../../../components/Admin/AddButton/AddButton";

const ProductQuantityManager = (props) => {
  const [showQuantityTable, setShowQuantityTable] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  // const [checked, setChecked] = React.useState(false);

  const context = useContext(AdminProductContext);

  useEffect(() => {
    handleRows();
  }, [context.selectedColors, context.selectedSizes]);

  const handleRows = () => {
    let newRows = [];
    let index = 1;
    context.selectedColors.forEach((color, index1) => {
      context.selectedSizes.forEach((size, index2) => {
        newRows.push({
          id: index++,
          color: color,
          size: size,
          stock: 0,
        });
      });
    });

    setRows(newRows);
  };
  const updateRow = (id, newValue) => {
    if (!newValue) {
      newValue = 0;
    }

    let sum = 0;
    const newRows = [...rows];
    let searchIndex = newRows.findIndex((row) => row.id === id);

    let newRow = { ...newRows[searchIndex] };
    newRow.stock = parseInt(newValue);
    newRows[searchIndex] = newRow;

    // compute old sum excluding current value
    rows.forEach((row, index) => {
      if (searchIndex !== index) {
        sum += row.stock;
      }
    });
    context.setTotalStock(parseInt(parseInt(newValue) + parseInt(sum)));
    setRows(newRows);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    {
      field: "color",
      headerName: "Color",
      flex: 0.2,
      headerAlign: "left",
      sortable: false,
      disableClickEventBubbling: true,
    },
    { field: "size", headerName: "Size", flex: 0.2 },
    {
      field: "stock",
      headerName: "Stock",
      flex: 0.2,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <TextField
            id="product-name"
            type="number"
            placeholder="0"
            // className={classes.productName}
            variant="outlined"
            onChange={(event) => updateRow(params.id, event.target.value)}
            value={params.getValue("stock")}
          />
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={showQuantityTable}
            onChange={() => {
              setShowQuantityTable(!showQuantityTable);
              // todo: maybe display table here below check
            }}
            name="checkedB"
            color="primary"
          />
        }
        label="Manage stock"
      />
      <Modal
        show={showQuantityTable}
        modalClosed={() => setShowQuantityTable(false)}
        style={{ height: "700px", margin: "auto" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{context.productName}</h2>
          <h2>Total stock: {context.totalStock}</h2>
        </div>

        <DataGrid rowHeight={100} rows={rows} columns={columns} pageSize={20} />

        <div style={{ marginLeft: "auto", marginTop: "20px" }}>
          {/* todo: maybe show table here */}
          <AddButton
            clicked={() => {
              setShowQuantityTable(false);
              context.setProductDetails(rows.filter((row) => row.stock !== 0));
            }}
          >
            Save changes
          </AddButton>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ProductQuantityManager;
