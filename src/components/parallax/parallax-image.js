import { Parallax } from "react-parallax";

function ParallaxImage(props) {
  return (
    <div className={"c-parallax-image"}>
      <Parallax
        bgImage={props.image}
        bgImageAlt=""
        strength={600}
        bgImageStyle={{ width: "100%", objectFit: "cover", top: "-200px" }}
      >
        <div style={{ height: "1000px" }} />
      </Parallax>
    </div>
  );
}

export default ParallaxImage;
