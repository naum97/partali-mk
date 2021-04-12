import React, { useContext } from "react";
import WhiteContainer from "../../../../components/Admin/WhiteContainer/WhiteContainer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Divider from "@material-ui/core/Divider";
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
import AdminProductContext from "../../../../context/AdminProductContext";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  collectionsList: {
    margin: "20px 0px",
  },
}));
const ProductBoutiques = (props) => {
  const context = useContext(AdminProductContext);
  const classes = useStyles();
  const [showBoutiquesDialog, setShowBoutiquesDialog] = React.useState(false);
  const [boutiqueName, setBoutiqueName] = React.useState("");

  const addBoutique = (event) => {
    event.preventDefault();
    if (!boutiqueName || !boutiqueName.length) {
      alert("Boutique name can't be empty");
      return;
    }
    if (context.boutiques.includes(boutiqueName)) {
      alert(
        "Boutique " + boutiqueName + " already exists. Please add new one!"
      );
      return;
    }
    alert("Succesfully added boutique " + boutiqueName);
    context.setBoutiques([...context.boutiques, boutiqueName]);
    setShowBoutiquesDialog(false);
  };

  return (
    <WhiteContainer>
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
              onChange={(event) => setBoutiqueName(event.target.value)}
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
        id="checkboxes-2"
        className={classes.collectionsList}
        options={context.boutiques}
        disableCloseOnSelect
        onChange={(event, newValue) => context.setProductBoutique(newValue)}
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
    </WhiteContainer>
  );
};

export default ProductBoutiques;
