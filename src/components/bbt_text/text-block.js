function TextBlock(props) {
  return (
    <div className={"c-text-block"}>
      <div className={"text-container"}>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
    </div>
  );
}

export default TextBlock;
