import React, { useContext } from "react";
import WhiteContainer from "../../../../components/Admin/WhiteContainer/WhiteContainer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Divider from "@material-ui/core/Divider";
import AddButton from "../../../../components/Admin/AddButton/AddButton";
import AdminProductContext from "../../../../context/AdminProductContext";
const useStyles = makeStyles((theme) => ({
  productName: {
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
}));

const ProductName = () => {
  const classes = useStyles();
  const context = useContext(AdminProductContext);
  return (
    <WhiteContainer>
      <h2>{context.productName}</h2>
      <Divider />
      <TextField
        label="Product Name"
        id="product-name"
        className={classes.productName}
        variant="outlined"
        onChange={(event) => context.setProductName(event.target.value)}
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
    </WhiteContainer>
  );
};

export default ProductName;
