import React, { useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../components/UI/Banner";
import Header from "../components/UI/Header";
import Tab from "../components/UI/Tab";
import TabContent from "../components/UI/TabContent";
import Table from "../components/UI/Table";

import updateBanner from "../assets/img/update.png";

// * fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faFilePdf,
  faFileWord,
  faFileExcel,
} from "@fortawesome/free-regular-svg-icons";

const TAB_NAMES = ["General", "Client"];
const TABLE_HEADERS = ["Name"];

const Updates = () => {
  const [activeTab, setActiveTab] = useState(`nav-${TAB_NAMES[0]}-tab`);

  const changeActiveTab = (event) => {
    const tabName = event.target.getAttribute("data-tab");
    setActiveTab(tabName);
  };

  return (
    <React.Fragment>
      <Banner
        bannerTitle="Updates"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={updateBanner}
        alt="Update Page Banner"
      />

      <div className="container mb-5">
        <Header title="Updates" />
        <Tab
          tabLists={TAB_NAMES}
          activeTabName={activeTab}
          onClick={changeActiveTab}
        />
        {TAB_NAMES.map((tab, index) => (
          <TabContent
            key={index}
            className={`tab-pane fade ${
              activeTab === `nav-${tab}-tab` ? "show active" : ""
            }`}
            tabNameItem={tab}
          >
            <Table tableHeaders={TABLE_HEADERS}>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faFileExcel} />
                  <Link to="/"> &nbsp;Update Name</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faFileWord} />
                  <Link to="/"> &nbsp;Update Name</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faFilePdf} />
                  <Link to="/"> &nbsp;Update Name</Link>
                </td>
              </tr>
            </Table>
          </TabContent>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Updates;
