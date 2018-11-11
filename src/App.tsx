import Slide from "@material-ui/core/Slide";
import * as React from "react";
import "./App.css";
import { Location, Locations } from './components/Map/Locations';
import MapContainer from './components/Map/MapContainer';
import SurfCalculatorContainer from './components/SurfCalculator/SurfCalculatorContainer';
import Question from "./Question";

interface AppState {
  currentLocation: Location;
}

class App extends React.Component<any, AppState> {

  state = {
    currentLocation: Locations[0]
  }

  setLocation = (location: Location) => {
    this.setState({
      currentLocation: location
    })
  }

  public render() {
    const { currentLocation } = this.state
    return (
      <div className="App">
        <div className="App-intro">
          <Slide
            direction="down"
            in={true}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <div>
              <Question location={currentLocation.location} />
              <SurfCalculatorContainer location={currentLocation} />
              <MapContainer onLocationChange={this.setLocation} />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default App;
