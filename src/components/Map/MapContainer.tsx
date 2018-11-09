import GoogleMapReact from 'google-map-react';
import * as React from 'react';
import Marker from "./Marker";

export default class MapContainer extends React.Component<any, any> {
      public render() {
        return (
          <div style={{ height: '500px', width: '100vw' }}>
            <GoogleMapReact
              defaultCenter={{
                lat: 55.63,
                lng: 12.52
              }}
              defaultZoom={13}  
            >
               <Marker lat={55.63} lng={12.52} text={"x"} />
            </GoogleMapReact>
          </div>
        );
      }
}
