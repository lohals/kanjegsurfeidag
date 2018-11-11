import { Parser } from "xml2js";

// Met.no raw data structures

export interface IForecast {
  $: {
    datatype: "forecast";
    from: Date;
    to: Date;
  };
  temperature: [{ $: { value: number } }];
  windDirection: [{ $: { name: string; deg: number } }];
  windSpeed: [{ $: { mps: number; name: string } }];
  windGust: [{ $: { mps: number } }];
  areaMaxWindSpeed: [{ $: { mps: number } }];
  // humidity: [Array];
  // pressure: [Array];
  // cloudiness: [Array];
  // fog: [Array];
  // lowClouds: [Array];
  // mediumClouds: [Array];
  // highClouds: [Array];
  // dewpointTemperature: [Array];
}

interface IProduct {
  $: { class: "pointData" };
  time: [
    {
      $: any;
      location: IForecast[];
    }
  ];
}
export interface IMetData {
  product: IProduct[];
}

export async function getLatestWeatherForCoordinate(lat: number, lon: number) {
  const uri =
    `https://api.met.no/weatherapi/locationforecast/1.9/?lat=${lat}&lon=${lon}`;

  // Fetch latest data
  const result = await (await fetch(uri)).text();

  return await new Promise<IMetData>(resolve => {
    new Parser().parseString(result, (err: any, parsedXml: any) => {
      // Convert from xml to json
      resolve(parsedXml.weatherdata as IMetData);
    });
  });
}
