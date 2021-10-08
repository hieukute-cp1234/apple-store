import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import { Row, Col, Card, Button, Modal, Drawer } from "antd";
import airpod from "../../service/data";
import "./style.css";

const { Meta } = Card;

const AirPod = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [checkGB, setCheckGB] = useState("64GB");

  const clickItem = (e) => {
    setVisible(true);
    setData(e);
  };

  const clickGB = (item) => {
    setCheckGB(item);
  };

  const convertItem = (arr) => {
    const newItem = arr.filter((item) => item.rom === checkGB);
    return newItem[0].price;
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Layout>
      <h1 style={{ textAlign: "center", fontSize: 30 }}>Sản phẩm bán chạy</h1>
      <Row>
        {airpod.data.map((item, index) => (
          <Col span={6} key={index} style={{ marginTop: 10 }}>
            <Card
              hoverable
              bordered={false}
              style={{ width: 250, paddingTop: "15px" }}
              cover={<img alt={item.name} src={item.image} />}
            >
              <Meta title={item.name} />
              <div className="box_GB">
                {item.type.map((detail) => (
                  <Button
                    style={{ padding: " 0 10px" }}
                    onClick={() => clickGB(detail.rom)}
                  >
                    {detail.rom}
                  </Button>
                ))}
              </div>
              <p>Giá: {convertItem(item.type).toLocaleString()}đ</p>
              <Button onClick={() => clickItem(item)} type="primary">
                Chi tiết sản phẩm
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Drawer
        placement="top"
        width="100%"
        height="100%"
        onClose={onClose}
        visible={visible}
      >
        <p>{data.name}</p>
      </Drawer>
    </Layout>
  );
};

export default React.memo(AirPod);
