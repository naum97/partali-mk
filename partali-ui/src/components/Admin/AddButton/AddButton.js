import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme, props) => ({
  button: {
    width: (props) => props.width,
    height: (props) => (props.height ? props.height : "auto"),
    fontSize: (props) => props.fontSize,
    backgroundColor: "#eaf7ff",
    "&:hover": {
      backgroundColor: "#b7e4ff",
    },
    borderRadius: "8px",
    margin: (props) => props.margin,
    padding: (props) => props.padding,
  },
}));

const AddButton = (props) => {
  const classes = useStyles(props);

  return (
    <Button
      size={props.size}
      variant="contained"
      color="default"
      className={classes.button}
      startIcon={props.icon}
      onClick={props.clicked}
    >
      {props.children}
    </Button>
  );
};

export default AddButton;
