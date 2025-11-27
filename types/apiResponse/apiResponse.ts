import type { CarCardType } from '../CarCard/CarCard';

export interface ResponseCarsType {
  cars: CarCardType[];
  totalCars: number;
  page: string;
  totalPages: number;
}
