import React, { Component } from "react";
import { FullHero } from "../../components";

class Home extends Component {
  componentDidMount() {
    console.log("MOUTNIGN");
  }

  render() {
    return (
      <div>
        <FullHero />
        <div className={"container"}>Hello World!</div>
      </div>
    );
  }
}

export default Home;
