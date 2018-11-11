import GoogleMapReact, { Coords } from 'google-map-react';
import * as React from 'react';
import { Location, Locations } from './Locations';
import Marker from "./Marker";

interface MapContainerProps {
  onLocationChange: (location: Location) => void
}

interface MapContainerState {
  center?: Coords;
}

export default class MapContainer extends React.Component<MapContainerProps, MapContainerState> {

  state = {
    center: Locations[0]
  }

  onChildClick = (key: string, location: Location) => {
    this.setState({
      center: location
    }, () => this.props.onLocationChange(location))
  }

  resetCenter = () => {
    this.setState({ center: undefined })
  }

  public render() {
    const { center } = this.state;
    const surfLocations = Locations.map(location => <Marker key={location.id} {...location} />)

    return (
      <div style={{ height: '500px', width: '100vw' }}>
        <GoogleMapReact
          defaultCenter={Locations[0]} // TODO: Get default center from props
          center={center}
          defaultZoom={12}
          onChildClick={this.onChildClick}
          onDrag={this.resetCenter}
          onZoomAnimationStart={this.resetCenter}
        >
          {surfLocations}
        </GoogleMapReact>
      </div>
    );
  }
}
