import { Location } from './components/Map/Locations';
import { loadWeatherDataForLocation } from "./weatherService";

const location: Location = {
  id: "x",
  location: "xx",
  lat: 1,
  lng: 2,
}

describe("weatherService", async () => {
  it("canReturnWeatherData", async () => {
    const result = await loadWeatherDataForLocation(location);
    expect(result.points.length).toBeGreaterThan(0);
  });
});
