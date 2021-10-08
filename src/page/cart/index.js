import React, { useState } from "react";
import { Row, Col, Image, InputNumber, Button } from "antd";
import Layout from "../../layouts/Layout";
import { useHistory } from "react-router-dom";
import "./style.css";

const ListCarts = () => {
  const history = useHistory();
  const [dataCart, setDataCart] = useState([
    {
      id: 1,
      name: "Apple Watch SE",
      image:
        "https://cdn.tgdd.vn/Products/Images/7077/234918/se-40mm-vien-nhom-day-cao-su-hong-thumb-1-600x600.jpg",
      price: 7731000,
      qty: 3,
    },
    {
      id: 2,
      name: "Apple Watch S6",
      image:
        "https://cdn.tgdd.vn/Products/Images/7077/229044/apple-watch-s6-40mm-vien-nhom-day-cao-su-do-thumb-600x600.jpg",
      price: 9472000,
      qty: 1,
    },
  ]);

  const goBack = () => {
    history.goBack();
  };
  const gotoCheckout = () => {};

  const changeItemQtyCart = (id, qty) => {};

  const deleteItemCart = (id) => {};

  const totalMoney = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const sum = parseInt(arr[i].price) * arr[i].qty;
      return sum;
    }
  };

  return (
    <Layout>
      {dataCart.length > 0 ? (
        dataCart.map((item, index) => (
          <Row
            key={index}
            style={{
              margin: "20px 0px",
              borderBottom: "1px solid #ccc",
              padding: "5px 0px",
            }}
          >
            <Col span={8}>
              <Image width={200} src={item.image} />
            </Col>
            <Col span={8} offset={3} style={{ padding: "8px" }}>
              <h3>{item.name}</h3>
              <p>Price : {parseInt(item.price).toLocaleString()}</p>
              <p>Money: {(parseInt(item.price) * item.qty).toLocaleString()}</p>
              <InputNumber
                min={1}
                max={10}
                defaultValue={item.qty}
                onChange={(val) => changeItemQtyCart(item.id, val)}
              />
              <Button type="dashed" onClick={() => deleteItemCart(item.id)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))
      ) : (
        <div className="box_data">
          <img
            width={300}
            src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
            alt="#"
          />
          <p className="text_data">
            Không có sản phẩm nào trong giỏ hàng của bạn
          </p>
          <button className="button_data" onClick={goBack}>
            Tiếp tục mua sắm
          </button>
        </div>
      )}
      {dataCart.length > 0 ? (
        <Row>
          <Col span={12}>
            <h2 style={{ textAlign: "right" }}>
              Tong tien: {totalMoney(dataCart).toLocaleString()}
            </h2>
            <Button
              onClick={() => gotoCheckout()}
              type="primary"
              style={{ float: "right" }}
            >
              {" "}
              Thanh Toan Ngay
            </Button>
          </Col>
        </Row>
      ) : null}
    </Layout>
  );
};
export default React.memo(ListCarts);
