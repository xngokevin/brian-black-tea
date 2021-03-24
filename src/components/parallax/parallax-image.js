import { Parallax } from "react-parallax";

function ParallaxImage(props) {
  return (
    <div className={"c-parallax-image"}>
      <Parallax
        bgImage={props.image}
        bgImageAlt=""
        strength={600}
        bgImageStyle={{ height: "100%", width: "100%", objectFit: "cover" }}
      >
        <div style={{ height: "1600px" }} />
      </Parallax>
    </div>
  );
}

export default ParallaxImage;
