import { Location } from './components/Map/Locations';
import { getLatestWeatherForCoordinate, IMetData } from "./metService";

interface IWeatherDataPoint {
  from: Date;
  to: Date;
  data: {
    temperature: number;
    windDirection: {
      name: string;
      deg: number;
    };
    windSpeed: {
      mps: number;
      name: string;
    };
    windGust?: { mps: number };
    areaMaxWindSpeed?: { mps: number };
  };
}

export interface IWeatherData {
  points: IWeatherDataPoint[];
}
function map(raw: IMetData): IWeatherData {
  return {
    points: raw.product[0].time
      .filter(t => t.location[0].temperature)
      .map(t => {
        const {
          temperature,
          windDirection,
          windSpeed,
          areaMaxWindSpeed,
          windGust
        } = t.location[0];
        return {
          data: {
            areaMaxWindSpeed: areaMaxWindSpeed
              ? {
                mps: areaMaxWindSpeed[0].$.mps
              }
              : undefined,
            temperature: temperature[0].$.value,
            windDirection: {
              deg: windDirection[0].$.deg,
              name: windDirection[0].$.name
            },
            windSpeed: {
              mps: windSpeed[0].$.mps,
              name: windSpeed[0].$.name
            },

            windGust: windGust
              ? {
                mps: windGust[0].$.mps
              }
              : undefined
          },
          from: t.$.from,
          to: t.$.to
        };
      })
  };
}

export async function loadWeatherDataForLocation(location: Location): Promise<IWeatherData> {
  const rawData = await getLatestWeatherForCoordinate(location.lat, location.lng);
  return map(rawData);
}
