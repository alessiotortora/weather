import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface WeatherLocation {
  name: string;
  country: string;
}

interface WeatherCondition {
  icon: string;
}

interface WeatherCurrent {
  temp_c: number;
  condition: WeatherCondition;
}

interface WeatherData {
  location: WeatherLocation;
  current: WeatherCurrent;
}

interface WeatherCardProps {
  weather?: WeatherData; 
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  if (!weather || !weather.location || !weather.current) {
    return null;
  }

  const cityName = weather?.location?.name;

  return (
    <Card className="bg-[url('/images/clouds.avif')] object-cover w-56 h-96">
      <CardHeader>
        <CardTitle>{cityName}</CardTitle>
        <CardDescription>{weather?.location?.country}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-20 w-20 relative">
          <Image
            alt="icon"
            fill
            className="object-cover"
            src={`https:${weather?.current?.condition.icon}`}
          />
        </div>
        <p>{weather?.current?.temp_c}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
