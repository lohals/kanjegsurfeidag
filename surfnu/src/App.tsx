import Slide from "@material-ui/core/Slide";
import * as React from "react";
import "./App.css";
import No from "./No";
import Place from "./Place";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
          <Slide
            direction="down"
            in={true}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <div>
              <No />
              <Place />
            </div>
          </Slide>
        </p>
      </div>
    );
  }
}

export default App;
