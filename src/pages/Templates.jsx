import React, { useState } from "react";
import { Link } from "react-router-dom";

// * components
import Banner from "../components/UI/Banner";
import Tab from "../components/UI/Tab";
import TabContent from "../components/UI/TabContent";
import Table from "../components/UI/Table";
import Header from "../components/UI/Header";

// * array variables
import { downloadableList } from "../components/ArrayVariables/downloadable-list";
import { copyCodesList } from "../components/ArrayVariables/copy-codes-list";
import { proceduresList } from "../components/ArrayVariables/procedures-list";

// * fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faFilePdf,
  faFileWord,
  faFileExcel,
} from "@fortawesome/free-regular-svg-icons";

// * graphics
import TemplateBanner from "../assets/img/templates.png";

const TAB_NAMES = ["Downloadable", "Copy Codes", "Procedures"];
const TABLE_HEADERS = ["Name"];

const Templates = () => {
  const [activeTab, setActiveTab] = useState(`nav-${TAB_NAMES[0]}-tab`);

  const changeActiveTab = (event) => {
    const tabName = event.target.getAttribute("data-tab");
    setActiveTab(tabName);
  };

  const downloadableContents = downloadableList.map((downloadable, index) => (
    <tr key={index}>
      <td>
        {downloadable.type === "pdf" && <FontAwesomeIcon icon={faFilePdf} />}
        {downloadable.type === "word" && <FontAwesomeIcon icon={faFileWord} />}
        {downloadable.type === "excel" && (
          <FontAwesomeIcon icon={faFileExcel} />
        )}
        <Link to={downloadable.location}> &nbsp;{downloadable.name}</Link>
      </td>
    </tr>
  ));

  const copyCodesContents = copyCodesList.map((code, index) => (
    <tr key={index}>
      <td>
        <FontAwesomeIcon icon={faFileCode} style={{ color: "#F66B0E" }} />
        <Link to={code.location}> &nbsp;{code.name}</Link>
      </td>
    </tr>
  ));

  const proceduresContents = proceduresList.map((procedure, index) => (
    <tr key={index}>
      <td>
        {procedure.type === "pdf" && <FontAwesomeIcon icon={faFilePdf} />}
        {procedure.type === "word" && <FontAwesomeIcon icon={faFileWord} />}
        {procedure.type === "excel" && <FontAwesomeIcon icon={faFileExcel} />}
        <Link to={procedure.location}> &nbsp;{procedure.name}</Link>
      </td>
    </tr>
  ));

  return (
    <React.Fragment>
      <Banner
        bannerTitle="Template"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={TemplateBanner}
        alt="Template Page Banner"
      />

      <div className="container mb-5">
        <Header title="Templates" />
        <Tab
          tabLists={TAB_NAMES}
          activeTabName={activeTab}
          onClick={changeActiveTab}
        />
        {TAB_NAMES.map((tab, index) => (
          <TabContent
            key={index}
            className={`tab-pane fade ${
              activeTab === `nav-${tab.trim()}-tab` ? "show active" : ""
            }`}
            tabNameItem={tab}
          >
            <Table tableHeaders={TABLE_HEADERS}>
              {tab === "Downloadable" && downloadableContents}
              {tab === "Copy Codes" && copyCodesContents}
              {tab === "Procedures" && proceduresContents}
            </Table>
          </TabContent>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Templates;
