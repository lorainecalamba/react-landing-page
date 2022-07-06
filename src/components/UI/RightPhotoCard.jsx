import React from "react";

const RightPhotoCard = (props) => {
  return (
    <div id="right-photo-card">
      <div className="row">
        <div className="col-lg-6 col-md-12" id="right-photo-card__content">
          <h4 className="display-6 fw-bold text-uppercase">{props.title}</h4>
          {props.children}
        </div>
        <div className="col-lg-6 col-md-12" id="right-photo-card__image">
          <img src={props.photoImage} className="img-fluid" alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default RightPhotoCard;
