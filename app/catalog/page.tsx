import { getCarBrends } from '@/lib/api/api';
import CatalogClient from './Catalog.client';

export default async function Catalog() {
  const brands = await getCarBrends();

  return (
    <div className="container">
      <CatalogClient brands={brands} />
    </div>
  );
}
