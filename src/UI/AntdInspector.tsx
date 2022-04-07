import {
  Avatar,
  Button,
  Card,
  Cascader,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Collapse,
  Carousel,
} from "antd";
// import "antd/dist/antd.css";
import "antd/dist/antd.dark.css";
import "antd/dist/antd.compact.css";
import React from "react";
import { Vector3Input } from "./components/Vector3Input";
import { Vector4Input } from "./components/Vector4Input";
import { NumberInput } from "./components/NumberInput";
import { SwitchInput } from "./components/SwitchInput";
import { SelectInput } from "./components/SelectInput";
import { StringInput } from "./components/StringInput";
import { InspectorFolder } from "./components/group/InspectorFolder";
import { InspectorForm } from "./components/group/InspectorForm";
import { InspectorHeader } from "./components/group/InspectorHeader";
import { RightOutlined } from "@ant-design/icons";
import { ComponentItem } from "./components/component-group/ComponentItem";
import { ComponentSelect } from "./components/component-group/ComponentSelect";
import { ComponentAddPanel } from "./components/component-group/ComponentAddPanel";

export const Inspector = () => {
  const [isAddingComponent, setIsAddingComponent] =
    React.useState<boolean>(false);

  const onSelected = (data) => {
    console.log("selected", data);
    setIsAddingComponent(false);
  };
  return (
    <div onContextMenu={(e) => e.preventDefault()} style={{ height: "100%" }}>
      <InspectorHeader />
      <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <InspectorForm needApply={false}>
          <InspectorFolder title="Folder">
            <SelectInput />
            <NumberInput />
            <Vector3Input />
            <Vector4Input />
          </InspectorFolder>
          <SwitchInput />
          <StringInput />
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => {
                setIsAddingComponent(true);
              }}
              type="primary"
              style={{ width: 300 }}
            >
              Add Component
            </Button>
            <div style={{ position: "relative", width: 300, top: 2 }}>
              <div
                style={{
                  display: isAddingComponent ? "block" : "none",
                  position: "absolute",
                  width: 300,
                  zIndex: 1,
                  border: "1px solid rgb(240, 240, 240)",
                }}
              >
                <ComponentAddPanel onSelected={onSelected} />
              </div>
            </div>
          </div>
          {/* <StringInput /> */}
        </InspectorForm>
      </div>
    </div>
  );
};
