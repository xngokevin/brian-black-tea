import { Row } from "react-bootstrap";
import { TextBlock } from "../index";
import teaLeaves from "./../../assets/images/bbt/tea-leaves.jpg";

function ThreeColText(props) {
  return (
    <div className={"c-three-col-text"}>
      <div className={"container-fluid"}>
        <Row>
          <div
            className={"col-sm-12 col-lg-4 d-none d-lg-block image-container"}
          >
            <img src={teaLeaves} alt={"col-image"} />
          </div>
          <div className={"col-sm-12 col-lg-4"}>
            <TextBlock
              h1={"About Us"}
              p={
                "Established in 2005 in Taiwan, Brian Black Tea is committed to\n" +
                "              bringing exceptional black tea tasting experience to the world. By\n" +
                "              using premium ingredients and artisanal tea brewing craft, we are\n" +
                "              proud to share these incredible drinks with you, showing you the\n" +
                "              true beauty of black tea."
              }
            />
          </div>
          <div className={"col-sm-12 col-lg-4 image-container"}>
            <img src={teaLeaves} alt={"col-image"} />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default ThreeColText;
