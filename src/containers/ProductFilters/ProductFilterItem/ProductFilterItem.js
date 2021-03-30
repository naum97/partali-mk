import React from "react";
import Collapsible from "react-collapsible";
const ProductFilterItem = (props) => {
  return (
    <React.Fragment>
      <Collapsible
        transitionTime={300}
        trigger={
          <div>
            <span>{props.triggerTitle} </span>
          </div>
        }
      >
        {props.children}
      </Collapsible>
      <div style={{ width: "100%", borderTop: "1px solid black" }}></div>
    </React.Fragment>
  );
};

export default ProductFilterItem;
