import "./App.css";
import React, { useState } from "react";
import News from "./components/News";
import NewsAPI from "./components/NewsAPI";

function App() {

  return (
    <div>
      <NewsAPI />
    </div>
  );
}

export default App;
