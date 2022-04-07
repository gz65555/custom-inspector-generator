import { Form, InputNumber } from "antd";
import React from "react";
import { FormItemType } from "../type";
import { Inspector } from "../Inspector";

export const NumberInput = () => {
  return (
    <Form.Item label="InputNumber" style={{ flexWrap: "nowrap" }}>
      <div className="input-wrap" style={{ marginLeft: 2, marginRight: 2 }}>
        <InputNumber style={{ width: "100%" }} />
      </div>
    </Form.Item>
  );
};

Inspector.registerFormItem(FormItemType.Number, NumberInput);
