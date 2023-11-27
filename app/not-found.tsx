import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <div className="h-[50vh] flex flex-col items-center justify-center text-md md:text-xl">
        <p className=" text-md md:text-xl font-medium">
          Oops something went wrong!
        </p>

        <p className="text-sm text-neutral-400">
          Return by clicking{" "}
          <span className="hover:underline cursor-pointer">
            <Link href="/">here</Link>
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}
