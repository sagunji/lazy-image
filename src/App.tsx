import React from "react";
import "./App.css";

import { IMAGES } from "./images.example";
import LazyThumbnail from "./LazyThumbnail";

function App() {
  return (
    <div className="app">
      <div className="container">
        {IMAGES.map((img: string) => (
          <LazyThumbnail src={img} />
        ))}
      </div>
    </div>
  );
}

export default App;
