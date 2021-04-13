import React from "react";

const WhiteContainer = (props) => {
  return (
    <div
      style={{
        borderRadius: "15px",
        backgroundColor: "white",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      {props.children}
    </div>
  );
};

export default WhiteContainer;
