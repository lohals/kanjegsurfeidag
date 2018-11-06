import { loadWeatherData } from "./weatherService";

describe("weatherService", async () => {
  it("canReturnWeatherData", async () => {
    const result = await loadWeatherData();
    expect(result.points.length).toBeGreaterThan(0);
  });
});
