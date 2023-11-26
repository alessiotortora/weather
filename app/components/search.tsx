"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import WeatherCard from "./card";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function Search() {
  const { toast } = useToast();
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState<string>("");

  async function getWeather() {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}`
      );

      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Try to write your city correct.",
          action: (
            <ToastAction onClick={() => setSearch("")} altText="Try again">
              Try again
            </ToastAction>
          ),
        });
      }
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      throw new Error();
    }
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="px-8 flex gap-x-2">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Enter your city!"
          value={search}
        />
        <Button onClick={() => getWeather()} type="submit">
          Search
        </Button>
      </div>

      <WeatherCard weather={weather} />
    </div>
  );
}
