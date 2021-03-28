import { Container, Row } from "react-bootstrap";
import { Press } from "../../components";

function BbtPresses(props) {
  var presses = props.presses;
  return (
    <div className={"l-bbt-presses"}>
      <Container>
        <Row>
          {presses.map(function (press) {
            return (
              <div className={"col-sm-12 col-md-6"}>
                <Press press={press} />
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default BbtPresses;
