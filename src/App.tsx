// import React from "react";
import PanelManager from "panel-manager";
import panelConfig from "./panel-config";
// import { ThemeProvider } from "@emotion/react";
// import { createTheme } from "@mui/system";
// import CssBaseline from "@mui/material/CssBaseline";

// const App = () => {
//   // Note that you MUST set PanelManger's Parent Component size.
//   const theme = createTheme({
//     palette: { mode: "dark" },
//   });
//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
// {/* <PanelManager autoBorder panelConfig={panelConfig} /> */}
//       </ThemeProvider>
//     </div>
//   );
// };

// export default App;

import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? "dark" : "light",
          // mode: "dark",
          mode: "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "100vh", width: "100vw" }}>
        <PanelManager autoBorder panelConfig={panelConfig} />
      </div>
      {/* <Routes />/ */}
    </ThemeProvider>
  );
}
