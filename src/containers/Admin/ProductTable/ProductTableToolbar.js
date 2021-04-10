import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  searchBox: {
    width: "50%",
  },
  button: {
    margin: "15px 0px",
  },
}));

const ProductTableToolbar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const editProduct = (selectedRows) => {
    if (!selectedRows || selectedRows.length == 0) {
      alert("Please select a product for editing!");
      return;
    }

    if (selectedRows.length > 1) {
      alert("Please select a single product for editing!");
      return;
    }
    history.push({
      pathname: "/admin/add-product",
      state: selectedRows,
    });
  };

  return (
    <div className={classes.root}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        options={props.initialRows.map((option) => option.name)}
        onChange={(event, newValue) => props.rowSearch(newValue)}
        className={classes.searchBox}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <div className={classes.button}>
        <IconButton
          style={{ margin: "0px 10px" }}
          onClick={() => editProduct(props.selectedRows)}
        >
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductTableToolbar;
