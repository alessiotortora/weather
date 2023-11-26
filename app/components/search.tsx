"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>();
  console.log(search);

  return (
    <div className="px-8 flex gap-x-2">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search your city"
      />
      <Button type="submit">Search</Button>
    </div>
  );
}
