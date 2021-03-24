import topArrowIcon from "./../../assets/images/icons/ic-top-arrow.svg";

function TopArrow(props) {
  return (
    <a className={"c-top-arrow"} onClick={props.onClick}>
      <img src={topArrowIcon} alt={"icon"} />
    </a>
  );
}

export default TopArrow;
