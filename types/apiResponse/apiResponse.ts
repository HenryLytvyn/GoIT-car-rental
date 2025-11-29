export interface CarsResponseType {
  cars: CarType[];
  totalCars: number;
  page: string;
  totalPages: number;
}

export interface CarType {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

export interface CarBookingResponseType {
  name: string;
  email: string;
  date: string;
  comment?: string;
  carId: string;
  id: number;
}
