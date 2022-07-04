import React from 'react';
import BottomWaves from './BottomWaves';

const Banner = (props) => {
  return (
    <React.Fragment>
      <div id="banner">
        <div className="container p-5">
          <div className="row text-white">
            <div className="col-md-6 col-sm-12">
              <h1 className="display-4 fw-normal text-uppercase">{props.bannerTitle}</h1>
              <p className="lead fw-normal">
                {props.bannerDescription}
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src={props.bannerImage}
                className="img-fluid d-none d-sm-none d-md-block"
                alt={props.alt}
              />
            </div>
          </div>
        </div>
      </div>
      <BottomWaves/>
    </React.Fragment>
  )
}

export default Banner
