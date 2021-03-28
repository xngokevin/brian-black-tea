import { Modal } from "react-bootstrap";
import Hamburger from "../icons/hamburger";

function BlendModal(props) {
  const blend = props.blend;

  return (
    <Modal
      className={"c-blend-modal"}
      show={props.show}
      onHide={props.handleClose}
      size={"lg"}
      centered={true}
    >
      <div className={"header-close d-sm-block d-md-none"}>
        <div className={"d-flex justify-content-end"}>
          <Hamburger open={true} onClick={props.handleClose} />
        </div>
      </div>
      <Modal.Body>
        <div className={"d-sm-block d-md-none"}>
          <div className={"title-container"}>
            <h4>{blend.title}</h4>
            <h4>{blend.chineseTitle}</h4>
          </div>
          <div className={"square-image-container"}>
            <img src={blend.image} alt={"blend-image"} />
          </div>
          <p>{blend.description}</p>
        </div>
        <div className={"d-none d-md-block"}>
          <div className={"d-flex flex-row"}>
            <div className={"image-container"}>
              <img src={blend.image} alt={"blend-image"} />
            </div>
            <div className={"text-container"}>
              <Hamburger open={true} onClick={props.handleClose} />
              <div className={"title-container"}>
                <h2>{blend.title}</h2>
                <h2>{blend.chineseTitle}</h2>
              </div>
              <p>{blend.description}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BlendModal;
