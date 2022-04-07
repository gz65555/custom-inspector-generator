import { Form, InputNumber } from "antd";
import React from "react";
import { InputItem } from "./InputItem";

export const Vector3Input = () => {
  return (
    <Form.Item
      style={{ flexWrap: "nowrap" }}
      label="position"
    >
      <div
        className="input-wrap"
        style={{ display: "flex", marginBottom: "4px" }}
      >
        <InputItem label="X"/>
        <InputItem label="Y"/>
        <InputItem label="Z"/>
      </div>
    </Form.Item>
  );
};
