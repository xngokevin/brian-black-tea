import { Row } from "react-bootstrap";
import { TextBlock } from "../index";

function TwoColText(props) {
  return (
    <div className={"c-two-col-text"}>
      <div className={"container-fluid"}>
        <Row className={`${props.reverse ? "flex-row-reverse" : ""}`}>
          <div className={"col-sm-12 col-lg-6"}>
            <TextBlock h1={props.h1} p={props.p} light={props.light} />
          </div>
          <div className={"col-sm-12 col-lg-6 image-container"}>
            <img src={props.image} alt={"col-image"} />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default TwoColText;
