import React from "react";

// * import components
import Header from "../components/UI/Header";
import Banner from "../components/UI/Banner";
import ContainerBox from "../components/UI/ContainerBox";
import RightPhotoCard from "../components/UI/RightPhotoCard";
import LeftPhotoCard from "../components/UI/LeftPhotoCard";
import PhotoCardList from "../components/Home/PhotoCardList";
import MiniTime from "../components/Home/MiniTime";
import AboutEdgar from "../components/Home/AboutEdgar";

// * import graphics
import homeBanner from "../assets/img/online.png";
import LinkPhotoImage from "../assets/img/links.png";
import FederalPhotoImage from "../assets/img/federal.png";

// * import array list
import { federalLinksList } from "../components/ArrayVariables/federal-links";
import { edgarLinksList } from "../components/ArrayVariables/edgar-links";
import { edgarToolsList } from "../components/ArrayVariables/edgar-tools-links";
import { miniTimeZoneList } from "../components/ArrayVariables/mini-timezone";

const Home = () => {
  return (
    <React.Fragment>
      <Banner
        bannerTitle="Home"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={homeBanner}
        alt="Home Page Banner"
      />

      <ContainerBox>
        <LeftPhotoCard
          title="Federal Holiday"
          photoImage={FederalPhotoImage}
          alt="Federal Image"
        >
          <ul id="list-of-federal-holidays">
            {federalLinksList.map((list, index) => (
              <li key={index} className={list.current ? "current" : ""}>
                {list.holiday}
              </li>
            ))}
          </ul>
        </LeftPhotoCard>

        <RightPhotoCard
          title="Links"
          photoImage={LinkPhotoImage}
          alt="Links Image"
        >
          <PhotoCardList arrayList={edgarLinksList} />
        </RightPhotoCard>

        <LeftPhotoCard
          title="Tools"
          photoImage={FederalPhotoImage}
          alt="Federal Image"
        >
          <PhotoCardList arrayList={edgarToolsList} />
        </LeftPhotoCard>
      </ContainerBox>

      {/* * ABOUT SEC */}
      <AboutEdgar />

      <ContainerBox>
        <div className="row">
          <Header title="Time and Date" />
          {miniTimeZoneList.map((timezone, index) => (
            <div className="col-md-4 text-center mt-5" key={index}>
              <MiniTime src={timezone.src} title={timezone.title} />
            </div>
          ))}
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};

export default Home;
