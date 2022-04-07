import { RightOutlined } from "@ant-design/icons";
import React from "react";
import "./component.css";
import { IComponentItem } from "./ComponentConfig";

export const ComponentItem = (props: {
  onClick?: React.MouseEventHandler;
  data: IComponentItem;
}) => {
  const { data } = props;
  return (
    <div
      onClick={props.onClick}
      className="component-item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 30,
        paddingLeft: 18,
        paddingRight: 10,
      }}
    >
      <div>{data.label ?? data.key}</div>
      {data.children ? (
        <RightOutlined style={{ lineHeight: "26px", fontSize: "10px" }} />
      ) : null}
    </div>
  );
};
