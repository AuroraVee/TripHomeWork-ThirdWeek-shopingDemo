import { Card, Select, Button, message } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from 'react';
import PubSub from 'pubsub-js';


export default function ItemCard (props) {
  const { imgSrc, title, price, description } = props;
  const { Option } = Select;
  const [selectSize, setStateValue] = useState("");

  function handleButtonClick () {
    if (!selectSize) {
      message.warning('请选择衣服的尺码! ');
    } else {
      message.success({
        content: '添加成功',
        style: {
          marginTop: '20vh',
        },
      });

      PubSub.publish('addProduct', { size: selectSize, imgSrc, title, price });
    }


  }

  function handleSelectChange (value) {
    setStateValue(value);
  }

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="product" src={imgSrc} />}
      >
        <h3>{title}</h3>
        <p style={{ color: "gray" }}>{price}</p>
        <p>{description}</p>
        <Select placeholder="Select Size" style={{ width: 180, marginBottom: "20px" }} onChange={handleSelectChange}>
          <Option value="small">small</Option>
          <Option value="medium">medium</Option>
          <Option value="large">large</Option>
        </Select>
        <Button
          icon={<ArrowRightOutlined />}
          style={{ backgroundColor: "darkgray", width: 180 }}
          onClick={handleButtonClick}
        >
          Add to Cart
        </Button>
      </Card>
    </>
  );
}




