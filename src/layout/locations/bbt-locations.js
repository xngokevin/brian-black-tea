import { Container } from "react-bootstrap";
import { Location } from "../../components";

function BbtLocations(props) {
  var locations = props.locations;

  return (
    <div className={"l-bbt-locations"}>
      <Container>
        <div className={"row"}>
          {locations.map(function (location, index) {
            return (
              <div className={"col-sm-12 col-md-6"} key={location.id}>
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
