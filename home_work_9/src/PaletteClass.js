import { Component } from "react";

import AverageColor from "./components/AverageColor";
import Background from "./components/Background";
import DominantColor from "./components/DominantColor";

import "./Palette.css";

const rgbLS = JSON.parse(localStorage.getItem("rgbClass")) ||
  { r: [127], g: [127], b: [127] };

const saveToLocalStorage = (obj) =>
  localStorage.setItem("rgbClass", JSON.stringify(obj));

const getRandomInt = () =>
  Math.floor(Math.random() * 256);

class Palette extends Component {
  constructor() {
    super();
    this.state = rgbLS;
  }

  onChangeColors() {
    this.setState((state) => {
      state.r.push(getRandomInt());
      state.g.push(getRandomInt());
      state.b.push(getRandomInt());

      saveToLocalStorage(state);

      return state;
    });
  }

  render() {
    const r = this.state.r.at(-1);
    const g = this.state.g.at(-1);
    const b = this.state.b.at(-1);

    const style = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: `rgb(${256 - r}, ${256 - g}, ${256 - b})`,
    };

    return (
      <div className="palette" style={style}>
        class instance
        <Background
          onChangeColors={() => this.onChangeColors()}
          {...this.state}
        />
        <AverageColor {...this.state} />
        <DominantColor {...this.state} />
      </div>
    );
  }
}

export default Palette;
