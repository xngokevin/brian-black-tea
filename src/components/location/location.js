import { PrimaryButton } from "../index";

function Location(props) {
  var location = props.location;

  return (
    <div className={"c-location"}>
      <div className={"d-flex flex-column align-items-start"}>
        <div className={"fhd-image-container"}>
          <img src={location.image.default} alt={"location"} />
        </div>
        <h2 className={"title-container"}>{location.title}</h2>
        <div className={"address-container"}>
          <div>{location.address}</div>
          <div>
            {location.city}, {location.state} {location.zip}
          </div>
        </div>
        <div className={"phone-container"}>
          <div>{location.phone}</div>
        </div>
        <div className={"operating-hours-container"}>
          {location.operatingHours.map(function (operatingHour) {
            return (
              <div>
                <span>
                  {operatingHour.title} {operatingHour.hours}
                </span>
              </div>
            );
          })}
        </div>
        <PrimaryButton href={"https://google.com"}>
          Get Directions
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Location;
