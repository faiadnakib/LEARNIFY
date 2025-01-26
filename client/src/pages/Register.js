import React from "react";
import { Form, Input, Button } from "antd";

// form handler
const onFinishHandler = (values) => {
  console.log(values); // Logs form values when submitted
};

const Register = () => {
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="form-container"
      >
        <h1>Register form</h1>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
