import { Container } from "react-bootstrap";
import { Location } from "../../components";

const locations = [
  {
    title: "Fremont",
    city: "Fremont",
    address: "123 Losem Street",
    state: "CA",
    zip: "95111",
    phone: "123.456.7890",
    image: require("./../../assets/images/bbt/bbt-inner.png"),
    operatingHours: [
      {
        title: "Mon - Fri",
        hours: "12pm - 10pm",
      },
      {
        title: "Sat - Sun",
        hours: "11am - 11pm",
      },
    ],
  },
  {
    title: "Fremont",
    city: "Fremont",
    address: "123 Losem Street",
    state: "CA",
    zip: "95111",
    phone: "123.456.7890",
    image: require("./../../assets/images/bbt/bbt-inner.png"),
    operatingHours: [
      {
        title: "Mon - Fri",
        hours: "12pm - 10pm",
      },
      {
        title: "Sat - Sun",
        hours: "11am - 11pm",
      },
    ],
  },
];

function BbtLocations(props) {
  return (
    <div className={"l-bbt-locations"}>
      <Container>
        <div className={"row"}>
          {locations.map(function (location) {
            return (
              <div className={"col-sm-12 col-md-6"}>
                <Location location={location} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default BbtLocations;
