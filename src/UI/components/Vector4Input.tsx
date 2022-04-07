import { Form, InputNumber } from "antd";
import React from "react";
import { InputItem } from "./InputItem";

export const Vector4Input = () => {
  return (
    <Form.Item
      style={{ flexWrap: "nowrap" }}
      label="tilling offset"
    >
      <div
        className="input-wrap"
        style={{ display: "flex", marginBottom: "4px" }}
      >
        <InputItem label="X"/>
        <InputItem label="Y"/>
      </div>
      <div className="input-wrap" style={{ display: "flex" }}>
        <InputItem label="Z"/>
        <InputItem label="W"/>
      </div>
    </Form.Item>
  );
};
