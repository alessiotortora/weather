import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import useFavoriteStore from "../store/favoriteStore";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface AstroDetails {
  sunrise: string;
  sunset: string;
  // ... other astro related properties
}

interface Astronomy {
  astro: AstroDetails;
}

interface AstronomyData {
  astronomy: Astronomy;
  // ... other properties if needed
}

interface WeatherLocation {
  name: string;
  country: string;
}

interface WeatherCondition {
  icon: string;
  text: string;
}

interface WeatherCurrent {
  temp_c: number;
  feelslike_c: number;
  condition: WeatherCondition;
}

interface WeatherData {
  location: WeatherLocation;
  current: WeatherCurrent;
}

interface WeatherCardProps {
  weather?: WeatherData;
  data?: AstronomyData;
}

export default function WeatherCard({ weather, data }: WeatherCardProps) {
  const { addFavorite } = useFavoriteStore();
  const { toast } = useToast();

  if (!weather || !weather.location || !weather.current || !data) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center text-md md:text-xl">
        <p className=" text-md md:text-xl font-medium">
          Start searching your city&apos;s weather!
        </p>

        <p className="text-sm text-neutral-400">Nothing to display yet.</p>
      </div>
    );
  }

  const cityName = weather?.location?.name;
  const country = weather?.location?.country;
  const icon = weather?.current?.condition.icon;
  const condition = weather?.current?.condition.text;
  const celsius = weather?.current?.temp_c;
  const feelsLike = weather?.current?.feelslike_c;
  const sunrise = data?.astronomy?.astro.sunrise;
  const sunset = data?.astronomy?.astro.sunset;

  const handleAddFavorite = () => {
    if (weather && weather.location) {
      addFavorite({
        cityName: weather.location.name,
        celsius: weather.current.temp_c,
      });
      toast({
        description: `${weather.location.name} was added to your favorites.`,
      });
    }
  };

  return (
    <Card className="w-64 md:w-72 h-96">
      <CardHeader>
        <CardTitle>{cityName}</CardTitle>
        <CardDescription>{country}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <div className="h-20 w-20 relative">
          <Image
            alt="icon"
            fill
            className="object-cover"
            src={`https:${icon}`}
          />
        </div>
        <p>{condition}</p>
        <p>{celsius} Celsius</p>
        <p>{feelsLike} Celsius</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex gap-x-2">
          <p>Sun will rise:</p>
          <p>{sunrise}</p>
        </div>
        <div className="flex gap-x-2">
          <p>Sun will set:</p>
          <p>{sunset}</p>
        </div>
        <div className="w-full flex justify-center p-2">
          <Button onClick={handleAddFavorite}>Add to favorites</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
