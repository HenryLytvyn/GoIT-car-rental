import { QueryCarsType } from '@/types/apiRequest/apiRequest';
import type {
  CarBookingResponseType,
  CarsResponseType,
  CarType,
} from '@/types/apiResponse/apiResponse';
import { BookingFormType } from '@/types/CarBookingForm/CarBookingForm';
import axios from 'axios';

const BaseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getCars({
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  limit,
  page,
}: QueryCarsType): Promise<CarsResponseType> {
  const { data } = await axios.get<CarsResponseType>(`${BaseURL}/cars`, {
    params: { brand, rentalPrice, minMileage, maxMileage, limit, page },
  });

  return data;
}

export async function getCarBrends(): Promise<string[]> {
  const { data } = await axios.get<string[]>(`${BaseURL}/brands`);

  return data;
}

export async function getCarById(id: string): Promise<CarType> {
  const { data } = await axios.get<CarType>(`${BaseURL}/cars/${id}`);

  return data;
}

export async function postBookingCar(
  form: BookingFormType
): Promise<CarBookingResponseType> {
  const { data } = await axios.post<CarBookingResponseType>(
    'https://jsonplaceholder.typicode.com/posts',
    form
  );

  return data;
}
