import React from "react";
import ManagementRoute from "./pages/managementRoute";
import { GlobalStyle } from "./styles-global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ManagementRoute />
    </div>
  );
}

export default App;
