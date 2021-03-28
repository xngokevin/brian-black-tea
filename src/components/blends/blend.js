import { useState } from "react";
import { BlendModal } from "../index";

function Blend(props) {
  const blend = props.blend;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={"c-blend"}>
      <div onClick={handleShow}>
        <div className={"image-container"}>
          <img className={"blend-image"} src={blend.image} alt={"blend"} />
        </div>
        <h4>{blend.title}</h4>
        <h4>{blend.chineseTitle}</h4>
      </div>
      <BlendModal show={show} handleClose={handleClose} blend={blend} />
    </div>
  );
}

export default Blend;
