import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import WhiteContainer from "../../../../components/Admin/WhiteContainer/WhiteContainer";
import AdminProductContext from "../../../../context/AdminProductContext";
import MultiSelector from "../../MultiSelector/MultiSelector";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  description: {
    marginTop: theme.spacing(3),
    width: "100%",
    marginBottom: theme.spacing(3),
  },
}));
const ProductAdditionalInfo = () => {
  const classes = useStyles();
  const context = useContext(AdminProductContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/colors/")
      .then((response) => context.setProductColors(response.data));
    axios
      .get("http://localhost:8080/api/v1/sizes/")
      .then((response) => context.setProductSizes(response.data));
  }, []);

  return (
    <WhiteContainer>
      <h2>Additional info</h2>
      <Divider />
      <TextField
        label="Грижа"
        id="outlined-margin-dense"
        className={classes.description}
        variant="outlined"
        multiline
        rows="3"
        onChange={(event) => context.setProductCare(event.target.value)}
      />
      <TextField
        label="Состав"
        id="outlined-margin-dense"
        className={classes.description}
        variant="outlined"
        multiline
        rows="3"
        onChange={(event) => context.setProductMaterials(event.target.value)}
      />
      <MultiSelector
        handleSelections={context.setProductColors}
        list={context.productColors}
        label="Colors"
        colorFilter
        selected={context.setSelectedColors}
      />
      <MultiSelector
        handleSelections={context.setProductSizes}
        list={context.productSizes}
        label="Sizes"
        selected={context.setSelectedSizes}
      />
    </WhiteContainer>
  );
};

export default ProductAdditionalInfo;
