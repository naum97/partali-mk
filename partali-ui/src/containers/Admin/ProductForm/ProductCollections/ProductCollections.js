import React, { useContext } from "react";
import WhiteContainer from "../../../../components/Admin/WhiteContainer/WhiteContainer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddButton from "../../../../components/Admin/AddButton/AddButton";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/icons/Add";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AdminProductContext from "../../../../context/AdminProductContext";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  collectionsList: {
    margin: "20px 0px",
  },
}));
const ProductCollections = () => {
  const context = useContext(AdminProductContext);
  const classes = useStyles();

  const [showCollectionDialog, setShowCollectionDialog] = React.useState(false);
  const [newCollection, setnewCollection] = React.useState("");

  const [errorState, setErrorState] = React.useState(false);

  //todo: this should go in database
  const addCategory = (event) => {
    event.preventDefault();
    if (!newCollection || !newCollection.length) {
      alert("New product category can't be empty!");
      setErrorState(true);
      return;
    }
    if (context.productCollections.includes(newCollection)) {
      alert(
        "Category " + newCollection + " already exists. Please add new one!"
      );
      setErrorState(true);
      return;
    }
    context.setProductCollections([
      ...context.productCollections,
      newCollection,
    ]);
    alert("Succesfully added category " + newCollection);
    setErrorState(false);
    setShowCollectionDialog(false);
  };

  return (
    <WhiteContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Collections</h2>
        <AddButton
          icon={<AddIcon />}
          margin="17px 0px"
          height="30px"
          width="50%"
          size="small"
          clicked={() => setShowCollectionDialog(true)}
        >
          Add collection
        </AddButton>
      </div>
      <Dialog
        open={showCollectionDialog}
        onClose={() => setShowCollectionDialog(false)}
        aria-labelledby="form-dialog-title"
      >
        <form>
          <DialogTitle id="form-dialog-title">Add new collection</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the name of the new product collection!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Collection"
              type="text"
              fullWidth
              error={errorState}
              helperText={errorState ? "Please enter collection name" : ""}
              onChange={(event) => {
                setErrorState(false);
                setnewCollection(event.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setShowCollectionDialog(false)}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={(event) => addCategory(event)}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Divider />
      <Autocomplete
        multiple
        handleHomeEndKeys
        clearOnBlur
        selectOnFocus
        id="checkboxes-1"
        className={classes.collectionsList}
        options={context.productCollections}
        disableCloseOnSelect
        onChange={(event, newValue) =>
          context.setSelectedProductCollections(newValue)
        }
        getOptionLabel={(option) => option}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Collections"
            placeholder="Product Collections"
          />
        )}
      />
    </WhiteContainer>
  );
};

export default ProductCollections;
