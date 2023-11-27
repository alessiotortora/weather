"use client";
import React from "react";
import useFavoriteStore from "../store/favoriteStore";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Favorites() {
  const { favorites, deleteFavorite } = useFavoriteStore();
  const { toast } = useToast();

  const handleDelete = (favorite: any) => {
    deleteFavorite(favorite);
    toast({
      description: "Deleting was a success!",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-x-2 gap-y-2 mt-10">
      {favorites.map((favorite, index) => (
        <>
          <div className="px-8 w-2/3 md:w-80 flex justify-between items-center">
            <div key={index} className="flex justify-between w-1/2">
              <p className="font-bold">{favorite.cityName}</p>
              <p>{favorite.celsius}</p>
            </div>
            <Button onClick={() => handleDelete(favorite.cityName)}>
              Delete
            </Button>
          </div>
        </>
      ))}
    </div>
  );
}
