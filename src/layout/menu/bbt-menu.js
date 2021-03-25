import { Container, Row } from "react-bootstrap";
import React from "react";
import { Modifications, TeaSelection } from "../../components";

const menu = [
  {
    title: "Black Tea Series",
    chineseTitle: "紅茶系列",
    comingSoon: false,
    items: [
      {
        title: "Light Black Tea",
        chineseTitle: "輕紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Barley Black Tea",
        chineseTitle: "陽光麥香紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Iron Goddess Black Tea",
        chineseTitle: "竹山觀音紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Ceylon Black Tea",
        chineseTitle: "香禾錫蘭紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Assam Black Tea",
        chineseTitle: "魚池阿薩姆紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 550,
        largeIcedPrice: 600,
      },
      {
        title: "Earl Grey Black Tea",
        chineseTitle: "皇家伯爵紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Empress Black Tea",
        chineseTitle: "媚娘紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Era Black Tea",
        chineseTitle: "時代紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
    ],
  },
  {
    title: "Milk Tea Series",
    chineseTitle: "鮮奶茶系列",
    comingSoon: false,
    items: [
      {
        title: "Taiwan Assam Milk Tea",
        chineseTitle: "阿薩姆鮮奶茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 550,
        largeIcedPrice: 600,
      },
      {
        title: "Earl Grey Milk Tea",
        chineseTitle: "伯爵鮮奶茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Iron Goddess Milk Tea",
        chineseTitle: "觀音鮮奶茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Ceylon Milk Tea",
        chineseTitle: "香禾錫蘭紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Barley Milk Tea",
        chineseTitle: "麥香鮮奶茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Empress Milk Tea",
        chineseTitle: "媚鮮奶茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Era Milk Tea",
        chineseTitle: "時代鮮奶茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
    ],
  },
  {
    title: "Special Tea Series",
    chineseTitle: "限定系列",
    comingSoon: true,
    items: [
      {
        title: "Lemon Black Tea",
        chineseTitle: "扁實香檬紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Blueberry Black Tea",
        chineseTitle: "藍莓紅茶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
      {
        title: "Black Sugar Milk",
        chineseTitle: "黑糖鮮奶",
        mediumHotPrice: 500,
        mediumIcedPrice: 500,
        largeIcedPrice: 550,
      },
    ],
  },
];

function BbtMenu(props) {
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
        <div className={"transparent-circle"}></div>
      </Container>
    </div>
  );
}

export default BbtMenu;
