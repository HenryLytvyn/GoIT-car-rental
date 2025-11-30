// 'use client';

// import useCarsFilters from '@/lib/store/CarsFiltersStore';
// import { QueryCarsType } from '@/types/apiRequest/apiRequest';

// export default async function mileAgeValidation() {
//   const { queryStore, setQueryStore } = useCarsFilters();

//   if (queryStore.minMileage !== '' && queryStore.maxMileage !== '') {
//     const minMileageNumber = Number(queryStore.minMileage);
//     const maxMileageNumber = Number(queryStore.maxMileage);

//     if (maxMileageNumber < minMileageNumber) {
//       setQueryStore({
//         ...queryStore,
//         maxMileage: String(minMileageNumber + 500),
//       });

//       await new Promise(r => setTimeout(r));
//       // waiting one tick of the event loop so React can process the state update and trigger a re-render
//     }
//   }

//   return;
// }

import useCarsFilters from '@/lib/store/CarsFiltersStore';

export default async function mileAgeValidation() {
  const store = useCarsFilters.getState();
  const { queryStore } = store;

  if (queryStore.minMileage !== '' && queryStore.maxMileage !== '') {
    const minMileageNumber = Number(queryStore.minMileage);
    const maxMileageNumber = Number(queryStore.maxMileage);

    if (maxMileageNumber < minMileageNumber) {
      useCarsFilters.setState({
        queryStore: {
          ...queryStore,
          maxMileage: String(minMileageNumber + 500),
        },
      });
    }
  }
}
