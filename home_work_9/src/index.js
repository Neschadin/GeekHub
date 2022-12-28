import React from "react";
import ReactDOM from "react-dom/client";

import Palette from "./Palette";
import PaletteClass from "./PaletteClass"

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Palette />
    <PaletteClass />
  </>
);
