import SelectPrimary from '@/components/SelectPrimary/SelectPrimary';
import css from './Catalog.module.css';

export default function Catalog() {
  return (
    <div className="container">
      <div className={css.filtersBlock}>
        <div className={css.selectBlock}>
          <p className={css.selectTitle}>Car brand</p>
          <SelectPrimary
            width={204}
            options={[
              'Aston Martin',
              'Audi',
              'BMW',
              'Bentley',
              'Buick',
              'Chevrolet',
              'Chrysler',
              'GMC',
              'HUMMER',
              'Hyundai',
              'Kia',
              'Lamborghini',
              'Land Rover',
              'Lincoln',
              'MINI',
              'Mercedes-Benz',
              'Mitsubishi',
              'Nissan',
              'Pontiac',
              'Subaru',
              'Volvo',
            ]}
            placeholder="Choose a brand"
          />
        </div>
      </div>
    </div>
  );
}
