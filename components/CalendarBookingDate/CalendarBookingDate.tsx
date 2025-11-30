'use client';

import { FieldInputProps, FormikProps } from 'formik';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import css from './CalendarBookingDate.module.css';

interface Props {
  field: FieldInputProps<Date>;
  form: FormikProps<any>;
  placeholder?: string;
  options?: {
    minDate?: string;
    maxDate?: string;
    [key: string]: any;
  };
  className?: string;
  [key: string]: any;
}

export default function CalendarBookingDate({
  field,
  form,
  placeholder,
  options = {},
  className,
  ...props
}: Props) {
  console.log('Flatpickr options:', options);

  return (
    <Flatpickr
      value={field.value}
      onChange={dates => form.setFieldValue(field.name, dates[0])}
      options={{
        dateFormat: 'd.m.Y',
        disableMobile: true,
        ...options,
      }}
      render={(_, ref) => (
        <input
          ref={ref}
          name={field.name}
          placeholder={placeholder}
          className={className || css.input}
          readOnly
          {...props}
        />
      )}
    />
  );
}
