import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Collapse, Divider } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MultiSelector from "../MultiSelector/MultiSelector";
import AddButton from "../../../components/Admin/AddButton/AddButton";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginBottom: theme.spacing(3),
    width: "45%",
  },
  textField: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  uploadContent: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(5),
    width: "100%",
    justifyContent: "space-between",
  },
  productInfo: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  priceField: {
    width: "45%",
  },
  ribbon: {
    width: "45%",
  },
  description: {
    marginTop: theme.spacing(3),
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  onSaleSwitch: {
    marginTop: "20px",
    width: "130px",
  },
  collapsed: {
    marginTop: "20px",
  },
}));

const ProductInfo = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>{props.productName}</h2>
        <Divider />
        <TextField
          label="Product Name"
          id="outlined-margin-dense"
          className={classes.textField}
          variant="outlined"
          onChange={props.handleChange}
        />
        <div className={classes.uploadContent}>
          <AddButton
            icon={<AddAPhotoIcon />}
            width="45%"
            fontSize="20px"
            padding="30px 0px"
            margin="0px 0px 23px 0px"
          >
            Add image
          </AddButton>
          <AddButton
            icon={<VideoCallIcon />}
            width="45%"
            fontSize="20px"
            padding="30px 0px"
            margin="0px 0px 23px 0px"
          >
            Add video
          </AddButton>
        </div>
      </div>
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Product info</h2>
        <Divider />
        <div className={classes.productInfo}>
          <TextField
            label="Price"
            id="outlined-margin-dense"
            placeholder="0"
            className={classes.priceField}
            type="number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">МКД</InputAdornment>
              ),
            }}
            onChange={(event) => props.handleProductPrice(event.target.value)}
          />
          <TextField
            label="Ribbon"
            placeholder="e.g. New Arrival"
            id="outlined-margin-dense"
            className={classes.ribbon}
            variant="outlined"
          />
        </div>
        <FormControlLabel
          className={classes.onSaleSwitch}
          control={
            <Switch
              checked={props.showSaleInput}
              onChange={() => props.handleSale(!props.showSaleInput)}
              name="checkedB"
              color="primary"
            />
          }
          label="On sale"
        />
        <Collapse
          in={props.showSaleInput}
          unmountOnExit
          timeout="auto"
          className={classes.collapsed}
        >
          <div className={classes.productInfo}>
            <TextField
              label="Discount %"
              id="outlined-margin-dense"
              placeholder={0}
              className={classes.priceField}
              type="number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
                inputProps: {
                  max: 100,
                  min: 0,
                },
              }}
              onChange={(event) => props.handleSaleChange(event.target.value)}
            />
            <TextField
              label="Sale price"
              id="outlined-margin-dense"
              className={classes.priceField}
              type="number"
              variant="outlined"
              value={props.productSalePrice}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">МКД</InputAdornment>
                ),
              }}
            />
          </div>
        </Collapse>
        <TextField
          label="Description"
          id="outlined-margin-dense"
          className={classes.description}
          variant="outlined"
          multiline
          rows="5"
          onChange={(event) =>
            props.handleProductDescription(event.target.value)
          }
        />
      </div>
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Additional info</h2>
        <Divider />
        <TextField
          label="Грижа"
          id="outlined-margin-dense"
          className={classes.description}
          variant="outlined"
          multiline
          rows="3"
        />
        <TextField
          label="Состав"
          id="outlined-margin-dense"
          className={classes.description}
          variant="outlined"
          multiline
          rows="3"
        />
        <MultiSelector
          handleSelections={props.handleColors}
          list={props.colors}
          label="Colors"
          colorFilter
          selected={props.selectColors}
        />
        <MultiSelector
          handleSelections={props.handleSizes}
          list={props.sizes}
          label="Sizes"
          selected={props.selectSizes}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
