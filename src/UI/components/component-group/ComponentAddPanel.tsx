import { Carousel, Input } from "antd";
import type { CarouselRef } from "antd/lib/carousel";
import React, { useRef, useState } from "react";
import { ComponentPanelData, IComponentItem } from "./ComponentConfig";
import { ComponentSelect } from "./ComponentSelect";

const model = new ComponentPanelData();

export const ComponentAddPanel = (props: {
  onSelected: (data?: IComponentItem) => void;
}) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          padding: "0px 8px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <Input.Search
          placeholder="input search text"
          allowClear
          onSearch={() => {}}
          style={{ width: "100%" }}
        />
      </div>
      <ComponentSelect onSelected={props.onSelected} nodes={model.baseNodes} />
    </div>
    // <Carousel ref={scrollRef} dots={false}>
    //   <ComponentSelect index={0} model={model} scroll={scrollRef} />
    //   <ComponentSelect index={1} model={model} scroll={scrollRef} />
    // </Carousel>
  );
};
