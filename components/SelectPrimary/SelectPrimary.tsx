import css from './SelectPrimary.module.css';

interface Props {
  width: number;
  height: number;
  options: string[];
  placeholder?: string;
}

export default function SelectPrimary({
  width,
  height,
  options,
  placeholder = 'Select',
}: Props) {
  return (
    // <select style={{ width: width }}>
    //   {options.map(option => (
    //     <option key={option} value={option}>
    //       {option}
    //     </option>
    //   ))}
    // </select>

    <>
      <div className={css.customSelect} style={{ width: width }}>
        <div className={css.customSelectTrigger}>{placeholder}</div>
        <div className={css.customSelectOptionsContainer}>
          <ul className={css.customSelectOptions}>
            {options.map(option => (
              <li
                className={css.customSelectItem}
                key={option}
                data-value={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <input type="hidden" name="selectedValue" id="selectedValue"></input>
    </>
  );
}
