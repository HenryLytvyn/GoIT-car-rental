'use client';

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import css from './CarBookingForm.module.css';
import { BookingFormType } from '@/types/CarBookingForm/CarBookingForm';
import { postBookingCar } from '@/lib/api/api';
import { useBookingStore } from '@/lib/store/bookingStore';
import BookingFormSchema from '@/lib/validation/bookingFormSchema';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';

interface Props {
  carId: string;
}

export default function CarBookingForm({ carId }: Props) {
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const { addBooking, bookingList } = useBookingStore();

  const initialValues: BookingFormType = {
    name: '',
    email: '',
    date: '',
    comment: '',
    carId,
  };

  const bookingRequest = useMutation({
    mutationFn: postBookingCar,
    onSuccess: () => {
      setIsBooked(true);
    },
    onError: () => {
      toast.error('The error is occured');
    },
  });

  const { isPending } = bookingRequest;

  async function handleSubmit(
    values: BookingFormType,
    actions: FormikHelpers<BookingFormType>
  ) {
    const booking = await bookingRequest.mutateAsync(values);
    addBooking(booking.carId, booking.date);
    actions.resetForm();
  }

  console.log(bookingList);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingFormSchema}
      >
        <div className={css.formWrapper}>
          {!isBooked && !isPending && (
            <Form className={css.form}>
              <h2 className={css.formTitle}>Book your car now</h2>
              <p className={css.formCall}>
                Stay connected! We are always ready to help you.
              </p>
              <ul className={css.fieldsList}>
                <li className={css.fieldItem}>
                  <Field
                    type="text"
                    name="name"
                    className={css.input}
                    placeholder="Name*"
                  />

                  <ErrorMessage
                    component="span"
                    name="name"
                    className={css.errorMessage}
                  ></ErrorMessage>
                </li>
                <li className={css.fieldItem}>
                  <Field
                    type="email"
                    name="email"
                    className={css.input}
                    placeholder="Email*"
                  />

                  <ErrorMessage
                    component="span"
                    name="email"
                    className={css.errorMessage}
                  ></ErrorMessage>
                </li>
                <li className={css.fieldItem}>
                  <Field
                    type="text"
                    name="date"
                    className={css.input}
                    placeholder="Booking date*"
                  />

                  <ErrorMessage
                    component="span"
                    name="date"
                    className={css.errorMessage}
                  ></ErrorMessage>
                </li>
                <li className={css.fieldItem}>
                  <Field
                    as="textarea"
                    name="comment"
                    className={`${css.comment} ${css.input}`}
                    placeholder="Comment"
                  />

                  <ErrorMessage
                    component="span"
                    name="comment"
                    className={css.errorMessage}
                  ></ErrorMessage>
                </li>
              </ul>

              <button type="submit" className={css.buttonSubmit}>
                Send
              </button>
            </Form>
          )}
          {isBooked && (
            <p className={css.confirmation}>The car was successfully booked!</p>
          )}
          {isPending && (
            <div className={`loaderContainer ${css.loaderContainer}`}>
              <Loader />
            </div>
          )}
        </div>
      </Formik>
    </>
  );
}
