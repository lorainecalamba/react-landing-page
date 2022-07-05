import React, { useState } from "react";
import Banner from "../components/UI/Banner";
import Clipboard from "react-clipboard.js";

// * import components
import ContainerBox from "../components/UI/ContainerBox";
import Header from "../components/UI/Header";
import Tab from "../components/UI/Tab";
import TabContent from "../components/UI/TabContent";
import Table from "../components/UI/Table";

//  * import array variablesgi
import { unicodeList } from "../components/ArrayVariables/unicode-list";
import { styleAttributeList } from "../components/ArrayVariables/style-attribute-list";

// * import global function
import { successNotify } from "../assets/js/GlobalFunctions/notify";

// * import graphics
import CodesBanner from "../assets/img/codes.png";

const TAB_NAMES = ["UniCode Entities", "Style Attributes"];

const Codes = () => {
  const [activeTab, setActiveTab] = useState(`nav-${TAB_NAMES[0]}-tab`);

  const changeActiveTab = (event) => {
    const tabName = event.target.getAttribute("data-tab");
    setActiveTab(tabName);
  };

  const onNotify = () => {
    successNotify("Copied to Clipboard");
  };

  const unicodeContents = (
    <Table
      tableHeaders={[
        "Character",
        "Decimal Code",
        "Name",
        "Character Set",
        "Action",
      ]}
    >
      {unicodeList.map((unicode, index) => (
        <tr key={index}>
          <td>{unicode.character}</td>
          <td>
            <code>{unicode.decimalCode}</code>
          </td>
          <td>{unicode.name}</td>
          <td>{unicode.characterSet}</td>
          <td>
            <Clipboard
              className="btn btn-outline-primary copy-clipboard"
              data-clipboard-text={unicode.decimalCode}
              onClick={onNotify}
            >
              Copy
            </Clipboard>
          </td>
        </tr>
      ))}
    </Table>
  );

  const styleAttributeContents = (
    <Table tableHeaders={["Style Name", "Style Codes", "Action"]}>
      {styleAttributeList.map((style, index) => (
        <tr key={index}>
          <td>{style.name}</td>
          <td>{style.codes}</td>
          <td>
            <button
              className="btn btn-outline-primary"
              data-clipboard-text={style.codes}
            >
              Copy
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );

  return (
    <React.Fragment>
      <Banner
        bannerTitle="Codes"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={CodesBanner}
        alt="FAQ Page Banner"
      />

      <ContainerBox>
        <Header title="Codes" />
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
            {tab === "UniCode Entities" && unicodeContents}
            {tab === "Style Attributes" && styleAttributeContents}
          </TabContent>
        ))}
      </ContainerBox>
    </React.Fragment>
  );
};

export default Codes;
