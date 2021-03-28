import { Row } from "react-bootstrap";
import { TextBlock } from "../index";

function ThreeColText(props) {
  return (
    <div className={"c-three-col-text"}>
      <div className={"container-fluid"}>
        <Row>
          <div
            className={"col-sm-12 col-lg-4 d-none d-lg-block image-container"}
          >
            <img src={props.image1} alt={"col-image1"} />
          </div>
          <div className={"col-sm-12 col-lg-4"}>
            <TextBlock h1={props.h1} p={props.p} />
          </div>
          <div className={"col-sm-12 col-lg-4 image-container"}>
            <img src={props.image2} alt={"col-image2"} />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default ThreeColText;
