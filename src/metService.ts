import { Parser } from "xml2js";
interface IWeatherData {
  product: [];
}

export async function canISurfNow() {
  const result = await getLatestWeather();
  console.log(fs);
  console.log(fs);
  return result;
}
async function getLatestWeather() {
  const uri =
    "https://api.met.no/weatherapi/locationforecast/1.9/?lat=55.63&lon=12.52";
  const result = await (await fetch(uri)).text();
  const promise = new Promise<IWeatherData>(r => {
    new Parser().parseString(result, (err: any, parsedXml: any) => {
      r(parsedXml.weatherdata as IWeatherData);
    });
  });

  return promise;
}
