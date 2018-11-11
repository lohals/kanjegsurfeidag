import * as React from 'react';
export interface MarkerProps {
  id: string
  location: string
  lat: number
  lng: number
}

const Marker: React.SFC<MarkerProps> = (props) => {
  return <div style={markerStyle}>{props.id}</div>;
};

export default Marker

const K_WIDTH = 20;
const K_HEIGHT = 20;

const markerStyle: React.CSSProperties = {
  position: 'absolute',
  width: K_WIDTH,
  // tslint:disable-next-line:object-literal-sort-keys
  height: K_HEIGHT,
  top: -K_HEIGHT / 2,
  left: -K_WIDTH / 2,
  border: '2px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};