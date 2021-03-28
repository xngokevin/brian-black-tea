import topArrowIcon from "./../../assets/images/icons/ic-top-arrow.gif";
import React from "react";

function TopArrow(props) {
  const [showTopArrow, setShowTopArrow] = React.useState(false);

  React.useEffect(() => {
    const updateTopArrow = () => {
      if (
        document.documentElement.scrollTop > 19 ||
        document.body.scrollTop > 19
      ) {
        setShowTopArrow(true);
      } else if (
        document.documentElement.scrollTop < 20 ||
        document.body.scrollTop < 20
      ) {
        setShowTopArrow(false);
      }
    };

    window.addEventListener("scroll", updateTopArrow);

    return function cleanup() {
      window.removeEventListener("scroll", updateTopArrow);
    };
  });

  return (
    <>
      {showTopArrow && (
        <a className={"c-top-arrow"} onClick={props.onClick}>
          <img src={topArrowIcon} alt={"icon"} />
        </a>
      )}
    </>
  );
}

export default TopArrow;
