import React from "react";
import { ModeToggle } from "./darkMode";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 md:px-8">
      <div>
        <Link href="/">
          <h1 className="font-bold text-xl">Minimal Weather</h1>
        </Link>
      </div>
      <ModeToggle />
    </div>
  );
}
