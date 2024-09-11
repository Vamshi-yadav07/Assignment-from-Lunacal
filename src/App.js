// App.js
import React from "react";
import TabsWidget from "./TabsWidget";
import Gallery from "./CauroselTab";
import "./App.css"; // Assuming you're using external CSS for styling

const App = () => {
  return (
    <div className="main-container">
      <div className="sample-card"></div>
      <div className="='main-card">
        <TabsWidget />
        <hr className="horizontal-line" />
        <Gallery />
        <hr className="horizontal-line" />
      </div>
    </div>
  );
};

export default App;
