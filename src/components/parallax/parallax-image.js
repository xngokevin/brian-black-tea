import { Parallax } from "react-parallax";

function ParallaxImage(props) {
  return (
    <div className={"c-parallax-image"}>
      <Parallax
        bgImage={props.image}
        bgImageAlt=""
        strength={800}
        bgImageStyle={{ height: "100%", objectFit: "cover" }}
      >
        <div style={{ paddingBottom: "82.5%" }} />
      </Parallax>
    </div>
  );
}

export default ParallaxImage;
