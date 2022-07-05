import React from "react";
import Clipboard from "react-clipboard.js";

// * import components
import Banner from "../components/UI/Banner";
import ContainerBox from "../components/UI/ContainerBox";
import Header from "../components/UI/Header";

// * import global functions
import { successNotify } from "../assets/js/GlobalFunctions/notify";

// * import array variables
import { formTypeList } from "../components/ArrayVariables/form-type-list";

// * import graphics
import FormTypeBanner from "../assets/img/formtype.png";
import Table from "../components/UI/Table";

const FormType = () => {
  const onNotify = () => {
    successNotify("Copied to Clipboard");
  };

  return (
    <React.Fragment>
      <Banner
        bannerTitle="Form Type Database"
        bannerDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium saepe officiis cum vel. Explicabo, numquam. Similique veritatis soluta magnam alias necessitatibus voluptas obcaecati incidunt quos voluptate. Sunt, optio quam."
        bannerImage={FormTypeBanner}
        alt="Form Type Page Banner"
      />

      <ContainerBox>
        <Header title="Form Types" />

        <Table tableHeaders={["Form Type", "Description", "Action"]}>
          {formTypeList.map((formtype, index) => (
            <tr>
              <td>{formtype.label}</td>
              <td>{formtype.description}</td>
              <td>
                <Clipboard
                  className="btn btn-outline-primary copy-clipboard"
                  data-clipboard-text={formtype.description}
                  onClick={onNotify}
                >
                  Copy
                </Clipboard>
              </td>
            </tr>
          ))}
        </Table>
      </ContainerBox>
    </React.Fragment>
  );
};

export default FormType;
