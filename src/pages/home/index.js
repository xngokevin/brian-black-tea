import React, { Component } from "react";
import Header from "./../../parts/header";

class Home extends Component {
  state = {
    title: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Component mojnted");
    this.setState({ title: "Hello" }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className={"container"}>
        {this.state.title ? this.state.title : ""}
        <Header></Header>
      </div>
    );
  }
}

export default Home;
