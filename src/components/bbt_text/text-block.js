import parse from "html-react-parser";

function TextBlock(props) {
  return (
    <div className={`c-text-block ${props.light ? "light" : ""}`}>
      <div className={"text-container"}>
        <h1>{props.h1}</h1>
        <p>{parse(props.p)}</p>
      </div>
    </div>
  );
}

export default TextBlock;
