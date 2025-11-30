import { create } from 'zustand';
import type { QueryCarsType } from '@/types/apiRequest/apiRequest';
import { catalogInitialQuery } from '@/constants/constants';

interface CarsFiltersState {
  queryStore: QueryCarsType;
  setQueryStore: (q: Partial<QueryCarsType>) => void;
  resetQueryStore: () => void;
}

const useCarsFilters = create<CarsFiltersState>(set => ({
  queryStore: catalogInitialQuery,

  setQueryStore: query =>
    set(state => ({
      queryStore: { ...state.queryStore, ...query },
    })),

  resetQueryStore: () =>
    set({
      queryStore: catalogInitialQuery,
    }),
}));

export default useCarsFilters;
