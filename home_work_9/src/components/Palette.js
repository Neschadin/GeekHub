import "./Palette.css";

import { useState } from "react";
import AverageColor from "./AverageColor";
import Background from "./Background";
import DominantColor from "./DominantColor";

const getRandomInt = () => Math.floor(Math.random() * 256);

// const rgb = {
//   r: getRandomInt(),
//   g: getRandomInt(),
//   b: getRandomInt(),
// };
// rgb.ri = 256 - rgb.r;
// rgb.gi = 256 - rgb.g;
// rgb.bi = 256 - rgb.b;

console.log("palette");

function Palette() {
  const [rgb, changeState] = useState({ r: 127, g: 127, b: 127, counter: 0 });
console.log("palette2");
  const changeColors = () => {
    changeState(prevState =>({
      r: getRandomInt(),
      g: getRandomInt(),
      b: getRandomInt(),
      // counter : prevState.counter + 1
    }));
  };
  // console.log(rgb);

  return (
    <div onClick={changeColors} className="palette">
      <Background {...rgb} />
      <AverageColor {...rgb} />
      <DominantColor {...rgb} />
    </div>
  );
}

export default Palette;
