import React from "react";
import ProfileContainer from "../components/Team/ProfileContainer";
import Banner from "../components/UI/Banner";
import ContainerBox from "../components/UI/ContainerBox";
import TeamBanner from "../assets/img/team.png";
import { teamList } from "../components/ArrayVariables/team.list";
import AvatarPhoto from "../assets/img/avatar.png";

const Team = () => {
  return (
    <React.Fragment>
      <Banner
        bannerTitle="Team"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={TeamBanner}
        alt="Update Page Banner"
      />
      <ContainerBox>
        <div className="row">
          {teamList.map((user, index) => (
            <div className="col-lg-3 col-md-4">
              <ProfileContainer name={user.name} userPhoto={AvatarPhoto} />
            </div>
          ))}
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};

export default Team;
