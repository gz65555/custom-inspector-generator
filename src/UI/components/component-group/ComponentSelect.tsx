import type { CarouselRef } from "antd/lib/carousel";
import React, { useState } from "react";
import "./component.css";
import { ComponentPanelData, IComponentItem } from "./ComponentConfig";
import { ComponentItem } from "./ComponentItem";
import { observer } from "mobx-react-lite";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const ComponentSelect = observer(
  (props: {
    nodes: IComponentItem[];
    onSelected: (data: IComponentItem) => void;
  }) => {
    const [currentNodes, setCurrentNodes] = useState<IComponentItem[]>(
      props.nodes
    );
    const [lastNodes, setLastNodes] = useState<IComponentItem[][]>([]);

    return (
      <div>
        <div
          onClick={() => {
            if (lastNodes.length > 0) {
              const nodes = lastNodes.pop();
              setCurrentNodes(nodes!);
              setLastNodes(lastNodes);
            }
          }}
          style={{ display: "flex", width: "100%" }}
        >
          {lastNodes.length > 0 ? (
            <LeftOutlined
              style={{ lineHeight: "26px", fontSize: "10px", paddingLeft: 5 }}
            />
          ) : null}
          <div style={{ textAlign: "center", fontSize: 13, flexGrow: 1 }}>
            Component
          </div>
        </div>
        <div
          style={{
            maxHeight: 300,
            overflow: "scroll",
          }}
        >
          {currentNodes.map((data) => (
            <ComponentItem
              key={data.key}
              onClick={() => {
                if (data.children) {
                  lastNodes.push(currentNodes);
                  setCurrentNodes(data.children);
                  setLastNodes(lastNodes);
                } else {
                  props.onSelected(data);
                }
              }}
              data={data}
            />
          ))}
        </div>
      </div>
    );
  }
);
