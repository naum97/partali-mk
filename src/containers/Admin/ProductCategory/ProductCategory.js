import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Divider, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddButton from "../../../components/Admin/AddButton/AddButton";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

//todo: add onChange on boutiques and collection lists
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "33%",
  },
  showCheckbox: {
    margin: "12px 0px",
    width: "200px",
  },
  collectionsList: {
    margin: "20px 0px",
  },
}));

// todo: add validation to add boutique dialog
const ProductCategory = (props) => {
  const [showCollectionDialog, setShowCollectionDialog] = React.useState(false);
  const [showBoutiquesDialog, setShowBoutiquesDialog] = React.useState(false);

  const [newCategory, setNewCategory] = React.useState("");
  const [newBoutiqueName, setNewBoutiqueName] = React.useState("");

  const [errorState, setErrorState] = React.useState(false);

  //todo: this should go in database
  const addCategory = (event) => {
    event.preventDefault();
    if (!newCategory || !newCategory.length) {
      alert("New product category can't be empty!");
      setErrorState(true);
      return;
    }
    if (props.categories.includes(newCategory)) {
      alert("Category " + newCategory + " already exists. Please add new one!");
      setErrorState(true);
      return;
    }
    alert("Succesfully added category " + newCategory);
    props.handleproductCollections([...props.categories, newCategory]);
    setErrorState(false);
    setShowCollectionDialog(false);
  };

  //todo: this should go in database and be converted to boutique object
  const addBoutique = (event) => {
    event.preventDefault();
    if (!newBoutiqueName || !newBoutiqueName.length) {
      alert("Boutique name can't be empty");
      return;
    }
    if (props.boutiques.includes(newBoutiqueName)) {
      alert(
        "Boutique " + newBoutiqueName + " already exists. Please add new one!"
      );
      return;
    }
    alert("Succesfully added boutique " + newBoutiqueName);
    props.handleBoutiques([...props.boutiques, newBoutiqueName]);
    setShowBoutiquesDialog(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "12px",
          marginBottom: "20px",
        }}
      >
        <FormControlLabel
          className={classes.showCheckbox}
          control={
            <Checkbox
              checked={props.showInOnlineStore}
              onChange={props.handleShowInOnlineStore}
              name="checkedB"
              color="primary"
            />
          }
          label="Show in online store"
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
                  setNewCategory(event.target.value);
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
          id="checkboxes-tags-demo"
          className={classes.collectionsList}
          options={props.categories}
          disableCloseOnSelect
          //todo: this is an array - handle array in AddProductPage container
          onChange={(event, newValue) => props.selectCollections(newValue)}
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
      </div>
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Boutiques</h2>
          <AddButton
            icon={<AddIcon />}
            margin="17px 0px"
            height="30px"
            width="50%"
            size="small"
            clicked={() => setShowBoutiquesDialog(true)}
          >
            Add Boutique
          </AddButton>
        </div>
        <Dialog
          open={showBoutiquesDialog}
          onClose={() => setShowBoutiquesDialog(false)}
          aria-labelledby="form-dialog-title"
        >
          <form>
            <DialogTitle id="form-dialog-title">Add new boutique</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter boutique details!
              </DialogContentText>
              <TextField
                autoFocus
                margin="normal"
                id="name"
                fullWidth
                label="Name"
                type="text"
                onChange={(event) => setNewBoutiqueName(event.target.value)}
              />
              <TextField
                margin="normal"
                id="name"
                label="Address"
                type="text"
                fullWidth
                // todo: continue here for boutiques
                // onChange={(event) => setBoutiqueAddress(event.target.value)}
              />
              <TextField
                margin="normal"
                id="outlined-margin-normal"
                label="Description"
                type="text"
                fullWidth
                multiline
                // todo: continue here for boutiques
                // onChange={(event) => setBoutiqueDescription(event.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "97%",
                  marginBottom: "20px",
                  marginTop: "5px",
                }}
              >
                {/* todo: add onClick action here to add photo */}
                <AddButton
                  icon={<AddAPhotoIcon />}
                  // clicked={() => props.submitData(true)}
                >
                  Add image
                </AddButton>
                <div>
                  <Button
                    onClick={() => setShowBoutiquesDialog(false)}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onClick={(event) => addBoutique(event)}
                    color="primary"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </DialogActions>
          </form>
        </Dialog>
        <Divider />
        <Autocomplete
          handleHomeEndKeys
          clearOnBlur
          selectOnFocus
          id="checkboxes-tags-demo"
          className={classes.collectionsList}
          options={props.boutiques}
          disableCloseOnSelect
          onChange={(event, newValue) => props.selectBoutique(newValue)}
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
              label="Boutique"
              placeholder="Boutique"
            />
          )}
        />
      </div>
      <AddButton
        icon={<AddIcon />}
        margin="15px 0px"
        width="100%"
        padding="20px 0px"
        clicked={() => props.submitData(true)}
      >
        Add product
      </AddButton>
    </div>
  );
};
export default ProductCategory;
