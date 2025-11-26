import { getCars } from '@/lib/api/api';
import CatalogClient from './Catalog.client';

export default async function Catalog() {
  // console.log(await getCars(1));

  return (
    <div className="container">
      <CatalogClient />
    </div>
  );
}
