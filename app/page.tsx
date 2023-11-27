import { BounceLoader } from "react-spinners";
import Favorites from "./components/favorites";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Footer from "./components/footer";

export default async function Home() {
  return (
    <div className="h-screen border">
      <Navbar />
      <Search />
      <Favorites />
      <Footer />
    </div>
  );
}
