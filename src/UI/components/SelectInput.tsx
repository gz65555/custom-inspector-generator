import { Form, Select } from "antd";
import React from "react";

export const SelectInput = () => {
  return (
    <Form.Item label="Select">
      <div style={{ margin: "0 2px" }}>
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </div>
    </Form.Item>
  );
};
