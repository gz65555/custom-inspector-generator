import { Button, Form } from "antd";
import React from "react";
import "./inspector.css";

export const InspectorForm = (props: {
  children: React.ReactNode;
  needApply?: boolean;
}) => {
  return (
    <Form
      style={{ userSelect: "none" }}
      labelCol={{ flex: "100px" }}
      wrapperCol={{ flex: "auto" }}
      labelAlign="left"
      layout="horizontal"
      onValuesChange={() => {
        console.log("on form change");
      }}
      onFieldsChange={() => {
        console.log("on field change");
      }}
    >
      {props.children}
      {props.needApply ? (
        <Form.Item>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row-reverse",
            }}
          >
            <Button style={{ width: 60 }}>Apply</Button>
            <Button style={{ width: 60, marginRight: 8 }}>Revert</Button>
          </div>
        </Form.Item>
      ) : null}
    </Form>
  );
};
