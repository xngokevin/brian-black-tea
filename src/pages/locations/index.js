import React, { Component } from "react";
import { BannerText } from "../../components";
import BbtLocations from "../../layout/locations/bbt-locations";

class Locations extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Locations";
  }
  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Locations"} />
        <BbtLocations />
      </>
    );
  }
}

export default Locations;
