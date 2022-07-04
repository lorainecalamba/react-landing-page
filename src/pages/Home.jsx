import React from "react";

// * import components
import Header from "../components/UI/Header";
import Banner from "../components/UI/Banner";
import RightPhotoCard from "../components/UI/RightPhotoCard";
import LeftPhotoCard from "../components/UI/LeftPhotoCard";
import PhotoCardList from "../components/Home/PhotoCardList";
import MiniTime from "../components/Home/MiniTime";

// * import graphics
import homeBanner from "../assets/img/online.png";
import LinkPhotoImage from "../assets/img/links.png";
import FederalPhotoImage from "../assets/img/federal.png";

// * import array list
import { federalLinksList } from "../components/ArrayVariables/federal-links";
import { edgarLinksList } from "../components/ArrayVariables/edgar-links";
import { edgarToolsList } from "../components/ArrayVariables/edgar-tools-links";
import { miniTimeZoneList } from "../components/ArrayVariables/mini-timezone";
import AboutEdgar from "../components/Home/AboutEdgar";

const Home = () => {
  return (
    <React.Fragment>
      <Banner
        bannerTitle="Home"
        bannerDescription="The DG3 Portal aims to help the production by providing copies
        of updates, procedures, news and other important EDGAR information. Templates and codes are also provided to help EDGAR staffs maintain and maximize consistency in every job."
        bannerImage={homeBanner}
        alt="Home Page Banner"
      />

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

      {/* * ABOUT SEC */}
      <AboutEdgar />

      <div className="container mb-5">
        <div className="row">
          <Header title="Time and Date" />
          {miniTimeZoneList.map((timezone, index) => (
            <div className="col-md-4 text-center mt-5" key={index}>
              <MiniTime src={timezone.src} title={timezone.title} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
