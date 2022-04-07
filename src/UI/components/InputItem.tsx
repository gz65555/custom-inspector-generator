import { InputNumber } from "antd";
import React, { useRef } from "react";

export const InputItem = (props: { label: string }) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputNumber
      ref={ref}
      onFocus={() => {
        ref.current!.select();
      }}
      style={{ flex: 1, margin: "0 2px" }}
      prefix={
        <div style={{ color: "gray", width: 12, textAlign: "center" }}>
          {props.label}
        </div>
      }
    ></InputNumber>
  );
};
