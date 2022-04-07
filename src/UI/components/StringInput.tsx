import { Form, Input, InputNumber } from "antd";
import React from "react";

export const StringInput = () => {
  return (
    <Form.Item label="StringInput">
      <div style={{ marginLeft: 2, marginRight: 2 }}>
        <Input style={{ width: "100%" }} />
      </div>
    </Form.Item>
  );
};
