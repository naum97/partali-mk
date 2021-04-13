import React from "react";

// todo: on hover add containig circle border outline
const defaultColorTitle = "Боја";
const ColorFilter = (props) => {
  let listOfColourSelectors = Object.keys(props.colours).map(
    (colour, index) => {
      return (
        <div
          className="ColorCircle"
          key={index}
          style={{ backgroundColor: `${colour}` }}
          onMouseEnter={() =>
            props.handleTitle(defaultColorTitle + `: ${props.colours[colour]}`)
          }
          onMouseLeave={() => props.handleTitle(defaultColorTitle)}
        ></div>
      );
    }
  );
  return <div className="ColorContainer">{listOfColourSelectors}</div>;
};

export default ColorFilter;
