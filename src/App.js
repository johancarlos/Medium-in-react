import React, { Component } from "react";
import Navegation from "./components/Navegation.js";
import ListMedium from "./components/ListPublication.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navegation />
        <ListMedium />
      </div>
    );
  }
}
export default App;
