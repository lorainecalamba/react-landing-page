import React from "react";
import SECLogo from "../../assets/img/sec.png";
import BottomWaves from "../UI/BottomWaves";
import TopWaves from "../UI/TopWaves";

const AboutEdgar = () => {
  return (
    <React.Fragment>
      <TopWaves />
      <div id="edgar-description">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 text-center"
              id="edgar-description__image"
            >
              <img src={SECLogo} className="img-fluid" alt="SEC Logo" />
            </div>
            <div
              className="col-lg-6 col-md-12 text-white"
              id="edgar-description__contents"
            >
              <h4 className="display-6 fw-bold">EDGAR</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae dicta iure quisquam fugit ipsum obcaecati neque
                consequatur, at, aliquid esse repellat expedita! Deserunt vitae
                impedit beatae natus voluptate consequatur itaque, sapiente sint
                eius eum dolore porro quis aperiam repellendus distinctio eaque
                dolores tempora saepe rerum minus! Esse accusamus atque
                laboriosam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomWaves />
    </React.Fragment>
  );
};

export default AboutEdgar;
