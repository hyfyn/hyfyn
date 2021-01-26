import React from "react";
import Routes from "routes";
import "./styles/App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "app/styles/theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
