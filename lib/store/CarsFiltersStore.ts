import { create } from 'zustand';
import type { QueryCarsType } from '@/types/apiRequest/apiRequest';

interface CarsFiltersState {
  query: QueryCarsType;
  setQuery: (q: Partial<QueryCarsType>) => void;
  resetQuery: () => void;
}

const useCarsFilters = create<CarsFiltersState>(set => ({
  query: { limit: '12', page: '1' },

  setQuery: query =>
    set(state => ({
      query: { ...state.query, ...query },
    })),

  resetQuery: () =>
    set({
      query: { limit: '12', page: '1' },
    }),
}));

export default useCarsFilters;
