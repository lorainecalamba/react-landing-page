import React from "react";

const Accordion = (props) => {
  return (
    <React.Fragment>
      <div className="accordion accordion-flush">
        {props.accordionItems.map((item, index) => (
          <div key={index} className="accordion-item" id="accordionFlush">
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${index}`}
              data-bs-parent="#accordionFlush"
            >
              <div
                className="accordion-body"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Accordion;
