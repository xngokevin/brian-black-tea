function PrimaryButton(props) {
  return (
    <a
      className={"btn primary-btn"}
      href={props.href}
      onClick={props.onClick}
      target={"_blank"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}

export default PrimaryButton;
