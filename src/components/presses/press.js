function Press(props) {
  var press = props.press;

  return (
    <div className={"c-press"}>
      <div className={"fhd-image-container"}>
        <img src={press.image.default} alt={"press-image"} />
      </div>
      <h2>{press.title}</h2>
      <div>{press.description}</div>
    </div>
  );
}
export default Press;
