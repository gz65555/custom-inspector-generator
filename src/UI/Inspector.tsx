import { Form } from "antd";
import React from "react";
import { FormItemConfig } from "./type";

export class Inspector {
  private static formItemMap = new Map<
    any,
    React.JSXElementConstructor<FormItemConfig>
  >();
  public static registerFormItem(
    type: any,
    comp: React.JSXElementConstructor<FormItemConfig>
  ) {
    Inspector.formItemMap.set(type, comp);
  }

  public static Item(props: { config: FormItemConfig }) {
    const config = props.config;
    const Component = Inspector.formItemMap.get(config.type);
    if (!Component) {
      return null;
    }
    return <Component {...config} />;
  }

  public static Form(props: { inspectorConfig: FormItemConfig[] }) {
    return (
      <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Form
          style={{ userSelect: "none" }}
          labelCol={{ flex: "100px" }}
          wrapperCol={{ flex: "auto" }}
          labelAlign="left"
          layout="horizontal"
          onValuesChange={() => {}}
          onFieldsChange={() => {}}
        >
          {props.inspectorConfig.map((config) => (
            <Inspector.Item key={config.label} config={config} />
          ))}
        </Form>
      </div>
    );
  }
}
