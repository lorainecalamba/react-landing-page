import React from "react";

// * components
import Banner from "../components/UI/Banner";
import Header from "../components/UI/Header";
import Accordion from "../components/UI/Accordion";

// * ArrayVariables
import { faqList } from "../components/ArrayVariables/faq-list";

// * images
import FaqBanner from "../assets/img/faq.png";

const Faq = () => {
  return (
    <React.Fragment>
      <Banner
        bannerTitle="FAQ"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={FaqBanner}
        alt="FAQ Page Banner"
      />

      <div className="container mb-5">
        <Header title="Frequently Ask Questions" />

        <Accordion accordionItems={faqList} />
      </div>
    </React.Fragment>
  );
};

export default Faq;
