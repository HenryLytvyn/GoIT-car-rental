import { CarType } from '@/types/apiResponse/apiResponse';
import { create } from 'zustand';

interface CarsStore {
  carsList: CarType[];
  rewriteCarsList: (value: CarType[]) => void;
  addCarsToList: (value: CarType[]) => void;
}

const useCarsStore = create<CarsStore>()(set => ({
  carsList: [],
  rewriteCarsList: (value: CarType[]) =>
    set({
      carsList: value,
    }),
  addCarsToList: (value: CarType[]) =>
    set(state => ({
      carsList: [...state.carsList, ...(Array.isArray(value) ? value : [])],
    })),
}));

export default useCarsStore;
