import React, { useContext, useEffect, useCallback } from "react";
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
import axios from "axios";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  collectionsList: {
    margin: "20px 0px",
  },
}));
const ProductBoutiques = () => {
  const context = useContext(AdminProductContext);
  const classes = useStyles();

  const [showBoutiquesDialog, setShowBoutiquesDialog] = React.useState(false);

  const [boutiqueName, setBoutiqueName] = React.useState(null);
  const [boutiqueAddress, setBoutiqueAddress] = React.useState(null);
  const [boutiqueDescription, setBoutiqueDescription] = React.useState(null);
  const [boutiqueEmail, setBoutiqueEmail] = React.useState(null);
  const [boutiquePhoneNumber, setBoutiquePhoneNumber] = React.useState(null);

  const [boutiqueNameError, setBoutiqueNameError] = React.useState(null);
  const [boutiqueAddressError, setBoutiqueAddressError] = React.useState(null);
  const [
    boutiqueDescriptionError,
    setBoutiqueDescriptionError,
  ] = React.useState(null);

  const [boutiqueEmailError, setBoutiqueEmailError] = React.useState(null);
  const [
    boutiquePhoneNumberError,
    setBoutiquePhoneNumberError,
  ] = React.useState(null);

  const addBoutique = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }
    const newBoutique = {
      name: boutiqueName,
      address: boutiqueAddress,
      description: boutiqueDescription,
      email: boutiqueEmail,
      phoneNumber: boutiquePhoneNumber,
    };

    axios
      .post("http://localhost:8080/api/v1/suppliers/add-supplier", newBoutique)
      .then((response) => {
        console.log(response);
        alert("Succesfully added boutique " + response.data.name);
        context.setBoutiques([...context.boutiques, boutiqueName]);
      })
      .finally(() => {
        reset();
      });
  };

  const selectBoutique = (boutique) => {
    context.setProductBoutique(boutique);
  };

  // fetch boutiques from backend on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/suppliers/names")
      .then((response) => {
        context.setBoutiques(response.data);
      });
  }, []);

  const reset = () => {
    setShowBoutiquesDialog(false);
    setBoutiqueAddressError(null);
    setBoutiqueNameError(null);
    setBoutiqueDescriptionError(null);
    setBoutiqueName(null);
    setBoutiqueAddress(null);
    setBoutiqueDescription(null);
  };

  const validate = () => {
    if (!boutiqueName || !boutiqueName.length) {
      setBoutiqueNameError("Boutique name can't be empty");
      return false;
    }
    if (context.boutiques.includes(boutiqueName)) {
      setBoutiqueNameError(
        "Boutique " + boutiqueName + " already exists. Please add new one!"
      );
      return false;
    }

    if (!boutiqueAddress || !boutiqueAddress.length) {
      setBoutiqueAddressError("Address can't be empty");
      return false;
    }

    if (!boutiqueDescription || !boutiqueDescription.length) {
      setBoutiqueDescriptionError("Description can't be empty");
      return false;
    }

    if (!boutiqueEmail || !boutiqueEmail.length) {
      setBoutiqueEmailError("Email can't be empty");
      return false;
    }

    if (!boutiquePhoneNumber || !boutiquePhoneNumber.length) {
      setBoutiquePhoneNumberError("Phone number can't be empty");
      return false;
    }
    return true;
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
        <form onSubmit={addBoutique}>
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
              value={boutiqueName}
              error={boutiqueNameError}
              helperText={boutiqueNameError}
              onChange={(event) => {
                setBoutiqueNameError(null);
                setBoutiqueName(event.target.value);
              }}
            />
            <TextField
              margin="normal"
              id="address"
              label="Address"
              type="text"
              fullWidth
              error={boutiqueAddressError}
              helperText={boutiqueAddressError}
              onChange={(event) => {
                setBoutiqueAddressError(null);
                setBoutiqueAddress(event.target.value);
              }}
            />
            <TextField
              margin="normal"
              id="email"
              label="Email"
              type="text"
              fullWidth
              error={boutiqueEmailError}
              helperText={boutiqueEmailError}
              onChange={(event) => {
                setBoutiqueEmailError(null);
                setBoutiqueEmail(event.target.value);
              }}
            />
            <TextField
              margin="normal"
              id="phoneNumber"
              label="Phone number"
              type="text"
              fullWidth
              error={boutiquePhoneNumberError}
              helperText={boutiquePhoneNumberError}
              onChange={(event) => {
                setBoutiquePhoneNumberError(null);
                setBoutiquePhoneNumber(event.target.value);
              }}
            />
            <TextField
              margin="normal"
              id="description"
              label="Description"
              type="text"
              fullWidth
              multiline
              error={boutiqueDescriptionError}
              helperText={boutiqueDescriptionError}
              onChange={(event) => {
                setBoutiqueDescriptionError(null);
                setBoutiqueDescription(event.target.value);
              }}
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
                <Button type="submit" color="primary">
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
        onChange={(event, newValue) => selectBoutique(newValue)}
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
