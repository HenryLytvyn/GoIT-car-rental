'use client';

import { useState } from 'react';
import css from './DoubleInput.module.css';

interface Values {
  from: number;
  to: number;
  fromRender: string;
  toRender: string;
}

interface Props {
  handleChange: (value: Values) => void;
}

export default function DoubleInput({ handleChange }: Props) {
  const [values, setValues] = useState<Values>({
    from: 0,
    to: 0,
    fromRender: '',
    toRender: '',
  });

  function handleChangeFrom(event: React.ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '');
    const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    setValues({
      ...values,
      from: Number(digits),
      fromRender: formatted,
    });
  }

  function handleChangeTo(event: React.ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '');
    const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    setValues({
      ...values,
      to: Number(digits),
      toRender: formatted,
    });
  }

  handleChange(values);

  return (
    <div className={css.inputsBlock}>
      <div className={css.inputContainer}>
        <p>From</p>
        <input
          onChange={handleChangeFrom}
          className={css.input}
          type="text"
          inputMode="numeric"
          value={values.fromRender}
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
          value={values.toRender}
        />
      </div>
    </div>
  );
}
