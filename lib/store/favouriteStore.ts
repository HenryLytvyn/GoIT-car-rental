import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavouriteStore {
  favouriteList: string[];
  setFavourite: (id: string) => void;
}

const useFavouriteList = create<FavouriteStore>()(
  persist(
    set => ({
      favouriteList: [],
      setFavourite: (id: string) =>
        set(state => ({
          favouriteList: state.favouriteList.includes(id)
            ? state.favouriteList.filter(item => item !== id)
            : [...state.favouriteList, id],
        })),
    }),
    { name: 'favourite-list' }
  )
);

export default useFavouriteList;
