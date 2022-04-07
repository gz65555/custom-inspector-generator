import { Form, InputNumber, Switch } from "antd";
import React from "react";

export const SwitchInput = () => {
  return (
    <Form.Item label="Switch" valuePropName="checked">
      <Switch style={{ margin: "0 2px" }} />
    </Form.Item>
  );
};
