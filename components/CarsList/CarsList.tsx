import type { CarCardType } from '@/types/CarCard/CarCard';
import CarCard from '../CarCard/CarCard';
import css from './CarsList.module.css';

interface Props {
  items: CarCardType[];
}

export default function CarsList({ items }: Props) {
  return (
    <ul className={css.carsList}>
      {items.map(item => (
        <CarCard key={item.id} car={item} />
      ))}
    </ul>
  );
}
