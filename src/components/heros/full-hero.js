import { Container } from "react-bootstrap";

function FullHero(props) {
  return (
    <div className={"c-full-hero"}>
      <img className={"hero-img"} src={props.heroImg} alt={"hero"} />
      <Container>
        <div
          className={
            "w-100 d-flex flex-column justify-content-center align-items-center"
          }
        >
          <img className={"logo-img"} src={props.logoImg} alt={"logo"} />
        </div>
      </Container>
    </div>
  );
}

export default FullHero;
