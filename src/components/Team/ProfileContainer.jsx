import React from "react";

const ProfileContainer = (props) => {
  return (
    <React.Fragment>
      <div className="profile-card">
        <div className="profile-card__photo">
          <img src={props.userPhoto} alt="" />
        </div>
        <div className="profile-card__info">
          <h3 className="name">{props.name}</h3>
          <p className="title">CMS Specialist</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileContainer;
