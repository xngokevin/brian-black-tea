function Blend(props) {
  const blend = props.blend;
  return (
    <div className={"c-blend"}>
      <div className={"image-container"}>
        <img className={"blend-image"} src={blend.image} alt={"blend"} />
      </div>
      <h4>{blend.title}</h4>
      <h4>{blend.chineseTitle}</h4>
    </div>
  );
}

export default Blend;
