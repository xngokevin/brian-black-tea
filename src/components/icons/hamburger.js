function Hamburger(props) {
  return (
    <div className={"c-hamburger"}>
      <div
        className={`hamburger ${props.open ? "open" : ""}`}
        onClick={props.setNavbarCollapse}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default Hamburger;
