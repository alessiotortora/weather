"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-0">
      <div className=" p-8 flex items-center justify-between">
        <p>
          <Link href="https://alessiotortora.com/">Visit my website!</Link>
        </p>

        <p>&copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
}
