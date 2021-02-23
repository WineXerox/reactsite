import './App.css';
import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <ParticlesBg type="fountain" bg={true}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;