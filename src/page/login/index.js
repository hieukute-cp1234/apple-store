import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Background from "../../images/bg.png";
import { useHistory } from "react-router-dom";
import { style } from "./styled";

const Login = () => {
  const history = useHistory();
  const onFinish = (value) => {
    history.push("/");
  };
  const BgStyle = {
    width: "1365px",
    height: "654px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Row align="middle" style={BgStyle}>
      <Col style={style.col} span={8} offset={8}>
        <h1 style={style.title}>Đăng nhập</h1>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18, offset: 3 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={style.form}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "" },
              { type: "email", message: "" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "" },
              { min: 6, message: "" },
              { max: 20, message: "" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 3, span: 18 }}>
            <Button style={style.button} htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
