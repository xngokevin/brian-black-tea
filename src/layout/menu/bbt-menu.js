import { Container, Row } from "react-bootstrap";
import React from "react";
import { Modifications, TeaSelection } from "../../components";

function BbtMenu(props) {
  const menu = props.menuSections;

  return (
    <div className={"l-bbt-menu"}>
      <Container>
        <Row>
          <div className={"col-sm-12 col-md-6"}>
            <TeaSelection menu={menu[0]} />
          </div>
          <div className={"col-sm-12 col-md-6"}>
            <TeaSelection menu={menu[1]} />
          </div>
        </Row>
        <div
          className={"horizontal-bar d-none justify-content-between d-md-flex"}
        >
          <div className={"bar"} />
          <div className={"bar"} />
        </div>
        <Row>
          <div className={"col-sm-12 col-md-6"}>
            <TeaSelection menu={menu[2]} />
          </div>
          <div className={"col-sm-12 col-md-6"}>
            <Modifications />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default BbtMenu;
