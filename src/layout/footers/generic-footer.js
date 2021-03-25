import logoImage from "./../../assets/images/bbt-logo.png";
import fbIcon from "./../../assets/images/icons/ic-fb.svg";
import igIcon from "./../../assets/images/icons/ic-ig.svg";
import twIcon from "./../../assets/images/icons/ic-tw.svg";
import yelpIcon from "./../../assets/images/icons/ic-yelp.svg";

function GenericFooter(props) {
  return (
    <div className={"l-generic-footer"}>
      <div className={"container"}>
        <div className={"d-flex flex-column"}>
          <a href={"/"}>
            <img className={"logo-img"} src={logoImage} alt={"logo"} />
          </a>
          <div className={"socials-container d-flex flex-row"}>
            <a className={"social-icon"} href={""}>
              <img src={fbIcon} alt={"facebook"} />
            </a>
            <a className={"social-icon"} href={""}>
              <img src={yelpIcon} alt={"yelp"} />
            </a>
            <a className={"social-icon"} href={""}>
              <img src={igIcon} alt={"facebook"} />
            </a>
            <a className={"social-icon"} href={""}>
              <img src={twIcon} alt={"facebook"} />
            </a>
          </div>
          <div className={"contact-container"}>
            <div>Tel: 123.456.7890</div>
            <div>general@brianblackteausa.com</div>
          </div>
          <span>2020 by Brian Black Tea.</span>
        </div>
      </div>
    </div>
  );
}

export default GenericFooter;
