'use client';

import { useState } from 'react';
import css from './DoubleInput.module.css';
import type { DoubleInputValuesType } from '@/types/DoubleInput/DoubleInput';

interface Props {
  handleChange: (value: DoubleInputValuesType) => void;
}

export default function DoubleInput({ handleChange }: Props) {
  const [values, setValues] = useState<DoubleInputValuesType>({
    from: '',
    to: '',
  });

  function handleChangeFrom(event: React.ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '');
    const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const newValues = {
      ...values,
      from: formatted,
    };

    setValues(newValues);
    handleChange(newValues);
  }

  function handleChangeTo(event: React.ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '');
    const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const newValues = {
      ...values,
      to: formatted,
    };

    setValues(newValues);
    handleChange(newValues);
  }

  return (
    <div className={css.inputsBlock}>
      <div className={css.inputContainer}>
        <p>From</p>
        <input
          onChange={handleChangeFrom}
          className={css.input}
          type="text"
          inputMode="numeric"
          value={values.from}
        />
      </div>

      <div className={css.divider}></div>

      <div className={css.inputContainer}>
        <p>To</p>
        <input
          onChange={handleChangeTo}
          className={css.input}
          type="text"
          inputMode="numeric"
          value={values.to}
        />
      </div>
    </div>
  );
}
