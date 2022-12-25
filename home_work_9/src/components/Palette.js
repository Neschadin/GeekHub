import { useState } from "react";

import AverageColor from "./AverageColor";
import Background from "./Background";
import DominantColor from "./DominantColor";

import "./Palette.css";
let i = 1;
const rgbLS = JSON.parse(localStorage.getItem("rgb"))
  || { r: [127], g: [127], b: [127] };

const saveToLocalStorage = (obj) =>
  localStorage.setItem("rgb", JSON.stringify(obj));

const getRandomInt = () =>
  Math.floor(Math.random() * 256);

// rgb.ri = 256 - rgb.r;
// rgb.gi = 256 - rgb.g;
// rgb.bi = 256 - rg

function Palette() {
  const [rgb, changeState] = useState(rgbLS); 
  
  function changeColors() {
    changeState((rgb) => {
      rgb.r.push(getRandomInt());
      rgb.g.push(getRandomInt());
      rgb.b.push(getRandomInt());

      saveToLocalStorage({ ...rgb });
      
      console.log(i++);
      return { ...rgb };
    });
  };


  return (
    <div onClick={changeColors} className="palette">
      <Background {...rgb} />
      <AverageColor {...rgb} />
      <DominantColor {...rgb} />
    </div>
  );
}

// Palette.whyDidYouRender = true;

export default Palette;
