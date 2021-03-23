import Hamburger from "../icons/hamburger";

function FixedNavDrawer(props) {
  return (
    <div
      className={`c-fixed-nav-drawer ${props.isNavDrawerOpen ? "open" : ""}`}
    >
      <div className={"header"}>
        <div className={"container d-flex justify-content-end"}>
          <Hamburger
            open={props.isNavDrawerOpen}
            onClick={props.toggleNavDrawer}
          />
        </div>
      </div>
      <div className={"container"}>Hello</div>
    </div>
  );
}

export default FixedNavDrawer;
