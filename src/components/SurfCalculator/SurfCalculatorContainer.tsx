import * as React from 'react';
import { IWeatherData, loadWeatherDataForLocation } from '../../weatherService';
import { Location } from '../Map/Locations';

export interface SurfCalculatorContainerProps {
  location: Location
}

export interface SurfCalculatorContainerState {
  weatherData?: IWeatherData
}

export default class SurfCalculatorContainer extends React.Component<SurfCalculatorContainerProps, SurfCalculatorContainerState> {

  constructor(props: SurfCalculatorContainerProps) {
    super(props);
    this.state = {
      weatherData: undefined,
    }
  }

  async componentDidMount() {
    this.loadWeatherData();
  }

  async componentDidUpdate(prevProps: SurfCalculatorContainerProps) {
    if (prevProps === this.props) { return; }
    this.loadWeatherData() // TODO: Delay this call to avoid lag in the map
  }

  loadWeatherData = async () => {
    const weatherData = await loadWeatherDataForLocation(this.props.location)
    this.setState({
      weatherData
    })
  }

  public render() {
    const { weatherData } = this.state;
    if (!weatherData) { return null; }
    return (
      <>
        <div>
          Weather: {weatherData.points[0].data.windSpeed.name}
        </div>
        <div>
          Windspeed: {weatherData.points[0].data.windSpeed.mps} mph
        </div>
      </>
    );
  }
}
