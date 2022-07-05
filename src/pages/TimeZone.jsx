import React, { useState } from "react";
import Iframe from "react-iframe";

// * import components
import Banner from "../components/UI/Banner";
import ContainerBox from "../components/UI/ContainerBox";
import Header from "../components/UI/Header";
import Tab from "../components/UI/Tab";
import TabContent from "../components/UI/TabContent";

// * import graphics
import TimezoneBanner from "../assets/img/timezone.png";

const TAB_NAMES = [
  "EST (Eastern Standard Time)",
  "PHST (Philippine Standard Time)",
  "CDT (Central Daylight Time)",
];

let newArrayTabName = [];
// trimme tab names for id in nav tab
const TRIMMED_TAB_NAMES = TAB_NAMES.map((tabName) => {
  let trimmedNameArray = tabName.split(" ");
  newArrayTabName.push(trimmedNameArray[0]);
});

const TimeZone = () => {
  const [activeTab, setActiveTab] = useState(`nav-${newArrayTabName[0]}-tab`);

  const changeActiveTab = (event) => {
    const tabName = event.target.getAttribute("data-tab");
    setActiveTab(tabName);
  };

  return (
    <React.Fragment>
      <Banner
        bannerTitle="Timezone"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={TimezoneBanner}
        alt="FAQ Page Banner"
      />

      <ContainerBox>
        <Header title="Timezones" />

        <Tab
          tabLists={newArrayTabName}
          activeTabName={activeTab}
          onClick={changeActiveTab}
        />
        {newArrayTabName.map((tab, index) => (
          <TabContent
            key={index}
            className={`tab-pane fade ${
              activeTab === `nav-${tab}-tab` ? "show active" : ""
            }`}
            tabNameItem={TAB_NAMES[index]}
          >
            {tab === "EST" && (
              <Iframe
                src="https://free.timeanddate.com/clock/i8e9bqkw/n179/fn14/fs100/tc90c8ac/pc90c8ac/ftb/blc90c8ac/brc90c8ac/btc90c8ac/bbc90c8ac/pl8/pr8/pt8/pb8/tt0/td2/ta1/tb4"
                frameborder="0"
                width="100%"
                height="300"
              ></Iframe>
            )}

            {tab === "PHST" && (
              <Iframe
                src="https://free.timeanddate.com/clock/i8e9bqkw/n145/fn14/fs100/tc90c8ac/pc90c8ac/ftb/blc90c8ac/brc90c8ac/btc90c8ac/bbc90c8ac/pl8/pr8/pt8/pb8/tt0/td2/ta1/tb4"
                frameborder="0"
                width="100%"
                height="300"
              ></Iframe>
            )}

            {tab === "CDT" && (
              <Iframe
                src="https://free.timeanddate.com/clock/i8e9bqkw/n64/fn14/fs100/tc90c8ac/pc90c8ac/ftb/blc90c8ac/brc90c8ac/btc90c8ac/bbc90c8ac/pl8/pr8/pt8/pb8/tt0/td2/ta1/tb4"
                frameborder="0"
                width="100%"
                height="300"
              ></Iframe>
            )}
          </TabContent>
        ))}
      </ContainerBox>
    </React.Fragment>
  );
};

export default TimeZone;
