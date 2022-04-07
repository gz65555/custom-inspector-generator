// panel-config.ts
import type { IPanelConfig } from "panel-manager/es/types";
import React from "react";
// import { Inspector } from "./UI/MUIInspector";
import { Inspector } from "./UI/AntdInspector";
import { NodeTree } from "./UI/NodeTree";

const config: IPanelConfig = {
  LTL: {
    component: <NodeTree></NodeTree>,
    resizable: true,
    resizeConfig: {
      defaultSize: {
        height: "auto",
        width: "auto",
      },
      minWidth: "200px",
    },
  },
  LTR: {
    component: <div>I'm LTR panel!</div>,
    resizeConfig: {
      defaultSize: {
        height: "auto",
        width: "auto",
      },
    },
  },
  LB: {
    component: <div>I'm LB panel!</div>,
    resizable: true, // make R resizable,
    resizeConfig: {
      defaultSize: {
        height: "400px",
        width: "auto",
      },
      minHeight: "250px",
      minWidth: "200px",
    },
  },
  R: {
    component: <Inspector />,
    resizable: true,
    resizeConfig: {
      defaultSize: {
        height: "100%",
        width: "700px",
      },
      style: { width: "100%" },
      minWidth: "300px",
    },
  },
};

export default config;
