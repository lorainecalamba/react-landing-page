import React from "react";

const LeftPhotoCard = (props) => {
  return (
    <div id="left-photo-card">
      <div className="row">
        <div className="col-lg-6 col-md-12" id="left-photo-card__image">
          <img src={props.photoImage} className="img-fluid" alt={props.alt} />
        </div>
        <div className="col-lg-6 col-md-12" id="left-photo-card__content">
          <h4 className="display-6 fw-bold text-uppercase">{props.title}</h4>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default LeftPhotoCard;
