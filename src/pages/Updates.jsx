import React, { useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../components/UI/Banner";
import Header from "../components/UI/Header";
import Tab from "../components/UI/Tab";
import TabContent from "../components/UI/TabContent";
import Table from "../components/UI/Table";

import updateBanner from "../assets/img/update.png";

const TAB_NAMES = ["General", "Client"];
const TABLE_HEADERS = ["Name", "Action"];

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
        bannerDescription="The DG3 Portal aims to help the production by providing copies
        of updates, procedures, news and other important EDGAR information. Templates and codes are also provided to help EDGAR staffs maintain and maximize consistency in every job."
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
                <td>Sample 1</td>
                <td>
                  <Link to="/" className="btn btn-outline-primary">
                    View
                  </Link>
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
