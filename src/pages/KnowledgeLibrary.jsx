import React from "react";
import { Link } from "react-router-dom";

// * components
import Banner from "../components/UI/Banner";
import Header from "../components/UI/Header";
import Table from "../components/UI/Table";

// * ArrayVariables
import { knowledgeLists } from "../components/ArrayVariables/knowledge-library-list";

// * fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faFilePdf,
  faFileWord,
  faFileExcel,
} from "@fortawesome/free-regular-svg-icons";

// * images
import knowledgeBanner from "../assets/img/knowledge.png";

const TABLE_HEADERS = ["Title"];
const knowledge = knowledgeLists.map((list, index) => (
  <tr key={index}>
    <td>
      {list.type === "pdf" && <FontAwesomeIcon icon={faFilePdf} />}
      {list.type === "word" && <FontAwesomeIcon icon={faFileWord} />}
      {list.type === "excel" && <FontAwesomeIcon icon={faFileExcel} />}
      <Link to="/"> &nbsp;{list.name}</Link>
    </td>
  </tr>
));

const KnowledgeLibrary = () => {
  return (
    <React.Fragment>
      <Banner
        bannerTitle="Knowledge Library"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={knowledgeBanner}
        alt="Knowledge Page Banner"
      />

      <div className="container mb-5">
        <Header title="Knowledge Library" />

        <Table tableHeaders={TABLE_HEADERS}>{knowledge}</Table>
      </div>
    </React.Fragment>
  );
};

export default KnowledgeLibrary;
