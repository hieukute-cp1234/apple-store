import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import { Row, Col, Card, Button, Modal } from "antd";
import { data } from "../../service/watch";
import "./style.css";

const { Meta } = Card;

const AirPod = () => {
  const [visible, setVisible] = useState(false);
  //const [data, setData] = useState([]);

  const clickItem = (e) => {
    // setVisible(true);
    // setData(e);
  };

  return (
    <Layout>
      <Row>
        {data.map((item, index) => (
          <Col span={6} key={index} style={{ marginTop: 10 }}>
            <Card
              hoverable
              bordered={false}
              style={{ width: 250, paddingTop: "15px" }}
              cover={<img alt={item.name} src={item.image} />}
            >
              <Meta title={item.name} />
              <p>Giá: {item.price.toLocaleString()}đ</p>
              <Button onClick={() => clickItem(item)} type="primary">
                Chi tiết sản phẩm
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
        <p>{data.name}</p>
      </Modal>
    </Layout>
  );
};

export default React.memo(AirPod);
