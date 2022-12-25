import "./Palette.css";

import { useState } from "react";
import AverageColor from "./AverageColor";
import Background from "./Background";
import DominantColor from "./DominantColor";

const getRandomInt = () => Math.floor(Math.random() * 256);


// rgb.ri = 256 - rgb.r;
// rgb.gi = 256 - rgb.g;
// rgb.bi = 256 - rgb.b;


function Palette() {
  const [rgb, changeState] = useState({ r: [127], g: [127], b: [127] });
  
  const changeColors = () => {
    changeState((prevState) => {
      prevState.r.push(getRandomInt());
      prevState.g.push(getRandomInt());
      prevState.b.push(getRandomInt());

      return {...prevState};
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

export default Palette;
