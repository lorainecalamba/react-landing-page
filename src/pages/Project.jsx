import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";

// * import components
import Banner from "../components/UI/Banner";
import ContainerBox from "../components/UI/ContainerBox";
import Header from "../components/UI/Header";
import Table from "../components/UI/Table";

// * import array variables
import { projectList } from "../components/ArrayVariables/project-list";

// * import graphics
import ProjectBanner from "../assets/img/projects.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <React.Fragment>
      <Banner
        bannerTitle="Projects"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={ProjectBanner}
        alt="Projects Page Banner"
      />

      <ContainerBox>
        <Header title="Projects" />
        <Table tableHeaders={["Project Name"]}>
          {projectList.map((project, index) => (
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faFileCode}
                  style={{ color: "#F66B0E" }}
                />
                <Link to={project.location}> &nbsp;{project.name}</Link>
              </td>
            </tr>
          ))}
        </Table>
      </ContainerBox>
    </React.Fragment>
  );
};

export default Project;
