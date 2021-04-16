import React, { useContext, useEffect } from "react";
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
import axios from "axios";
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
  const [newCollection, setNewCollection] = React.useState(null);

  const [errorState, setErrorState] = React.useState(null);

  // fetch collections from backend on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/collections/names")
      .then((response) => {
        context.setProductCollections(response.data);
      });
  }, []);

  const addCollection = (event) => {
    event.preventDefault();
    if (!newCollection || !newCollection.length) {
      setErrorState("New product collection can't be empty!");
      return;
    }
    if (context.productCollections.includes(newCollection)) {
      setErrorState(
        "Category " + newCollection + " already exists. Please add new one!"
      );
      return;
    }

    axios
      .post("http://localhost:8080/api/v1/collections/" + newCollection.trim())
      .then(() => {
        context.setProductCollections([
          ...context.productCollections,
          newCollection,
        ]);
        alert("Succesfully added category " + newCollection);
      })
      .finally(() => reset());
  };

  const reset = () => {
    setErrorState(null);
    setShowCollectionDialog(false);
    setNewCollection(null);
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
              helperText={errorState}
              onChange={(event) => {
                setErrorState(false);
                setNewCollection(event.target.value);
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
              onClick={(event) => addCollection(event)}
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
