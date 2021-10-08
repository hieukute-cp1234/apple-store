import React from "react";
import "./layout.css";
import { Layout, Row, Col, Menu, Dropdown, Avatar, Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

const { Header } = Layout;

const HeaderComponent = (props) => {
  const { click } = props;
  const history = useHistory();
  const { Search } = Input;

  const gotocart = () => {
    history.push("/cart");
  };

  const login = () => {
    history.push("/login");
  };

  const onSearch = () => {};

  const menu = () => (
    <Menu>
      <Menu.Item>Dương Hằng</Menu.Item>
      <Menu.Item onClick={login}>SignOut</Menu.Item>
    </Menu>
  );

  const renderAvt = () => {
    return (
      <div className="box_menu">
        <Button
          className="button_cart"
          icon={<ShoppingCartOutlined style={{ fontSize: 18 }} />}
          onClick={gotocart}
        >
          Giỏ hàng
        </Button>
        <Dropdown trigger="click" overlay={menu} placement="bottomCenter" arrow>
          <Avatar
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </div>
    );
  };

  return (
    <Header style={{ padding: "0 0 0 30px" }} className="header">
      <Row width="100%">
        <Col span={8} style={{ textAlign: "left" }}>
          <MenuOutlined onClick={click} style={{ fontSize: "20px" }} />
        </Col>
        <Col span={8}>
          <Search
            placeholder="Tìm kiếm sản phẩm..."
            onSearch={onSearch}
            className="search"
          />
        </Col>
        <Col span={8} style={{ textAlign: "right", paddingRight: "30px" }}>
          {renderAvt()}
        </Col>
      </Row>
    </Header>
  );
};

HeaderComponent.propTypes = {
  click: PropTypes.func,
};

export default React.memo(HeaderComponent);
