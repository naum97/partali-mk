import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import WhiteContainer from "../../../../components/Admin/WhiteContainer/WhiteContainer";
import AdminProductContext from "../../../../context/AdminProductContext";
import MultiSelector from "../../MultiSelector/MultiSelector";

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
