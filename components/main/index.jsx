
import React from 'react';
import { Divider } from "antd";
import Aside from "./Aside";
import ItemCard from "./ItemCard";
import Style from "./index.module.css";


export default function Main () {
  const products = [
    {
      imgSrc:
        "/clothes_1.png",
      title: "Avo",
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.",
    },
    {
      imgSrc:
        "/clothes_2.png",
      title: "Bubble",
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.",
    },
    {
      imgSrc:
        "/clothes_3.png",
      title: "Creemee",
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.",
    },
    {
      imgSrc:
        "/clothes_4.png",
      title: "Film",
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.",
    },
    {
      imgSrc:
        "/clothes_5.png",
      title: "Watermelon",
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.",
    },
    {
      imgSrc:
        "/clothes_6.png",
      title: "Pineapple",
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.",
    },
  ];

  return (
    <div className={Style.outer}>
      <div> <Aside></Aside></div>
      <div>
        <Divider>SHOP ALL PRODUCTS</Divider>
        <div className={Style.inner}>
          {
            products.map((product, index) => {
              return <ItemCard {...product} key={index} />;
            }
            )
          }
        </div>

      </div>
    </div>
  );
}

