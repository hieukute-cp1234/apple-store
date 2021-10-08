import React from "react";
import { Layout, Menu } from "antd";
import {
  TabletOutlined,
  HomeOutlined,
  MobileOutlined,
  FundProjectionScreenOutlined,
  LaptopOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const { collapsed } = props;
  const numberWidth = 150;

  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const { pathname } = useLocation();

  return (
    <Sider
      collapsed={collapsed}
      theme="light"
      style={{
        width: numberWidth,
        minWidth: numberWidth,
        maxWidth: numberWidth,
      }}
    >
      <Menu defaultSelectedKeys={pathname} mode="inline">
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <NavLink to="/">Trang chủ</NavLink>
        </Menu.Item>
        <Menu.Item key="/iphone" icon={<MobileOutlined />}>
          <NavLink to="/iphone">Điện thoại</NavLink>
        </Menu.Item>
        <Menu.Item key="/macbook" icon={<LaptopOutlined />}>
          <NavLink to="/macbook">MacBook</NavLink>
        </Menu.Item>
        <Menu.Item key="/watch" icon={<DashboardOutlined />}>
          <NavLink to="/watch">Đồng hồ</NavLink>
        </Menu.Item>
        <Menu.Item key="/ipad" icon={<TabletOutlined />}>
          <NavLink to="/ipad">Ipad</NavLink>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<FundProjectionScreenOutlined />}
          title="Phụ kiện"
        >
          <Menu.Item key="/headphone">
            <NavLink to="/headphone">Tại nghe</NavLink>
          </Menu.Item>
          <Menu.Item key="/phonecharger">
            <NavLink to="/phonecharger">Sạc</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default NavBar;
