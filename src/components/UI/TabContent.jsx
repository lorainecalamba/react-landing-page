import React from "react";

const TabContent = (props) => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div
        className={props.className}
        id={`nav-${props.tabNameItem}-tab`}
        role="tabpanel"
        aria-labelledby={`nav-${props.tabNameItem}-tab`}
      >
        <h5 className="display-6 fw-bold mt-4 mb-4">{props.tabNameItem}</h5>

        {props.children}
      </div>
    </div>
  );
};

export default TabContent;
