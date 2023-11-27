import { create } from "zustand";

type FavoriteWeather = {
  cityName: string;
  celsius: number;
};

type WeatherStore = {
  favorites: FavoriteWeather[];
  addFavorite: (favorite: FavoriteWeather) => void;
  deleteFavorite: (cityName: string) => void;
};

const useFavoriteStore = create<WeatherStore>((set) => ({
  favorites: [],

  addFavorite: (favorite: FavoriteWeather) => {
    set((state) => ({
      favorites: [...state.favorites, favorite],
    }));
  },

  deleteFavorite: (cityName: string) => {
    set((state) => ({
      favorites: state.favorites.filter(
        (favorite) => favorite.cityName !== cityName
      ),
    }));
  },
}));

export default useFavoriteStore;
