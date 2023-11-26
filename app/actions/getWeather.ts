export default async function getWeather() {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${{
      WEATHER_KEY: any,
    }}&q=london`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
