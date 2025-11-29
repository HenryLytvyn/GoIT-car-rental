import * as Yup from 'yup';

const BookingFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  date: Yup.date()
    .typeError('Please enter a valid date in format YYYY-MM-DD')
    .required('Rent date is required')
    .min(new Date(), 'Date cannot be in the past'),
  comment: Yup.string()
    .min(3, 'Comment must be at least 3 characters')
    .max(150, 'Name is too long'),
  carId: Yup.string().required(),
});

export default BookingFormSchema;
