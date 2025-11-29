import { create } from 'zustand';

interface FavouriteStore {
  favouriteList: string[];
  setFavourite: (id: string) => void;
}

export const useFavouriteList = create<FavouriteStore>()(set => ({
  favouriteList: [],
  setFavourite: (id: string) =>
    set(state => ({
      favouriteList: state.favouriteList.includes(id)
        ? state.favouriteList.filter(item => item !== id)
        : [...state.favouriteList, id],
    })),
}));
