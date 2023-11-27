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
  const [astronomy, setAstronomy] = useState();
  const [search, setSearch] = useState<string>("");

  console.log(weather);

  async function getWeather() {
    try {
      const today = new Date().toISOString().split("T")[0];

      const weatherRes = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}`
      );

      if (!weatherRes.ok) {
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

      const astronomyRes = await fetch(
        `https://api.weatherapi.com/v1/astronomy.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}&dt=${today}`
      );

      if (!astronomyRes.ok) {
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
      const weatherData = await weatherRes.json();
      const astronomyData = await astronomyRes.json();
      
      setWeather(weatherData);
      setAstronomy(astronomyData);

    } catch (error) {
      throw new Error();
    }
  }

  return (
    <div className="flex flex-col gap-y-5 justify-center items-center">
      <div className="px-8 flex gap-x-2 w-full md:w-1/3">
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

      <WeatherCard weather={weather} data={astronomy} />
    </div>
  );
}
