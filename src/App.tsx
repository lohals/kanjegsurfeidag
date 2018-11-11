import Slide from "@material-ui/core/Slide";
import * as React from "react";
import "./App.css";
import { Locations } from './components/Map/Locations';
import MapContainer from './components/Map/MapContainer';
import No from "./No";
import Question from "./Question";

interface AppState {
  currentLocation: string;
}

class App extends React.Component<any, AppState> {

  state = {
    currentLocation: Locations[0].location
  }

  setLocation = (location: string) => {
    this.setState({
      currentLocation: location
    })
  }

  public render() {
    const { currentLocation } = this.state
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="App-intro">
          <Slide
            direction="down"
            in={true}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <div>
              <Question location={currentLocation} />
              <No />
              <MapContainer onLocationChange={this.setLocation} />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default App;
