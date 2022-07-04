import React from "react";

const Tab = (props) => {
  return (
    <React.Fragment>
      <nav className="mt-3">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {props.tabLists.map((tab, index) => (
            <button
              key={index}
              className={`nav-link ${
                props.activeTabName === `nav-${tab}-tab` ? "active" : ""
              }`}
              id={`nav-${tab}`}
              data-bs-toggle="tab"
              data-bs-target={`#nav-${tab}-tab`}
              type="button"
              role="tab"
              aria-controls={`nav-${tab}`}
              aria-selected="true"
              data-tab={`nav-${tab}-tab`}
              onClick={props.onClick}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Tab;
