import React from 'react'

const LeftPhotoCard = (props) => {
  return (
    <div id="left-photo-card" className="container mb-5">
      <div className="row">
        <div className="col-md-6" id="left-photo-card__image">
          <img
            src={props.photoImage}
            className="img-fluid"
            alt={props.alt}
          />
        </div>
        <div className="col-md-6" id="left-photo-card__content">
          <h4 className="display-6 fw-bold text-uppercase">{props.title}</h4>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default LeftPhotoCard
