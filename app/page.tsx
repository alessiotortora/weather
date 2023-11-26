
import Card from "./components/card";
import { ModeToggle } from "./components/darkMode";
import Search from "./components/search";

export default async function Home() {
 
  return (
    <div>
      <ModeToggle />
      <Search />
      
    </div>
  );
}
