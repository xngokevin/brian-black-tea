import circle100Image from "./../../assets/images/icons/circle-100.svg";
import circle80Image from "./../../assets/images/icons/circle-80.svg";
import circle0Image from "./../../assets/images/icons/circle-0.svg";

import iceRegImage from "./../../assets/images/icons/ice-reg.svg";
import iceLessImage from "./../../assets/images/icons/ice-less.svg";
import iceHalfImage from "./../../assets/images/icons/ice-half.svg";
import iceLittleImage from "./../../assets/images/icons/ice-little.svg";
import iceNoneImage from "./../../assets/images/icons/ice-none.svg";

function Modifications(props) {
  const menu = props.menu;

  return (
    <div className={"c-modifications"}>
      <div className={"modification-wrapper"}>
        <h2 className={"font-weight-bold"}>Sweetness Level</h2>
        <h3>甜度</h3>
        <div className={"d-flex flex-row justify-content-between"}>
          <div className={"d-flex flex-column"}>
            <img
              className={"circle-image"}
              src={circle100Image}
              alt={"circle-100"}
            />
            <div className={"align-self-center font-weight-bold"}>100%</div>
          </div>
          <div className={"d-flex flex-column"}>
            <img
              className={"circle-image"}
              src={circle80Image}
              alt={"circle-80"}
            />
            <div className={"align-self-center font-weight-bold"}>80%</div>
          </div>
          <div className={"d-flex flex-column"}>
            <img
              className={"circle-image"}
              src={circle100Image}
              alt={"circle-50"}
            />
            <div className={"align-self-center font-weight-bold"}>50%</div>
          </div>
          <div className={"d-flex flex-column"}>
            <img
              className={"circle-image"}
              src={circle100Image}
              alt={"circle-30"}
            />
            <div className={"align-self-center font-weight-bold"}>30%</div>
          </div>
          <div className={"d-flex flex-column"}>
            <img
              className={"circle-image"}
              src={circle0Image}
              alt={"circle-0"}
            />
            <div className={"align-self-center font-weight-bold"}>0%</div>
          </div>
        </div>
      </div>
      <div className={"modification-wrapper"}>
        <h2 className={"font-weight-bold"}>Ice Level</h2>
        <h3>冰量</h3>
        <div className={"d-flex flex-row justify-content-between"}>
          <div className={"d-flex flex-column"}>
            <img
              className={"ice-image"}
              src={iceRegImage}
              alt={"ice-regular"}
            />
            <div className={"align-self-center font-weight-bold text-center"}>
              Reg
              <br />
              Ice
            </div>
          </div>
          <div className={"d-flex flex-column"}>
            <img className={"ice-image"} src={iceLessImage} alt={"ice-less"} />
            <div className={"align-self-center font-weight-bold text-center"}>
              Less
              <br />
              Ice
            </div>
          </div>
          <div className={"d-flex flex-column"}>
            <img className={"ice-image"} src={iceHalfImage} alt={"ice-half"} />
            <div className={"align-self-center font-weight-bold text-center"}>
              Half
              <br />
              Ice
            </div>
          </div>
          <div className={"d-flex flex-column"}>
            <img
              className={"ice-image"}
              src={iceLittleImage}
              alt={"ice-little"}
            />
            <div className={"align-self-center font-weight-bold text-center"}>
              Little
              <br />
              Ice
            </div>
          </div>
          <div className={"d-flex flex-column"}>
            <img className={"ice-image"} src={iceNoneImage} alt={"ice-none"} />
            <div className={"align-self-center font-weight-bold text-center"}>
              No
              <br />
              Ice
            </div>
          </div>
        </div>
      </div>
      <div className={"modification-wrapper"}>
        <h2 className={"font-weight-bold"}>Toppings</h2>
        <h3></h3>
        <div className={"d-flex flex-row flex-wrap"}>
          <h4 className={"w-50"}>Boba 粉圓</h4>
          <h4 className={"w-50"}>Crema 雲朵</h4>
          <h4 className={"w-50"}>More Coming Soon</h4>
        </div>
      </div>
    </div>
  );
}

export default Modifications;
