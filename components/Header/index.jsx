import { Button, Image, Input, Modal, message, Empty } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Style from "./index.module.css";
import React from "react";
import PubSub from 'pubsub-js';
import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";

message.config({
  top: "20vh",
  duration: 0.5,
});

export default function Header () {
  const [count, setCount] = useState(0);//count代表不同种类的个数:title 和 size决定
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productClassCount, setProductClassCount] = useState({}); //{a:{age:"",name:""}}
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let pubId = PubSub.subscribe("addProduct", function (_, productData) {
      const { title, size, price } = productData;
      let productName = `${title} ${size}`;
      let number = 0;

      if (!(productName in productClassCount)) {
        number = 1;

        let o = { ...productData, number, id: nanoid() };//每次在数组后面添加则id代表了在数组中的位置
        setProductClassCount(() => {
          productClassCount[productName] = o;
          return JSON.parse(JSON.stringify(productClassCount));
        });

        setCount(count + 1);

      } else {

        setProductClassCount(() => {
          productClassCount[productName].number += 1;
          return JSON.parse(JSON.stringify(productClassCount));
        });
      }

      setTotalPrice(parseInt(totalPrice) + parseInt(price.slice(1)));
    });
    return () => {
      PubSub.unsubscribe(pubId);
    };
  });



  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddClick = (title, size, price) => {
    let productName = `${title} ${size}`;
    setProductClassCount(() => {
      productClassCount[productName].number++; //有时候开发模式下，调试的时候会出现+2的情况，serve模式下是正常的
      return JSON.parse(JSON.stringify(productClassCount));
    });

    message.success({
      content: '添加成功',
    });

    setTotalPrice(totalPrice + parseInt(price.slice(1)));
  };

  const handleDecrementClick = (title, size, price) => {
    let productName = `${title} ${size}`;
    if (productClassCount[productName].number > 1) {
      setProductClassCount(() => {
        productClassCount[productName].number -= 1;
        return JSON.parse(JSON.stringify(productClassCount));
      });
    } else {
      //从列表中删除
      setProductClassCount(() => {
        delete productClassCount[productName];
        return JSON.parse(JSON.stringify(productClassCount));
      });

      setCount(count - 1);
    }

    message.success({
      content: '减少成功',
    });

    setTotalPrice(totalPrice - parseInt(price.slice(1)));
  };

  const handleClearClick = () => {
    setProductClassCount(() => {
      productClassCount = {};
      return JSON.parse(JSON.stringify(productClassCount));
    });

    setCount(0);
    setTotalPrice(0)
  };

  return (
    <div className={Style.outer}>
      <Image
        src="/logo.png"
        width="80px"
        height="80px"
      />
      <div className={Style.inner}>
        <Input suffix={<SearchOutlined />} className={Style.input} />
        <Button
          type="primary"
          icon={<ShoppingCartOutlined className={Style.icon} />}
          className={Style.button}
          size="large"
          onClick={showModal}
        >
          {count}
        </Button>
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div >
            {
              Object.values(productClassCount).map(({ size, imgSrc, title, price, number, id }) => {
                return (
                  <div key={id} style={{ position: "relative", height: "150px", borderBottom: "1px solid darkgray", marginBottom: "10px" }}>
                    <Image src={imgSrc} width={80} style={{ position: "absolute", marginRight: "10px" }} />
                    <div style={{ position: "absolute", marginRight: "10px", left: "80px" }}>
                      <h3>{title}</h3>
                      <p>{size}</p>
                      <div>
                        <Button onClick={() => handleDecrementClick(title, size, price)} danger size="large" style={{ marginRight: "5px" }}>-</Button>
                        <Input value={number} style={{ width: "50px", marginRight: "5px", textAlign: "center" }} size="large" />
                        <Button onClick={() => handleAddClick(title, size, price)} type="primary" size="large" style={{ marginRight: "5px" }}>+</Button>
                      </div>
                    </div>
                    <h2 style={{ position: "absolute", right: "60px", bottom: "10px" }}>{"$" + price.slice(1) * number} </h2>
                  </div>
                );
              })
            }
          </div>
          <div style={{ position: "relative", marginBottom: "10px", height: "30px", display: count == 0 ? "none" : "block" }}>
            <Button style={{ borderColor: "red", backgroundColor: "white", position: "absolute", left: "80px" }} onClick={handleClearClick}>Empty Cart</Button>
            <h2 style={{ position: "absolute", right: "60px" }}>${totalPrice}</h2>
          </div>
          <Empty description="当前购物车为空! " style={{ display: count == 0 ? "block" : "none" }} />
        </Modal>
      </div>
    </div>
  );
}
