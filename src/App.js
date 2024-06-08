
import lightOff from "./images/lightoff.png";
import lightOn from "./images/lighton.png";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isOn: false };
  }
  changeLight() {
    this.setState({ isOn: !this.state.isOn }); // Описываем состояние
  }
  render() {
    const isOnLight = this.state.isOn;
    if (!isOnLight) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
    return (
      <div>
        <img src={isOnLight ? lightOn : lightOff} />
        <button onClick={() => this.changeLight()}>
          {isOnLight ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default App;
