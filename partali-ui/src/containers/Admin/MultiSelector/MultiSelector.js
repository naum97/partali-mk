import React, { useContext } from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const filter = createFilterOptions();
const useStyles = makeStyles((theme) => ({
  multiSelect: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
}));

const MultiSelector = (props) => {
  const handleChange = (newValue) => {
    props.selected(newValue);
    const newArray = newValue.filter((item) => !props.list.includes(item));
    if (!Array.isArray(newArray) || !newArray.length) {
      return;
    }
    console.log(newArray);
    props.handleSelections([...props.list, newArray.join(",")]);
  };
  const classes = useStyles();
  return (
    <Autocomplete
      multiple
      handleHomeEndKeys
      clearOnBlur
      selectOnFocus
      filterSelectedOptions
      className={classes.multiSelect}
      options={props.list.map((option) => option)}
      freeSolo
      onChange={(event, newValue) => handleChange(newValue)}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        if (params.inputValue !== "") {
          filtered.push(`Add "${params.inputValue}"`);
        }

        return filtered;
      }}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          var label = option.includes("Add") ? option.split('"')[1] : option;
          return (
            <Chip
              variant="outlined"
              label={label}
              {...getTagProps({ index })}
              icon={
                props.colorFilter ? (
                  <div
                    style={{
                      backgroundColor: label,
                      borderRadius: "50%",
                      height: "20px",
                      width: "20px",
                    }}
                  ></div>
                ) : null
              }
            />
          );
        })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={props.label}
          placeholder={props.label}
        />
      )}
    />
  );
};

export default MultiSelector;
