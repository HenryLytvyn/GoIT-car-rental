'use client';

import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary';
import DoubleInput from '@/components/DoubleInput/DoubleInput';
import SelectPrimary from '@/components/SelectPrimary/SelectPrimary';
import css from './Catalog.module.css';
import { useState } from 'react';

interface Query {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export default function CatalogClient() {
  const [query, setQuery] = useState<Query>({ page: '1' });

  function updateQuery(key: keyof Query, value: string) {
    setQuery({
      ...query,
      [key]: value,
    });
  }

  console.log(query);

  return (
    <div className={css.catalogContainer}>
      <ul className={css.filtersList}>
        <li className={css.filterItem}>
          <p className={css.selectTitle}>Car brand</p>
          <SelectPrimary
            width={204}
            height={272}
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
            handleChange={value => updateQuery('brand', value)}
          />
        </li>

        <li className={css.filterItem}>
          <p className={css.selectTitle}>Price/ 1 hour</p>
          <SelectPrimary
            width={196}
            height={188}
            options={['30', '40', '50', '60', '70', '80', '90', '100']}
            placeholder="Choose a price"
            handleChange={value => updateQuery('rentalPrice', value)}
            symbolBeforeValue="$"
          />
        </li>

        <li>
          <p className={css.selectTitle}>Car mileage / km</p>
          <DoubleInput
            handleChange={value => {
              updateQuery('minMileage', value.fromRender);
              updateQuery('maxMileage', value.toRender);
            }}
          />
        </li>
      </ul>
      <ButtonPrimary width={156} text="Search" />
    </div>
  );
}
