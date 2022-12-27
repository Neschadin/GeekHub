import { useState } from "react";

import AverageColor from "./components/AverageColor";
import Background from "./components/Background";
import DominantColor from "./components/DominantColor";

import "./Palette.css";

const rgbLS = JSON.parse(localStorage.getItem("rgb"))
  || {  r: [127],  g: [127],  b: [127]  };

const saveToLocalStorage = (obj) =>
  localStorage.setItem("rgb", JSON.stringify(obj));

const getRandomInt = () => Math.floor(Math.random() * 256);

function Palette() {
  const [rgb, changeState] = useState(rgbLS);

  const r = rgb.r.at(-1);
  const g = rgb.g.at(-1);
  const b = rgb.b.at(-1);

  const styleBg = {
    transitionDuration: "1000ms",
    transitionProperty: "background-color",
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: `rgb(${256 - r}, ${256 - g}, ${256 - b})`,
  };

  function changeColors() {
    changeState(({ r, g, b }) => {
      r.push(getRandomInt());
      g.push(getRandomInt());
      b.push(getRandomInt());

      saveToLocalStorage({ r, g, b });

      return { r, g, b };
    });
  }

  return (
    <div style={styleBg}>
      <div className="palette">
        <Background onChangeColors={changeColors} {...rgb} />
        <AverageColor {...rgb} />
        <DominantColor {...rgb} />
      </div>
    </div>
  );
}

export default Palette;
