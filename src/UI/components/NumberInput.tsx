import { Form, InputNumber } from "antd";
import React from "react";

export const NumberInput = () => {
  return (
    <Form.Item label="InputNumber" style={{ flexWrap: "nowrap" }}>
      <div className="input-wrap" style={{ marginLeft: 2, marginRight: 2 }}>
        <InputNumber style={{ width: "100%" }} />
      </div>
    </Form.Item>
  );
};
