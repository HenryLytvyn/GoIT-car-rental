import { create } from 'zustand';

interface BookingItemType {
  carId: string;
  date: string;
  isBooked: boolean;
}

interface BookingStore {
  bookingList: BookingItemType[];
  addBooking: (carId: string, date: string) => void;
  removeBooking: (carId: string, date: string) => void;
}

export const useBookingStore = create<BookingStore>()(set => ({
  bookingList: [],
  addBooking: (carId: string, date: string) =>
    set(state => ({
      bookingList: [...state.bookingList, { carId, date, isBooked: true }],
    })),

  removeBooking: (carId: string, date: string) =>
    set(state => ({
      bookingList: state.bookingList.filter(
        item => !(item.carId === carId && item.date === date)
      ),
    })),
}));
