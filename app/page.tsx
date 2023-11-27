import { BounceLoader } from "react-spinners";
import Favorites from "./components/favorites";
import Navbar from "./components/navbar";
import Search from "./components/search";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <Favorites />
    </div>
  );
}
