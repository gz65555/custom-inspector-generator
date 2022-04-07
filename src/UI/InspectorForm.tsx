import React from "react";
import { Inspector } from "./Inspector";
import { FormItemConfig, FormItemType } from "./type";
import "./components";

const mockConfig: Array<FormItemConfig> = [
  { type: FormItemType.Text, label: "trust" },
  { type: FormItemType.Number, label: "origin" },
];

export const InspectorForm = () => {
  return <Inspector.Form inspectorConfig={mockConfig}></Inspector.Form>;
};
