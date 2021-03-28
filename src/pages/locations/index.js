import React, { Component } from "react";
import { BannerText } from "../../components";
import { BbtLocations } from "../../layout";

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

class Locations extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Locations";
  }
  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Locations"} />
        <BbtLocations locations={locations} />
      </>
    );
  }
}

export default Locations;
