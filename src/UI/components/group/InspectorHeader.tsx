import { Avatar, Divider } from "antd";
import React from "react";

export const InspectorHeader = () => {
  return (
    <>
      <div style={{ padding: "10px 15px", fontSize: "12px", display: "flex" }}>
        <Avatar style={{ backgroundColor: "#f56a00" }} size="large"></Avatar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          Hello
        </div>
      </div>
      <Divider style={{ marginTop: 0, marginBottom: 8 }} />
    </>
  );
};
