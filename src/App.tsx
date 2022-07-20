import React from "react";
import "./App.css";

import { IMAGES } from "./images.example";

// @ts-ignore
import { LazyImage } from "react-load-image-lazily";

function App() {
  return (
    <div className="app">
      <div className="container">
        {IMAGES.map((img: string) => (
          <LazyImage source={img} className={"img__wrapper"} />
        ))}
      </div>
    </div>
  );
}

export default App;
