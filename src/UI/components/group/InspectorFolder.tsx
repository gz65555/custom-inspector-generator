import { Collapse } from "antd";
import React from "react";

export const InspectorFolder = (props: {
  children: React.ReactNode;
  title: string;
}) => {
  const { children, title } = props;
  return (
    <Collapse ghost defaultActiveKey={title}>
      <Collapse.Panel
        className="inspector-collapse-group"
        header={title}
        key={title}
      >
        {children}
      </Collapse.Panel>
    </Collapse>
  );
};
