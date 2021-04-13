import React from "react";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import classes from "./CustomSlider.module.css";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "black",
        width: "15px",
        height: "15px",
      },
      track: {
        color: "black",
      },
      rail: {
        color: "black",
      },
    },
  },
});
const CustomSlider = (props) => {
  const [value, setValue] = React.useState(props.initValues);
  const handleChange = (event, newValue) => {
    if (newValue[1] <= value[0]) return;
    if (newValue[0] >= value[1]) return;

    setValue(newValue);
  };
  return (
    <React.Fragment>
      <div className={classes.Container}>
        <ThemeProvider theme={muiTheme}>
          <Slider
            value={value}
            onChange={handleChange}
            max={1600}
            min={1000}
            step={50}
          />
        </ThemeProvider>
      </div>
      <div className={classes.SliderLabel}>
        <span>{"ден" + value[0]}</span>
        <span>{"ден" + value[1]}</span>
      </div>
    </React.Fragment>
  );
};

export default CustomSlider;
