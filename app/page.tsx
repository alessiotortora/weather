import getWeather from "./actions/getWeather";
import Card from "./components/card";
import { ModeToggle } from "./components/darkMode";
import Search from "./components/search";

export default async function Home() {
  const weather = await getWeather();
  console.log(weather)
  return (
    <div>
      <ModeToggle />
      <Search />
      <Card />
    </div>
  );
}
