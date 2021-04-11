import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Dialog from "@material-ui/core/Dialog";
import Switch from "@material-ui/core/Switch";
import DialogTitle from "@material-ui/core/DialogTitle";
const ProductQuantityManager = (props) => {
  const [showQuantityTable, setShowQuantityTable] = React.useState(false);

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={showQuantityTable}
            onChange={() => setShowQuantityTable(!showQuantityTable)}
            name="checkedB"
            color="primary"
          />
        }
        label="Manage stock"
      />
      <Dialog
        open={showQuantityTable}
        onClose={() => setShowQuantityTable(false)}
      >
        <DialogTitle>Quanity table</DialogTitle>
      </Dialog>
    </React.Fragment>
  );
};

export default ProductQuantityManager;
