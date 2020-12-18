import React from "react";

import MainLayout from "layout/main";
import HomePage from "pages/home";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

export default App;
