import { QueryCarsType } from '@/types/apiRequest/apiRequest';
import type { ResponseCarsType } from '@/types/apiResponse/apiResponse';
import axios from 'axios';

const BaseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getCars({
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  limit,
  page,
}: QueryCarsType): Promise<ResponseCarsType> {
  const { data } = await axios.get<ResponseCarsType>(`${BaseURL}/cars`, {
    params: { brand, rentalPrice, minMileage, maxMileage, limit, page },
  });

  return data;
}
