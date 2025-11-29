import { CarType } from '@/types/apiResponse/apiResponse';
import CarCard from '../CarCard/CarCard';
import css from './CarsList.module.css';

interface Props {
  items: CarType[];
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
