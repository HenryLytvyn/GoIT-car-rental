// CalendarBookingDate.tsx

'use client';

import { FieldInputProps, FormikProps } from 'formik';
import React from 'react';
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

  // ⚡ чтобы можно было передать любые HTML-атрибуты
  [key: string]: any;
}

export default function CalendarBookingDate({
  field,
  form,
  placeholder,
  options = {},
  className,
  ...props // <-- здесь будут остальные пропсы, переданные через <Field ... >
}: Props) {
  console.log('Flatpickr options:', options);

  return (
    <Flatpickr
      value={field.value}
      onChange={dates => form.setFieldValue(field.name, dates[0])}
      options={{
        dateFormat: 'd.m.Y',
        disableMobile: true,
        ...options, // <-- кастомные Flatpickr options
      }}
      render={(_, ref) => (
        <input
          ref={ref}
          name={field.name}
          placeholder={placeholder}
          className={className || css.input}
          readOnly
          {...props} // <-- передаёт ВСЕ пропсы (id, data-*, type, etc.)
        />
      )}
    />
  );
}
