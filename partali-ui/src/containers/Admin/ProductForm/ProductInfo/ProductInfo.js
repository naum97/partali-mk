import React, { useContext } from "react";
import WhiteContainer from "../../../../components/Admin/WhiteContainer/WhiteContainer";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Collapse, Divider } from "@material-ui/core";
import AdminProductContext from "../../../../context/AdminProductContext";
const useStyles = makeStyles((theme) => ({
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
const ProductInfo = () => {
  const [showSaleInput, setShowSaleInput] = React.useState(false);
  const [productSalePrice, setSalePrice] = React.useState(false);
  const [disableOriginalPrice, setDisabled] = React.useState(false);
  const [initialPrice, setInitialPrice] = React.useState(null);
  const [disableSwitch, setDisabledSwitch] = React.useState(true);

  const context = useContext(AdminProductContext);

  const handlePriceChange = (price) => {
    setDisabledSwitch(!price || !price.length);
    context.setProductPrice(price);
  };
  const handleSaleChange = (discount) => {
    const salePrice = (discount / 100) * initialPrice;
    setSalePrice(initialPrice - salePrice);
    context.setProductPrice(initialPrice - salePrice);
  };
  const classes = useStyles();
  return (
    <WhiteContainer>
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
          onChange={(event) => handlePriceChange(event.target.value)}
          value={context.productPrice}
          disabled={disableOriginalPrice}
        />
        <TextField
          label="Ribbon"
          placeholder="e.g. New Arrival"
          id="outlined-margin-dense"
          className={classes.ribbon}
          variant="outlined"
          onChange={(event) => context.setProductRibbon(event.target.value)}
        />
      </div>
      <FormControlLabel
        className={classes.onSaleSwitch}
        control={
          <Switch
            checked={showSaleInput}
            onChange={() => {
              setShowSaleInput(!showSaleInput);
              setDisabled(!disableOriginalPrice);
              setInitialPrice(context.productPrice);
            }}
            name="checkedB"
            color="primary"
            disabled={disableSwitch}
          />
        }
        label="On sale"
      />
      <Collapse
        in={showSaleInput}
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
            onChange={(event) => handleSaleChange(event.target.value)}
          />
          <TextField
            label="Sale price"
            id="outlined-margin-dense"
            className={classes.priceField}
            type="number"
            variant="outlined"
            value={productSalePrice}
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
        onChange={(event) => context.setProductDescription(event.target.value)}
      />
    </WhiteContainer>
  );
};

export default ProductInfo;
